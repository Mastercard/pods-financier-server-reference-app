require('dotenv').config();

const express = require('express');
const app = express();
const ip = require('ip');

// Ping end point for basic diagnostic
app.get('/ping', function (req, res) {
  return res.send('pong');
});

// Instantiate OpenApi client and wire it with mastercard oauth1a signing
const authUtils = require('pod-smartphone-api/src/authUtils');
const openApiClient = require('pod-api-client/src/ApiClient');
const clientInstance = openApiClient.instance;
clientInstance.basePath = process.env.MCAPI_BASE_PATH;
if (process.env.MCAPI_AUTH) {
  authUtils.applyAuth(clientInstance);
}

// Initialize state and services
const state = {};
const financierApi = require('pod-api-client/src/api/FinanciersApi');
const financierApiService = new financierApi(clientInstance);
const contractsApi = require('pod-api-client/src/api/ContractsApi');
const contractsApiService = new contractsApi(clientInstance);
const pmntSessApi = require('pod-api-client/src/api/PaymentSessionsApi');
const pmntSessApiService = new pmntSessApi(clientInstance);

const moment = require('moment-timezone');
const getRandomValues = require('get-random-values');
const getUUID = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );

// Load and cache latest financier and contract
financierApiService.getFinanciers(
  { limit: 1, offset: 0 },
  (err, data, resp) => {
    if (err) {
      console.log('***** error *****\n', err);
    }
    if (data && data.items && data.items[0]) {
      console.log('Retrieved financier', data.items[0]);
      state.financierId = data.items[0].id;
      contractsApiService.getContracts(
        state.financierId,
        { limit: 1, offset: 0 },
        (err, data, resp) => {
          if (err) {
            console.log('***** error *****\n', err);
          }
          if (data && data.items && data.items[0]) {
            console.log('Retrieved contract', data.items[0]);
            state.contract = data.items[0];
            console.log('Loaded state', state);
          } else {
            console.log('***** response *****\n', resp);
          }
        }
      );
    } else {
      console.log('***** response *****\n', resp);
    }
  }
);

// Retrieve latest Contract API
const getRequiredContractResponse = (contractId) => ({
  contractId,
  deviceName: 'Samsung Phone',
  shopId: 'Parther Shop',
  customerName: "Partner's Customer",
  tenure: '10',
  tenureUnit: 'month',
  tenureBalance: '5',
  downPayment: '50.00',
  balanceDue: '450.00',
  currency: 'NGN',
  paymentDueDate: moment().add(10, 'month').format(),
});
app.get('/contract', (req, res) => {
  if (state.contract && state.financierId) {
    return res.send(getRequiredContractResponse(state.contract.id));
  } else {
    const financierId = state.financierId;
    console.log('Retrieve latest contract for financier', financierId);
    contractsApiService.getContracts(
      financierId,
      { limit: 1, offset: 0 },
      (err, data, resp) => {
        if (err) {
          console.log('***** error *****\n', err);
          return res.status(500).send({ err });
        }
        if (data && data.items && data.items[0]) {
          const contract = data.items[0];
          state.contract = contract;
          return res.send(getRequiredContractResponse(contract.contractId));
        } else {
          console.log('***** response *****\n', resp);
          return res.status(500).send({ resp });
        }
      }
    );
  }
});

// Retrieve Payment URL API
const jsrsasign = require('jsrsasign');
const signingKey = require('./signingKey');
const getAccessToken = (id, expiryDate) => {
  const headers = {
    kid: process.env.MCAPI_CONSUMER_KEY.split('!')[0],
  };
  const claims = {
    jti: id,
    exp: expiryDate,
  };
  return jsrsasign.jws.JWS.sign('RS512', headers, claims, signingKey);
};
const retrieveLightboxUrl = (type) => (req, res) => {
  const contractId = req.query.contract_id || state.contract.id;
  if (!state.deviceId) state.deviceId = getUUID();
  const { financierId, deviceId } = state;
  const exp = moment().add(10, 'minute');
  pmntSessApiService.createPaymentSession(
    {
      paymentSessionRequest: JSON.stringify({
        financierId,
        contractId,
        deviceId,
        scope: 'DEFAULT',
        totalAmount: '559900',
        expiryDate: exp.format(),
        callBackUrl: `http://financier-system.com/${getUUID()}`,
        lineItems: [
          {
            amount: '200',
            lineItemDescription: 'Instalment Amount',
            lineItemType: 'INSTALMENT',
            flag: 4,
          },
        ],
      }),
    },
    (err, data, resp) => {
      if (err) {
        console.log('***** error *****\n', err);
        return res.status(500).send({ err });
      }
      if (data) {
        console.log('Created payment session', data);
        return res.send({
          url: `${data.lightBoxUrl}/index.html#/payment?session_id=${data.id}`,
          accessToken: data.authToken,
          tokenType: data.tokenType,
          expiresIn: data.expiresIn
        });
      } else {
        console.log('***** response *****\n', resp);
        return res.status(500).send({ resp });
      }
    }
  );
};
app.get('/payment', retrieveLightboxUrl('payment'));
app.get('/manage_card', retrieveLightboxUrl('method'));

const ipAddress = ip.address();
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(
    '\n\n***************************************************************'
  );
  console.log(
    `Consumer backend listening on port ${port} of machine ${ipAddress}`
  );
  console.log(
    '***************************************************************\n\n'
  );
});

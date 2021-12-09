require('dotenv').config();

const express = require('express');
const app = express();

// JSON parsing in request body
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

// Serve static from build folder. Not required for dev.
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});

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

// Initialize API services
const financierApi = require('pod-smartphone-api/src/financier')(
  clientInstance
);
const gatewayApi = require('pod-smartphone-api/src/gateway')(clientInstance);
const gwConfApi = require('pod-smartphone-api/src/gatewayConfiguration')(
  clientInstance
);
const contractApi = require('pod-smartphone-api/src/contract')(clientInstance);
const txnApi = require('pod-smartphone-api/src/transaction')(clientInstance);
const deviceApi = require('pod-smartphone-api/src/device')(clientInstance);

// Financiers API routes
app.get('/financiers', financierApi.getFinanciers);
app.post('/financiers', financierApi.createFinancier);

//Gateway API route
app.get('/gateways', gatewayApi.getGateways);

// Gateway Configuration API routes
app.get('/gateway-configs', gwConfApi.getGatewayConfigurations);
app.post('/gateway-configs', gwConfApi.createGatewayConfiguration);
app.get('/gateway-configs/:gwConfId', gwConfApi.getGatewayConfiguration);
app.put('/gateway-configs/:gwConfId', gwConfApi.updateGatewayConfiguration);
app.delete('/gateway-configs/:gwConfId', gwConfApi.deleteGatewayConfiguration);

// Contract API routes
app.get('/contracts', contractApi.getContracts);
app.post('/contracts', contractApi.createContract);
app.get('/contracts/:contractId', contractApi.getContract);
app.put('/contracts/:contractId', contractApi.updateContract);

// Transaction API routes
app.get('/transactions', txnApi.getTransactions);
app.post('/transactions', txnApi.createTransaction);
app.put('/transactions/:transactionId', txnApi.updateTransaction);

// Device API routes
app.get('/devices', deviceApi.getDevices);

// Startup on port specified in ENV or default 8080
app.listen(process.env.PORT || 8080);

module.exports = (clientInstance) => {
  const contractsApi = require('pod-api-client/src/api/ContractsApi');
  const contractsApiService = new contractsApi(clientInstance);

  const createContract = (req, res) => {
    const contract = req.body;
    console.log('Creating contract ', contract);
    contractsApiService.addContract(
      {
        contractCreateRequest: JSON.stringify(contract),
      },
      (err, data, resp) => {
        if (err) {
          console.log('***** error *****\n', err);
          return res.status(500).send({ err });
        }
        if (data) {
          return res.status(201).send(data);
        }
        console.log('***** response *****\n', resp);
        return res.status(500).send({ resp });
      }
    );
  };

  const getContracts = (req, res) => {
    const { financierId, limit, offset } = req.query;
    console.log('Retrieve contracts for financier', financierId);
    contractsApiService.getContracts(
      financierId,
      { limit, offset },
      (err, data, resp) => {
        if (err) {
          console.log('***** error *****\n', err);
          return res.send({ err });
        }
        if (data) {
          return res.send(data);
        } else {
          console.log('***** response *****\n', resp);
          return res.send({ resp });
        }
      }
    );
  };

  const getContract = (req, res) => {
    const { contractId } = req.params;
    const { financierId } = req.query;
    console.log(
      'Retrieving contract config for id ',
      contractId,
      ' and financier ',
      financierId
    );
    contractsApiService.getContract(
      contractId,
      financierId,
      (err, data, resp) => {
        if (err) {
          console.log('***** error *****\n', err);
          return res.status(500).send({ err });
        }
        if (data) {
          return res.send(data);
        }
        console.log('***** response *****\n', resp);
        return res.status(500).send({ resp });
      }
    );
  };

  const updateContract = (req, res) => {
    const { contractId } = req.params;
    const contract = req.body;
    console.log(
      'Updating contract for ',
      contract,
      ' with id ',
      contractId
    );
    contractsApiService.updateContract(
      contractId,
      {
        contractUpdateRequest: JSON.stringify(contract),
      },
      (err, data, resp) => {
        if (err) {
          console.log('***** error *****\n', err);
          return res.status(500).send({ err });
        }
        if (data) {
          return res.status(200).send(data);
        }
        console.log('***** response *****\n', resp);
        return res.status(500).send({ resp });
      }
    );
  };

  return { createContract, getContracts, getContract, updateContract };
};

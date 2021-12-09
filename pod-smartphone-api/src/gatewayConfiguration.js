module.exports = (clientInstance) => {
  const gwConfApi = require('pod-api-client/src/api/GatewayConfigurationApi');
  const gwConfApiService = new gwConfApi(clientInstance);

  const createGatewayConfiguration = (req, res) => {
    const gwConf = req.body;
    console.log('Creating gateway config for ', gwConf);
    gwConfApiService.addGatewayConfiguration(
      {
        gatewayConfigurationRequest: JSON.stringify(gwConf),
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

  const getGatewayConfigurations = (req, res) => {
    const { financierId, limit, offset } = req.query;
    console.log('Retrieve gateway configs for financier', financierId);
    gwConfApiService.getGatewayConfigurations(
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

  const getGatewayConfiguration = (req, res) => {
    const { gwConfId } = req.params;
    console.log(
      'Retrieving gateway configuration for id ',
      gwConfId
    );
    gwConfApiService.getGatewayConfiguration(
      gwConfId,
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

  const updateGatewayConfiguration = (req, res) => {
    const gwConfId = req.params.gwConfId;
    const gwConf = req.body;
    console.log('Updating gateway config for ', gwConf, ' with id ', gwConfId);
    gwConfApiService.updateGatewayConfiguration(
      gwConfId,
      {
        gatewayConfigurationRequest: JSON.stringify(gwConf),
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

  const deleteGatewayConfiguration = (req, res) => {
    const gwConfId = req.params.gwConfId;
    console.log('Deleting gateway config for ', gwConfId);
    gwConfApiService.deleteGatewayConfiguration(gwConfId, (err, data, resp) => {
      if (err) {
        console.log('***** error *****\n', err);
        return res.status(500).send({ err });
      }
      if (resp.res.statusCode === 200) {
        return res.status(200).send(data);
      }
      console.log('***** response *****\n', resp);
      return res.status(500).send({ resp });
    });
  };

  return {
    createGatewayConfiguration,
    getGatewayConfigurations,
    getGatewayConfiguration,
    updateGatewayConfiguration,
    deleteGatewayConfiguration,
  };
};

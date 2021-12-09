module.exports = (clientInstance) => {
  const gatewayApi = require('pod-api-client/src/api/GatewayApi');
  const gatewayApiService = new gatewayApi(clientInstance);

  const getGateways = (req, res) => {
    gatewayApiService.getGateways(
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

  return { getGateways };
};

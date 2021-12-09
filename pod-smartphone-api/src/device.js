module.exports = (clientInstance) => {
  const deviceApi = require('pod-api-client/src/api/DevicesApi');
  const deviceApiService = new deviceApi(clientInstance);

  const getDevices = (req, res) => {
    const { financierId, limit, offset } = req.query;
    console.log('Retrieve devices for financier', financierId);
    deviceApiService.getDevices(
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

  return { getDevices };
};

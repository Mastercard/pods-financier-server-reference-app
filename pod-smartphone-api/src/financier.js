module.exports = (clientInstance) => {
  const financierApi = require('pod-api-client/src/api/FinanciersApi');
  const financierApiService = new financierApi(clientInstance);

  const createFinancier = (req, res) => {
    console.log('Creating financier for ', req.body);
    financierApiService.addFinancier(
      { financierCreateRequest: JSON.stringify(req.body) },
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

  const getFinanciers = (req, res) => {
    let { limit, offset } = req.query;
    if (!limit) limit = 1;
    if (!offset) offset = 0;
    financierApiService.getFinanciers({ limit, offset }, (err, data, resp) => {
      if (err) {
        console.log('***** error *****\n', err);
        return res.send({ err });
      }
      if (data) {
        return res.send(data);
      }
      console.log('***** response *****\n', resp);
      return res.send({ resp });
    });
  };

  return {
    createFinancier,
    getFinanciers,
  };
};

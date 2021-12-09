module.exports = (clientInstance) => {
  const transactionsApi = require('pod-api-client/src/api/TransactionsApi');
  const transactionsApiService = new transactionsApi(clientInstance);

  const createTransaction = (req, res) => {
    const transaction = req.body;
    console.log('Creating transaction ', transaction);
    transactionsApiService.addTransaction(
      {
        transactionRequest: JSON.stringify(transaction),
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

  const getTransactions = (req, res) => {
    const { financierId, limit, offset } = req.query;
    console.log(
      'Retrieve transactions for financier and contract',
      financierId,
      req.query.contractId
    );
    transactionsApiService.getTransactions(
      financierId,
      { limit, offset, contractId: req.query.contractId },
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

  const updateTransaction = (req, res) => {
    const { transactionId } = req.params;
    const transaction = req.body;
    console.log(
      'Updating Contract config for ',
      transaction,
      ' with id ',
      transactionId
    );
    transactionsApiService.updateTransaction(
      transactionId,
      {
        transactionRequest: JSON.stringify(transaction),
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

  return { createTransaction, getTransactions, updateTransaction };
};

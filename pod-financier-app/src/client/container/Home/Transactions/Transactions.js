import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Layout, Table, Spin } from 'antd';
import ContainerDimensions from 'react-container-dimensions';

import { LOAD_TRANSACTIONS } from 'client/behaviour/transactions/reducer';

const { Content } = Layout;

const cls = 'transactions';
const tableCls = `${cls}-table`;

export const TransactionsScreen = ({ financiers, transactions, loadTransactions }) => {
  const [pagination, setPagination] = useState({ pageSize: 50, current: 1 });

  const financierId = financiers.data?.items?.[0].id;
  const { isLoading, data } = transactions;

  useEffect(() => {
    if (financierId) {
      loadTransactions({
        financierId,
        offset: (pagination.current - 1) * pagination.pageSize,
        limit: pagination.pageSize
      });
    }
  }, [loadTransactions, financierId, pagination]);

  const onTableChange = pagination => setPagination(pagination);

  return (
    <>
      <PageHeader title="Transactions" ghost={false} />
      <Content>
        <ContainerDimensions>
          {({ width, height }) => {
            const scrollHeight = height - 55 - 48 - 64; // - tableHead - 2 * padding - paginationHeight
            return (
              <Spin spinning={isLoading} tip="Loading...">
                <Table
                  className={tableCls}
                  rowKey="id"
                  onChange={onTableChange}
                  columns={columns}
                  dataSource={data?.items}
                  pagination={pagination}
                  scroll={{ x: width, y: scrollHeight }}
                />
              </Spin>
            );
          }}
        </ContainerDimensions>
      </Content>
    </>
  );
};

export default connect(
  (state) => ({
    financiers: state.financiers.load,
    transactions: state.transactions.load
  }),
  (dispatch) => ({
    loadTransactions: payload => dispatch({ type: LOAD_TRANSACTIONS, payload }),
  })
)(TransactionsScreen);

const columns = [
  {
    title: 'Ref ID',
    dataIndex: 'id',
    width: 250
  },
  {
    title: 'Contract ID',
    dataIndex: 'contractId',
    width: 200
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    width: 100
  },
  {
    title: 'Total Amount',
    dataIndex: 'totalAmount',
    width: 150
  },
  {
    title: 'Transaction Ref',
    dataIndex: 'transactionReference',
    width: 150
  },
  {
    title: 'Date',
    dataIndex: 'transactionDate',
    width: 250
  },
  {
    title: 'Type',
    dataIndex: 'transactionType',
    width: 150
  },
  {
    title: 'Status',
    dataIndex: 'transactionStatus',
    width: 150
  }
];
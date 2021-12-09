import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PageHeader, Layout, Table, Button, Spin } from 'antd';
import ContainerDimensions from 'react-container-dimensions';

import { LOAD_CONTRACTS } from 'client/behaviour/contracts/reducer';

const { Content } = Layout;

const cls = 'contracts';
const addBtnCls = `${cls}-add-btn`;
const tableCls = `${cls}-table`;

export const ContractsIndexScreen = ({ loadContracts, contracts, financiers }) => {
  const history = useHistory();

  const [pagination, setPagination] = useState({ pageSize: 50, current: 1 });

  const financierId = financiers.data?.items?.[0].id;
  const { isLoading, data } = contracts;

  useEffect(() => {
    if (financierId) {
      loadContracts({
        financierId,
        offset: (pagination.current - 1) * pagination.pageSize,
        limit: pagination.pageSize
      });
    }
  }, [loadContracts, financierId, pagination]);

  const onTableChange = pagination => setPagination(pagination);

  const onTableRow = (record) => ({
    onClick: () => history.push(`/home/contracts/${record.id}`)
  });

  return (
    <>
      <PageHeader
        title="Contracts"
        ghost={false}
        extra={
          <Button className={addBtnCls} type="primary" onClick={() => history.push('/home/contracts/add')}>
            Add Contract
          </Button>
        }
      />
      <Content>
        <ContainerDimensions>
          {({ width, height }) => {
            const scrollHeight = height - 55 - 48 - 64; // - tableHead - 2 * padding - paginationHeight
            return (
              <Spin spinning={isLoading} tip="Loading...">
                <Table
                  className={`${tableCls} navigatable`}
                  rowKey="id"
                  onChange={onTableChange}
                  onRow={onTableRow}
                  columns={columns}
                  dataSource={data?.items}
                  pagination={pagination}
                  scroll={{ x: width, y: scrollHeight }}
                />
              </Spin>
            )
          }}
        </ContainerDimensions>
      </Content>
    </>
  );
};

export default connect(
  (state) => ({
    financiers: state.financiers.load,
    contracts: state.contracts.load
  }),
  (dispatch) => ({
    loadContracts: payload => dispatch({ type: LOAD_CONTRACTS, payload }),
  })
)(ContractsIndexScreen);

const columns = [
  {
    title: 'Ref ID',
    dataIndex: 'id',
    width: 250
  },
  // {
  //   title: 'Device ID',
  //   dataIndex: 'deviceId',
  //   width: 150
  // },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    width: 250
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    width: 100
  },
  {
    title: 'Total Amount',
    dataIndex: 'amount',
    width: 150
  },
  {
    title: 'Downpayment',
    dataIndex: 'downpaymentAmount',
    width: 150
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    width: 100
  },
  {
    title: 'Duration Unit',
    dataIndex: 'durationUnit',
    width: 150
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: 150
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 150
  }
];
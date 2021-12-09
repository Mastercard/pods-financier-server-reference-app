import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PageHeader, Layout, Table, Button, Spin } from 'antd';
import ContainerDimensions from 'react-container-dimensions';

import { LOAD_GATEWAY_CONFIGS } from 'client/behaviour/gatewayConfigs/reducer';

const { Content } = Layout;

const cls = 'gatewayConfigs';
const addBtnCls = `${cls}-add-btn`;
const tableCls = `${cls}-table`;

export const GatewayConfigsIndexScreen = ({ gatewayConfigs, financiers, loadGatewayConfigs }) => {
  const history = useHistory();

  const [pagination, setPagination] = useState({ pageSize: 50, current: 1 });

  const financierId = financiers.data?.items?.[0].id;
  const { isLoading, data } = gatewayConfigs;

  const hasGatewayConfigs = !data || !!(data.items?.[0]);

  useEffect(() => {
    if (financierId) {
      loadGatewayConfigs({
        financierId,
        offset: (pagination.current - 1) * pagination.pageSize,
        limit: pagination.pageSize
      });
    }
  }, [financierId, pagination, loadGatewayConfigs]);

  const onTableChange = pagination => setPagination(pagination);

  const onTableRow = (record) => ({
    onClick: () => history.push(`/home/gateway-configurations/${record.gatewayConfigurationId}`)
  });

  return (
    <>
      <PageHeader
        title="Gateway Configurations"
        ghost={false}
        extra={
          !hasGatewayConfigs && !isLoading && (
            <Button className={addBtnCls} type="primary" onClick={() => history.push('/home/gateway-configurations/add')}>
              Add Gateway Configuration
            </Button>
          )
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
                  rowKey="gatewayConfigurationId"
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
    gatewayConfigs: state.gatewayConfigs.load
  }),
  (dispatch) => ({
    loadGatewayConfigs: payload => dispatch({ type: LOAD_GATEWAY_CONFIGS, payload }),
  })
)(GatewayConfigsIndexScreen);

const columns = [
  {
    title: 'Ref ID',
    dataIndex: 'gatewayConfigurationId'
  },
  {
    title: 'Gateway ID',
    dataIndex: 'gatewayId'
  },
  {
    title: 'Financier ID',
    dataIndex: 'financierId',
  },
  {
    title: 'Configuration',
    dataIndex: 'configuration'
  }
];
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Layout, Table, Spin } from 'antd';
import ContainerDimensions from 'react-container-dimensions';

import { LOAD_DEVICES } from 'client/behaviour/devices/reducer';

const { Content } = Layout;

const cls = 'devices';
const tableCls = `${cls}-table`;

export const DevicesScreen = ({ financiers, devices, loadDevices }) => {
  const [pagination, setPagination] = useState({ pageSize: 50, current: 1 });

  const financierId = financiers.data?.items?.[0].id;
  const { isLoading, data } = devices;

  useEffect(() => {
    if (financierId) {
      loadDevices({
        financierId,
        offset: (pagination.current - 1) * pagination.pageSize,
        limit: pagination.pageSize
      });
    }
  }, [loadDevices, financierId, pagination]);

  const onTableChange = pagination => setPagination(pagination);

  return (
    <>
      <PageHeader title="Devices" ghost={false} />
      <Content>
        <ContainerDimensions>
          {({ width, height }) => {
            const scrollHeight = height - 55 - 48 - 64; // - tableHead - 2 * padding - paginationHeight
            return (
              <Spin spinning={isLoading} tip="Loading...">
                <Table
                  className={tableCls}
                  rowKey="deviceId"
                  onChange={onTableChange}
                  columns={columns}
                  dataSource={data?.items}
                  pagination={{ pageSize: 50 }}
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

const columns = [
  {
    title: 'Ref ID',
    dataIndex: 'deviceId',
    width: 250
  },
  {
    title: 'IMEI',
    dataIndex: 'imeiNumber',
    width: 200
  },
  // {
  //   title: 'Serial Number',
  //   dataIndex: 'serialNumber',
  //   width: 250
  // },
  {
    title: 'OEM',
    dataIndex: 'oem',
    width: 200
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 150
  }
];

export default connect(
  (state) => ({
    financiers: state.financiers.load,
    devices: state.devices.load
  }),
  (dispatch) => ({
    loadDevices: payload => dispatch({ type: LOAD_DEVICES, payload }),
  })
)(DevicesScreen);
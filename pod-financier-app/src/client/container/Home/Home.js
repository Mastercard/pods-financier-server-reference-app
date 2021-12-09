import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import { LOAD_FINANCIERS } from 'client/behaviour/financiers/reducer';
import { LOAD_GATEWAYS } from 'client/behaviour/gateways/reducer';

import Contracts from './Contracts/Contracts';
import Transactions from './Transactions/Transactions';
import Devices from './Devices/Devices';
import GatewayConfigurations from './GatewayConfigurations/GatewayConfigurations';

import Sidebar from 'client/component/Sidebar/Sidebar';

import logo from 'client/assets/images/logo.svg';

import './Home.scss';

const { Sider } = Layout;

const cls = 'home';
const mainCls = `${cls}-main`;
const logoWrapperCls = `${cls}-logo-wrapper`;

export const HomeScreen = ({
  financiers, gateways,
  loadFinanciers, loadGateways
}) => {
  useEffect(() => {
    if (!financiers.data) {
      loadFinanciers();
    }
  }, [financiers.data, loadFinanciers]);

  useEffect(() => {
    if (!gateways.data) {
      loadGateways();
    }
  }, [gateways.data, loadGateways]);

  return (
    <Layout className={cls}>
      <Sider>
        <div className={logoWrapperCls}>
          <img src={logo} alt="logo" />
        </div>
        <Sidebar />
      </Sider>
      <Layout className={mainCls}>
        <Switch>
          <Route path="/home/contracts">
            <Contracts />
          </Route>
          <Route path="/home/transactions">
            <Transactions />
          </Route>
          <Route path="/home/devices">
            <Devices />
          </Route>
          <Route path="/home/gateway-configurations">
            <GatewayConfigurations />
          </Route>
          <Redirect exact from="/home" to="/home/contracts" />
        </Switch>
      </Layout>
    </Layout>
  );
}

export default connect(
  (state) => ({
    financiers: state.financiers.load,
    gateways: state.gateways.load
  }),
  (dispatch) => ({
    loadFinanciers: () => dispatch({ type: LOAD_FINANCIERS }),
    loadGateways: () => dispatch({ type: LOAD_GATEWAYS })
  })
)(HomeScreen);
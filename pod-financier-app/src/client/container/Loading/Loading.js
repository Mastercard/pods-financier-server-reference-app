import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Spin } from 'antd';

import { LOAD_FINANCIERS } from 'client/behaviour/financiers/reducer';
import { LOAD_GATEWAYS } from 'client/behaviour/gateways/reducer';

import './Loading.scss';

const cls = 'loading';

export const LoadingScreen = ({
  financiers,
  loadFinanciers, loadGateways
}) => {
  const history = useHistory();

  useEffect(() => {
    if (financiers.data) {
      if (financiers.data.items?.length) {
        history.push('/home');
      } else {
        history.push('/register');
      }
    }  
  }, [financiers.data, history]);

  useEffect(() => {
    loadFinanciers();
    loadGateways();
  }, [loadFinanciers, loadGateways]);

  return (
    <div className={cls}>
      <Spin tip="Loading..." />
    </div>
  );
};

export default connect(
  (state) => ({
    financiers: state.financiers.load
  }),
  (dispatch) => ({
    loadFinanciers: () => dispatch({ type: LOAD_FINANCIERS }),
    loadGateways: () => dispatch({ type: LOAD_GATEWAYS })
  })
)(LoadingScreen);

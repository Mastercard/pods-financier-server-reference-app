import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { PageHeader, Layout, Form, Input, Button, Spin, Row, Col } from 'antd';

import {
  LOAD_GATEWAY_CONFIG,
  CREATE_GATEWAY_CONFIG, RESET_CREATE_GATEWAY_CONFIG,
  UPDATE_GATEWAY_CONFIG, RESET_UPDATE_GATEWAY_CONFIG,
  DELETE_GATEWAY_CONFIG
} from 'client/behaviour/gatewayConfig/reducer';

const { Content } = Layout;

const cls = 'gatewayConfigs-add';
const formCls = `${cls}-form`;
const submitBtnCls = `${cls}-submit-btn`;
const deleteBtnCls = `${cls}-delete-btn`;

export const GatewayConfigsAddScreen = ({
  financiers, gateways, gatewayConfigLoad, gatewayConfigCreate, gatewayConfigUpdate, gatewayConfigDelete, // state
  loadGatewayConfig, createGatewayConfig, updateGatewayConfig, deleteGatewayConfig, resetCreateGatewayConfig, resetUpdateGatewayConfig // action
}) => {
  const history = useHistory();
  const { id } = useParams();
  const [form] = Form.useForm();

  const gatewayId = gateways.data?.items?.[0]?.id;
  const financierId = financiers.data?.items?.[0]?.id;

  const isUpdateMode = !!id;

  const goBack = useCallback(() => history.push('/home/gateway-configurations'), [history]);

  useEffect(() => {
    if (isUpdateMode && id) {
      loadGatewayConfig({ id });
    }
  }, [isUpdateMode, id, loadGatewayConfig]);

  useEffect(() => {
    form.setFieldsValue({
      ...(gatewayConfigLoad.data || {}),
      gatewayId,
      financierId
    });
  }, [gatewayConfigLoad.data, gatewayId, financierId, form]);

  useEffect(() => {
    if (gatewayConfigCreate.data || gatewayConfigUpdate.data || gatewayConfigDelete.data) {
      goBack();
      return () => {
        resetCreateGatewayConfig();
        resetUpdateGatewayConfig();
      }
    }
  }, [
    gatewayConfigCreate.data,
    gatewayConfigUpdate.data,
    gatewayConfigDelete.data,
    goBack,
    resetCreateGatewayConfig,
    resetUpdateGatewayConfig
  ]);

  const onFinish = values => {
    if (isUpdateMode) {
      updateGatewayConfig({ ...values, id });
    } else {
      createGatewayConfig(values);
    }
  };

  return (
    <>
      <PageHeader
        title={`${isUpdateMode ? 'Edit' : 'Add'} Gateway Configuration`}
        ghost={false}
        onBack={goBack}
        extra={
          isUpdateMode && !gatewayConfigLoad.isLoading && (
            <Button className={deleteBtnCls} type="danger" onClick={() => deleteGatewayConfig({ id })}>
              Delete
            </Button>
          )
        }
      />
      <Content>
        <Row>
          <Col span={24} lg={{ span: 16, offset: 4 }}>

            <Spin
              spinning={gatewayConfigLoad.isLoading || gatewayConfigCreate.isLoading || gatewayConfigUpdate.isLoading}
              tip="Loading..."
            >

              <Form
                className={formCls}
                form={form}
                labelCol={{ span: 24, lg: { span: 8 } }}
                wrapperCol={{ span: 24, lg: { span: 16 } }}
                onFinish={onFinish}
              >

                <Form.Item label="Financier ID" name="financierId">
                  <Input disabled />
                </Form.Item>
                <Form.Item label="Gateway ID" name="gatewayId">
                  <Input disabled />
                </Form.Item>

                <Form.Item
                  label="Configuration JSON"
                  name="configuration"
                  rules={[{ required: true }]}
                  help={`Example: 
                        { 
                          "baseUrl": "https://mtf.gateway.mastercard.com", 
                          "currency": "UGX", 
                          "merchantId": "TESTPHONES", 
                          "password": "<password>", 
                          "version": "53"
                         }`}
                >
                  <Input />
                </Form.Item>
                <br />

                <Form.Item wrapperCol={{ span: 24, lg: { span: 16, offset: 8 } }}>
                  <Button className={submitBtnCls} type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>

              </Form>

            </Spin>

          </Col>
        </Row>
      </Content>
    </>
  );
};

export default connect(
  (state) => ({
    financiers: state.financiers.load,
    gateways: state.gateways.load,
    gatewayConfigLoad: state.gatewayConfig.load,
    gatewayConfigCreate: state.gatewayConfig.create,
    gatewayConfigUpdate: state.gatewayConfig.update,
    gatewayConfigDelete: state.gatewayConfig.delete,
  }),
  (dispatch) => ({
    loadGatewayConfig: payload => dispatch({ type: LOAD_GATEWAY_CONFIG, payload }),
    createGatewayConfig: payload => dispatch({ type: CREATE_GATEWAY_CONFIG, payload }),
    updateGatewayConfig: payload => dispatch({ type: UPDATE_GATEWAY_CONFIG, payload }),
    deleteGatewayConfig: payload => dispatch({ type: DELETE_GATEWAY_CONFIG, payload }),
    resetCreateGatewayConfig: () => dispatch({ type: RESET_CREATE_GATEWAY_CONFIG }),
    resetUpdateGatewayConfig: () => dispatch({ type: RESET_UPDATE_GATEWAY_CONFIG })
  })
)(GatewayConfigsAddScreen);

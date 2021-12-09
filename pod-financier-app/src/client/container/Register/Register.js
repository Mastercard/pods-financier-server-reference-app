import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Layout, Form, Input, Button, Spin, Row, Col } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { CREATE_FINANCIER } from 'client/behaviour/financier/reducer';
import { LOAD_FINANCIERS } from 'client/behaviour/financiers/reducer';

import logo from 'client/assets/images/logo.svg';
import mcHorizontal from 'client/assets/images/mc_hrz_pos.svg';

import './Register.scss';

const { Header, Content, Footer } = Layout;

const cls = 'register';
const headerCls = `${cls}-header`;
const contentCls = `${cls}-content`;
const footerCls = `${cls}-footer`;
const formCls = `${cls}-form`;
const submitBtnCls = `${cls}-submit-btn`;

export const RegisterScreen = ({ financierCreate, createFinancier, loadFinanciers }) => {
  const initialValues = {
    name: 'Partner Financier',
    extIdentifier: uuidv4(),
      iotProviderName:'Samsung',
      countryId: 'NGA',
      iotProviderConfigId:'Samsung'
  };
  const history = useHistory();
  const { data, isLoading } = financierCreate;

  useEffect(() => {
    if (data) {
      loadFinanciers(); // Force refresh financiers
      history.push('/home');
    }
  }, [data, history, loadFinanciers]);

  const onFinish = values => createFinancier(values);

  return (
    <Layout className={cls}>
      <Header className={headerCls}>
        <img src={logo} alt="logo" />
      </Header>
      <Content className={contentCls}>
        <Row>
          <Col span={24} lg={{ span: 16, offset: 4 }}>

            <Spin spinning={isLoading} tip="Loading...">

              <Form
                className={formCls}
                labelCol={{ span: 24, lg: { span: 8 } }}
                wrapperCol={{ span: 24, lg: { span: 16 } }}
                initialValues={initialValues}
                onFinish={onFinish}
              >
                <Form.Item label="Financier Name" name="name">
                  <Input />
                </Form.Item>
                <Form.Item label="Unique Reference ID" name="extIdentifier">
                  <Input />
                </Form.Item>
                <Form.Item label="IOT Provider Name" name="iotProviderName">
                    <Input />
                </Form.Item>
                <Form.Item label="Country Id" name="countryId">
                    <Input />
                </Form.Item>
        <Form.Item label="Provider config Id" name="iotProviderConfigId">
        <Input />
        </Form.Item>


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
      <Footer className={footerCls}>
        Powered by <img src={mcHorizontal} alt="Mastercard" />
      </Footer>
    </Layout>
  );
};

export default connect(
  (state) => ({
    financierCreate: state.financier.create
  }),
  (dispatch) => ({
    createFinancier: payload => dispatch({ type: CREATE_FINANCIER, payload }),
    loadFinanciers: () => dispatch({ type: LOAD_FINANCIERS }),
  })
)(RegisterScreen);

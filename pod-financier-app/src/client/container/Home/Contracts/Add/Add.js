import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { PageHeader, Layout, Form, Input, InputNumber, Select, Button, Spin, Row, Col } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import accounting from 'accounting';

import {
  LOAD_CONTRACT,
  CREATE_CONTRACT, RESET_CREATE_CONTRACT,
  UPDATE_CONTRACT, RESET_UPDATE_CONTRACT
} from 'client/behaviour/contract/reducer';
import currencies from 'client/utils/currencies';

const { Content } = Layout;

const cls = 'contracts-add';
const formCls = `${cls}-form`;
const submitBtnCls = `${cls}-submit-btn`;

export const ContractsAddScreen = ({
  financiers, contractLoad, contractCreate, contractUpdate, // state
  loadContract, createContract, updateContract, resetCreateContract, resetUpdateContract // action
}) => {
  const history = useHistory();
  const { id } = useParams();
  const [form] = Form.useForm();

  const financierId = financiers.data?.items?.[0]?.id;

  const isUpdateMode = !!id;

  const initialValues = {
    currency: 'NGN',
    device: {
      oem: 'Samsung',
      model: 'Galaxy A10s',
      iotProvider : 'Samsung',
      deviceModel : "Galaxy A10s"
    },
    downpaymentTransactionId: uuidv4()
  };

  const goBack = useCallback(() => history.push('/home/contracts'), [history]);

  useEffect(() => {
    if (isUpdateMode && id && financierId) {
      loadContract({ id, financierId });
    }
  }, [isUpdateMode, id, loadContract, financierId]);

  useEffect(() => {
    form.setFieldsValue({
      ...(contractLoad.data || {}),
      financierId
    });
  }, [contractLoad.data, financierId, form]);

  useEffect(() => {
    if (contractCreate.data || contractUpdate.data) {
      goBack();
      return () => {
        resetCreateContract();
        resetUpdateContract();
      }
    }
  }, [contractCreate.data, contractUpdate.data, goBack, resetCreateContract, resetUpdateContract]);

  const onFinish = values => {
    const { type, currency, amount, downpaymentAmount, duration, durationUnit } = values;
    const newValues = { ...values };

    const startDate = new Date();

    // Pay per each month / week for easier case
    if (type === 'INSTALMENT') {
      const instalmentSchedules = [];

      for (let i = 0; i < duration; i++) {
        const j = i + 1;
        const dueDate = new Date(+startDate);

        if (durationUnit === 'DAY') {
          dueDate.setDate(dueDate.getDate() + j);
        } else if (durationUnit === 'WEEK') {
          dueDate.setDate(dueDate.getDate() + j * 7);
        } else if (durationUnit === 'MONTH') {
          dueDate.setMonth(dueDate.getMonth() + j);
        }

        instalmentSchedules.push({
          order: j,
          amount: formatMoney((amount - downpaymentAmount) / duration, currency),
          dueDate: stripDecimalDateISOString(dueDate.toISOString())
        });
      }

      newValues.instalmentContractDetails = {
        paymentInterval: 1,
        paymentIntervalUnit: durationUnit,
        paymentAmount: formatMoney((amount - downpaymentAmount) / duration, currency),
        instalmentSchedules
      }

    }

    newValues.startDate = stripDecimalDateISOString(startDate.toISOString());
    newValues.amount = formatMoney(amount, currency);

    if (isUpdateMode) {
      updateContract({ ...newValues, id });
    } else {
      createContract(newValues);
    }
  };

  return (
    <>
      <PageHeader
        title={`${isUpdateMode ? 'Edit' : 'Add'} Contract`}
        ghost={false}
        onBack={goBack}
      />
      <Content>
        <Row>
          <Col span={24} lg={{ span: 16, offset: 4 }}>

            <Spin
              spinning={contractLoad.isLoading || contractCreate.isLoading || contractUpdate.isLoading}
              tip="Loading..."
            >

              <Form
                className={formCls}
                form={form}
                initialValues={initialValues}
                labelCol={{ span: 24, lg: { span: 8 } }}
                wrapperCol={{ span: 24, lg: { span: 16 } }}
                onFinish={onFinish}
              >

                <Form.Item label="Financier ID" name="financierId">
                  <Input disabled />
                </Form.Item>

                <h2>Device</h2>
                <Form.Item label="OEM" name={['device', 'oem']}>
                  <Input />
                </Form.Item>
                <Form.Item label="Iot Provider" name={['device', 'iotProvider']}>
                  <Input />
                </Form.Item>
                <Form.Item label="Model" name={['device', 'deviceModel']}>
                  <Input />
                </Form.Item>
                <Form.Item label="IMEI" name={['device', 'deviceIMEI']}>
                  <Input />
                </Form.Item>

                <h2>Payment</h2>
                <Form.Item label="Currency" name="currency">
                  <Input />
                </Form.Item>
                <Form.Item label="Total Amount" name="amount">
                  <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Type" name="type">
                  <Select placeholder="Type">
                    <Select.Option value="CREDIT">Credit</Select.Option>
                    <Select.Option value="INSTALMENT">Instalment</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Duration">
                  <Input.Group compact>
                    <Form.Item noStyle name="durationUnit">
                      <Select placeholder="Duration Unit">
                        <Select.Option value="DAY">Day</Select.Option>
                        <Select.Option value="WEEK">Week</Select.Option>
                        <Select.Option value="MONTH">Month</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item noStyle name="duration">
                      <InputNumber min={0} />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>

                <h2>Downpayment</h2>
                <Form.Item label="Amount" name="downpaymentAmount">
                  <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Transaction ID" name="downpaymentTransactionId">
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
    </>
  );
};

export default connect(
  (state) => ({
    financiers: state.financiers.load,
    contractLoad: state.contract.load,
    contractCreate: state.contract.create,
    contractUpdate: state.contract.update
  }),
  (dispatch) => ({
    loadContract: payload => dispatch({ type: LOAD_CONTRACT, payload }),
    createContract: payload => dispatch({ type: CREATE_CONTRACT, payload }),
    updateContract: payload => dispatch({ type: UPDATE_CONTRACT, payload }),
    resetCreateContract: () => dispatch({ type: RESET_CREATE_CONTRACT }),
    resetUpdateContract: () => dispatch({ type: RESET_UPDATE_CONTRACT })
  })
)(ContractsAddScreen);

function stripDecimalDateISOString(dateStr) {
  return `${dateStr.split('.')[0]}Z`;
}

function formatMoney(num, currency) {
  return accounting.toFixed(num, currencies[currency].decimalDigits);
}

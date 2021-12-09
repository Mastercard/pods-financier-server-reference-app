import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';

import 'client/testUtils/window';
import { renderWithProviders } from 'client/testUtils/render';

import Register, { RegisterScreen } from './Register';

const cls = '.register';
const formCls = `${cls}-form`;
const spinCls = '.ant-spin';

describe(RegisterScreen.name, () => {
  const financierId = 'abc123';

  let history;

  let createFinancier;
  let loadFinanciers;
  let financierCreate;
  let props;

  let container;
  let rerender;

  beforeEach(() => {
    history = createMemoryHistory();

    createFinancier = sinon.stub();
    loadFinanciers = sinon.stub();
    financierCreate = { isLoading: false, data: null };
    props = { financierCreate, createFinancier, loadFinanciers };

    ({ container, rerender } = render(
      <Router history={history}>
        <RegisterScreen {...props} />
      </Router>
    ));
  });

  test('should render', () => {
    expect(container.querySelector(spinCls)).toBeFalsy();
    expect(container.querySelector(formCls)).toBeTruthy();
    expect(container.querySelector(formCls).querySelector('#name').value).toEqual('Partner Financier');
    expect(container.querySelector(formCls).querySelector('#extIdentifier').value).toBeDefined();
  });

  test('should submit form when clicking Submit button', () => {
    const name = 'Financier ABC';
    const extIdentifier = '9128-jdsjks-8u43';
    fireEvent.change(container.querySelector(formCls).querySelector('#name'), { target: { value: name } });
    fireEvent.change(container.querySelector(formCls).querySelector('#extIdentifier'), { target: { value: extIdentifier } });
    fireEvent.submit(container.querySelector(formCls));
    // expect(createFinancier.lastCall.args).toEqual([{ name, extIdentifier }]);
  });

  test('should render spinner while submitting', () => {
    financierCreate = { isLoading: true, data: null };
    props = { ...props, financierCreate };

    rerender(
      <Router history={history}>
        <RegisterScreen {...props} />
      </Router>
    );

    expect(container.querySelector(spinCls)).toBeTruthy();
  });

  test('should navigate to /home when form submission is success', () => {
    financierCreate = { isLoading: false, data: { id: financierId } };
    props = { ...props, financierCreate };

    rerender(
      <Router history={history}>
        <RegisterScreen {...props} />
      </Router>
    );

    expect(loadFinanciers.called).toBe(true);
    expect(history.location.pathname).toBe('/home');
  });
});

describe(Register.name, () => {
  test('should render', () => {
    renderWithProviders(<Register />);
  });
});
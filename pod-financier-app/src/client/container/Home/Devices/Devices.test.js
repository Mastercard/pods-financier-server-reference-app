import React from 'react';
import { render } from '@testing-library/react';
import sinon from 'sinon';

import 'client/testUtils/window';
import { renderWithProviders } from 'client/testUtils/render';

import devicesTestData from './devices.testData';

import Devices, { DevicesScreen } from './Devices';

const cls = '.devices';
const tableCls = `${cls}-table`;
const headerTitleCls = '.ant-page-header-heading-title';
const emptyCls = '.ant-empty';
const spinCls = '.ant-spin';
const tableBodyCls = '.ant-table-body';
const tableRowCls = '.ant-table-row-level-0';

describe(DevicesScreen.name, () => {
  const financierId = 'abc123';

  let financiers;
  let devices;
  let loadDevices;
  let props;

  let container;
  let rerender;

  beforeEach(() => {
    financiers = { isLoading: false, data: null };
    devices = { isLoading: false, data: null };
    loadDevices = sinon.stub();
    props = { financiers, devices, loadDevices };

    ({ container, rerender } = render(<DevicesScreen {...props} />));
  });

  describe('should render', () => {
    test('empty state', () => {
      expect(container.querySelector(headerTitleCls).textContent).toEqual('Devices');
      expect(container.querySelector(tableCls).querySelector(emptyCls)).toBeTruthy();
      expect(container.querySelector(spinCls)).toBeFalsy();
      expect(loadDevices.called).toBe(false);
    });

    test('loading state', () => {
      devices = { ...devices, isLoading: true };
      props = { ...props, devices }
      rerender(<DevicesScreen {...props} />);
      expect(container.querySelector(spinCls)).toBeTruthy();
    });

    test('full state', () => {
      devices = { ...devices, data: devicesTestData };
      props = { ...props, devices }
      rerender(<DevicesScreen {...props} />);
      expect(container.querySelector(tableCls).querySelector(tableBodyCls).querySelectorAll(tableRowCls))
        .toHaveLength(devicesTestData.items.length);
    });
  });

  describe('should call loadDevices', () => {
    test('when financierId is defined', () => {
      financiers = {
        ...financiers,
        data: {
          items: [{ id: financierId }]
        }
      };
      props = { ...props, financiers }
      rerender(<DevicesScreen {...props} />);
      expect(loadDevices.lastCall.args).toEqual([{ financierId, offset: 0, limit: 50 }]);
    });
  });
});

describe(Devices.name, () => {
  test('should render', () => {
    const { container } = renderWithProviders(<Devices />);
    expect(container.querySelector(headerTitleCls).textContent).toEqual('Devices');
  });
});
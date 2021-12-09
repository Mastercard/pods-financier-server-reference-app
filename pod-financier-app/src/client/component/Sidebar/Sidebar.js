import React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { Menu } from 'antd';

const { Item } = Menu;

const cls = 'sidebar';

const ROUTES = [
  { key: '/home/contracts', title: 'Contracts' },
  { key: '/home/transactions', title: 'Transactions' },
  { key: '/home/devices', title: 'Devices' },
  { key: '/home/gateway-configurations', title: 'Gateway Configurations' }
];

export default () => {
  const location = useLocation();

  const matchedPath = ROUTES.find(({ key }) => matchPath(location.pathname, key)) || {};

  return (
    <Menu className={cls} theme="dark" selectedKeys={[matchedPath.key]}>
      {ROUTES.map(({ key, title }) =>
        <Item key={key}>
          <Link to={key}>{title}</Link>
        </Item>
      )}
    </Menu>
  );
}

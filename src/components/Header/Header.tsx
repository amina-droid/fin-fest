import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Affix, Menu, Layout } from 'antd';
import s from './Header.module.sass';
import { Profile } from '../Profile';

const { Header: AntHeader } = Layout;

type MenuItemProps = React.ComponentProps<typeof Menu['Item']>;
type MenuItemEvent = Parameters<NonNullable<MenuItemProps['onClick']>>[0]

export const scrollTo = (key: string) => {
  const section = document.getElementById(key);
    section?.scrollIntoView({ block: 'center', behavior: 'smooth' });
};

const toActiveBlock = (e: MenuItemEvent) => {
  const { key } = e;
  scrollTo(key as string);
};

type HeaderProps = {
    navigation: {
        [key: string]: string;
    }
}

const Header: FC<HeaderProps> = ({ navigation }) => {
  const history = useHistory();

  const logoHandler = () => {
    if (history.location.pathname === '/') {
      scrollTo('main');
      return;
    }
    history.push('/');
  };
  return (
    <Affix offsetTop={0}>
      <AntHeader className={s.header}>
        <div
          className={s.logo}
          onClick={logoHandler}
          onKeyUp={logoHandler}
          role="button"
          tabIndex={0}
        >Финансовый фестиваль
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']} selectable={false}>
          {Object.keys(navigation).map(key => (
            <Menu.Item
              key={key}
              active={false}
              onClick={toActiveBlock}
            >
              {navigation[key]}
            </Menu.Item>
          ))}
        </Menu>
        <Profile />
      </AntHeader>
    </Affix>
  );
};

export default Header;

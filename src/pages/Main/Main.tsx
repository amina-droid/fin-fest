import React, {useState} from "react";
import {Anchor, Layout, Menu} from 'antd';
import { Button, Tooltip, Affix } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

import s from './Main.module.sass'
import {Map} from "../../components/Map";
const { Link } = Anchor;

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const Main = () => {
    return (
        <Layout className={s.container}>
            <Affix offsetTop={0}>
                <Header className={s.header}>
                    <Title level={4} className={s.logo}>Финансовый фестиваль</Title>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>
                        <Menu.Item key="1">О проекте</Menu.Item>
                        <Menu.Item key="2">Карта</Menu.Item>
                        <Menu.Item key="3">Партнеры</Menu.Item>
                        <Menu.Item key="4">Отзывы</Menu.Item>
                    </Menu>
                    <Button className={s.login} type="primary" icon={<LoginOutlined />}>
                        Войти
                    </Button>
                </Header>
            </Affix>

            <section id='main' className={s.mainTab}>
                <Title className={s.title}>Финансовый фестиваль {"\n"} для всей семьи</Title>
                <Button className={s.mapButton} type="primary">
                    Карта
                </Button>
            </section>
            <section id='map' className={s.map}><Map /></section>

        </Layout>
    )
}

export default Main;
import React from 'react';
import { Layout } from 'antd';

import s from './Footer.module.sass';

const link = 'https://vk.com/deivoff';
function Footer() {
  return <Layout.Footer className={s.footer}>Разработано <a href={link} target="_blank" rel="noreferrer">Евгением Мазуровым</a> ©2020</Layout.Footer>;
}

export default Footer;

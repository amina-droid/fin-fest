import React from 'react';
import { Layout } from 'antd';

import s from './Footer.module.sass';

const link = 'https://vk.com/birdcherry_io';
const Footer = () => (
  <Layout.Footer className={s.footer}>Разработано <a href={link} target="_blank" rel="noreferrer">Birdcherry.io</a> ©2020</Layout.Footer>
);

export default Footer;

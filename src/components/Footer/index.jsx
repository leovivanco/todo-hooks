import React from 'react';
import style from './Footer.module.css';

const Footer = ({ date }) => (
  <div className={style.Footer}>Simple Todo build in React - {date}</div>
);

export default Footer;

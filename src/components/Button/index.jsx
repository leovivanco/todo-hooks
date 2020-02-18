import React from 'react';
import style from './Button.module.css';

const Button = props => {
  const { value, color, click } = props;
  const classes = [style.Button, style[color]].join(' ');

  return (
    <button onClick={click} className={classes}>
      {value}
    </button>
  );
};

export default Button;

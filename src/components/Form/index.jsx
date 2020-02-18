import React, { useState } from 'react';
import style from './Form.module.css';

const useInputValue = initialValues => {
  const [text, setText] = useState(initialValues);
  return {
    text,
    onChange: e => setText(e.target.value),
    resetValue: () => setText('')
  };
};
const Form = props => {
  const { onSubmit } = props;
  const { text, onChange, resetValue } = useInputValue('');

  return (
    <form
      className={style.Form}
      onSubmit={e => {
        e.preventDefault();
        resetValue();
        onSubmit(text);
      }}
    >
      <input placeholder="Type Your Todo" value={text} onChange={onChange} />
    </form>
  );
};

export default Form;

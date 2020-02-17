import React, { useState } from 'react';

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
      onSubmit={e => {
        e.preventDefault();
        resetValue();
        onSubmit(text);
      }}
    >
      <input value={text} onChange={onChange} />
    </form>
  );
};

export default Form;

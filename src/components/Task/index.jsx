import React, { Fragment } from 'react';

const Task = props => {
  const { todos, toggleComplete, deleteTodo } = props;
  return (
    <Fragment>
      {todos.map(({ text, complete, id }, index) => (
        <div key={id}>
          <label
            htmlFor=""
            style={{
              textDecoration: complete ? 'line-through' : null
            }}
          >
            {text}
          </label>
          <input placeholder="Your task" type="checkbox" onChange={() => toggleComplete(index)} />
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </Fragment>
  );
};

export default Task;

import React, { Fragment } from 'react';
import Button from '../Button/';
import style from './Task.module.css';

const Task = props => {
  const { todos, toggleComplete, deleteTodo } = props;
  return (
    <Fragment>
      {todos.map(({ text, complete, id }, index) => (
        <div className={style.Task} key={id}>
          <label
            style={{
              textDecoration: complete ? 'line-through' : null
            }}
          >
            {text}
            <input placeholder="Your task" type="checkbox" onChange={() => toggleComplete(index)} />
          </label>
          <Button color="danger" click={() => deleteTodo(index)} value="X" />
        </div>
      ))}
    </Fragment>
  );
};

export default Task;

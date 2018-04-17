import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick = {props.click}>I'm a {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input onChange = {props.changed} />
    </div>
  );
};

export default person;

import React from 'react';
import ReactDOM from 'react-dom';
import { getName } from './src/toCount';
import Hello from './src/Hello';
import add from './src/toCount';

console.log(getName());
console.log(add(23,56));

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

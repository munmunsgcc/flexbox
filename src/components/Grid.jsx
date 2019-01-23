import React from 'react';
import shortid from 'shortid';
import Item from './Item';

export default () => (
  <div className="grid">
    {['a', 'b', 'c', 'd', 'e', 'f'].map(num => (
      <Item name={num} key={shortid.generate()} />
    ))}
  </div>
);

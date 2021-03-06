import React from 'react';
import shortid from 'shortid';
import Item from './Item';

export default () => (
  <div className="flex">
    {['a', 'b', 'c', 'd', 'e'].map(num => (
      <Item name={num} key={shortid.generate()} />
    ))}
  </div>
);

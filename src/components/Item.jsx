import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const { name } = props;

  return (
    <div className="item">
      Hello world
      {name}
    </div>
  );
};

Item.defaultProps = {
  name: '',
};

Item.propTypes = {
  name: PropTypes.string,
};

export default Item;

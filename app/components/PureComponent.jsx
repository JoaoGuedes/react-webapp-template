import React, { PropTypes } from 'react';

/**
 * @desc
 * Presentational component.
 * @param {Object} props - properties
 */
const PureComponent = (props) => {
  const { children } = props;
  return (
    <div>
      { children }
    </div>
  );
};

/**
 * propTypes
 * @property {React.PropTypes.node} children elements
 */
PureComponent.propTypes = {
  children: PropTypes.node,
};

export default PureComponent;

import React, { PropTypes, Component } from 'react';

/**
 * @desc
 * Stateful component.
 */
class ClassComponent extends Component {

  componentDidMount() {}

  render() {
    const { children } = this.props;

    return (
      <div>
        { children }
      </div>
    );
  }
}

/**
 * propTypes
 * @property {React.PropTypes.node} children elements
 */
ClassComponent.propTypes = {
  children: PropTypes.node,
};

export default ClassComponent;

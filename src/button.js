import React from 'react';
import { connect } from 'react-redux';
import { increment } from './redux/actions';

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.incrementCounter}>CLICK ME</button>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(increment()),
});
export default connect(null, mapDispatchToProps)(Button);

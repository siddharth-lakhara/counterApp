import React from 'react';
import { connect } from 'react-redux';

class TextShow extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: console.log(state) || state.counter.count,
});


export default connect(mapStateToProps)(TextShow);

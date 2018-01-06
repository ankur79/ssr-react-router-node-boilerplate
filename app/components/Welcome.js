import React from 'react';
import { connect } from 'react-redux'
class Welcome extends React.Component {
    render() {
      const { isAuthenticated } = this.props;
      console.log(isAuthenticated);
      return <div> Welcome to my App </div>;
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

  export default connect(mapStateToProps)(Welcome);
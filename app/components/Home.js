import React from 'react';

class Home extends React.Component {
  
    userLogin(){
        window.location.href = '/login';
    }  
    render() {
      console.log(this.props)
      return <div> <button onClick={this.userLogin}>LOGIN</button> </div>;
    }
  }

  export default Home;
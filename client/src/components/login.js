import React from "react";

class UserAccess extends React.Component {
  constructor(props) { 
      super(props);
      this.state = {
          isLoggedIn: false,
      }
  }

  updateUserState = () => {
      this.setState((state) => {
          return {
              isLoggedIn: !state.isLoggedIn,
          };
      });
  }

  render() {
      return (

          <div>
            <button type="button" onClick={this.updateUserState}> Change user state </button>
              <div><h4>User state:</h4> { this.state.isLoggedIn.toString() }</div>
              { (this.state.isLoggedIn && <div>Welcome back</div>) || <div>Please login to continue</div> }
              </div>
      );
  }
}

export default class App extends React.Component {
  render() {
      return (
          <UserAccess />
      );
  }
}
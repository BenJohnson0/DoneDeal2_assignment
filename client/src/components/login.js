import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./login.css";

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="app">
      <h2>Please Log In</h2>
      <form onSubmit={handleSubmit}>
        <label><p>Username</p></label><br></br>
          
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        <br></br>
        <label><p>Password</p></label><br></br>
          
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        
        <div>
          <button type="submit">Submit</button>
        </div>
        <p>Don't have an account? Sign up <a ref="">here</a></p>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;

/*
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
              <div><h4>User state:</h4> { this.state.isLoggedIn.toString() }</div>
              { (this.state.isLoggedIn && <div>Welcome back</div>) || <div>Please login to continue</div> }

              <div className="form">
                <form onSubmit={this.updateUserState}>
                  <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                  </div>
                  <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                  </div>
                  <div className="button-container">
                  <input type="submit" onSubmit={this.updateUserState}></input>
                  </div>
                </form>
              </div>
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
*/

/*
function Login() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "benj",
      password: "12345"
    },
    {
      username: "carlt",
      password: "67890"
    }
  ];

  const errors = {
    uname: "Incorrect Username! Try again.",
    pass: "incorrect Password! Try again."
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="text" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>Login successful.</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
*/
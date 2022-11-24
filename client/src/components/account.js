import React, { useEffect, useState } from "react";
import "./account.css";
import PictureUploader from "./fileUploader";
import RecordList from "./recordList";


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

/*
updateUserState = (uname, pass) => {

  const [user, setUser] = useState([]);

    const fetchData = () => {
    return fetch("http://localhost:5000/record/")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

    useEffect(() => {
      fetchData();
    },[])

    if ( (user.name = uname) && (user.password = pass) ) {
      this.setState((state) => {
        return {
            isLoggedIn: !state.isLoggedIn,
        };
    });
  }
}
*/
    
  render() {
      return (

          <div class = "accountmaindiv">
              <div><p>Login state: { this.state.isLoggedIn.toString() }</p> </div>
              { (this.state.isLoggedIn &&  <div class = "accountedit">
        <div class="vertical-menu">
            <button onClick={window['displayprofilefavourites']}>Favourite Ads</button>
            <button onClick={window['displayprofilepic']}>Profile Picture</button>
            <button onClick={window['displayprofiledetails']}>Personal Details</button>
            <button onClick={window['displayprofilepass']}>Password and Security</button>
            <button onClick={window['displayprofilelogout']}>Log out</button>
        </div>

        <div id = "profilepicture">
          <h2>Your Profile Picture</h2>
          <PictureUploader /> 
        </div>

        <div id = "personaldetails">
          <h2>Your Details</h2>

          <p></p>

          <p class = "userdetailsholder">Username</p>

          <p></p>

          <p class = "userdetailsholder">Email</p>
          
        </div>

        <div id = "passwordsec">
          <h2>Your Password and security</h2>

          <RecordList />

          

        </div>

        <div id="favouritescontainer">
            <h2>Your Favourite Ads</h2>

            <p>The ads you favourite will appear here.</p>
          
        </div>
        
        <div id = "logout">
          <h2>Come back soon!</h2>
          <button class = "logoutbutton" onClick={this.updateUserState}>Log out</button>
        </div>

      </div>) 
      
      || 
      
      (<div className="form">
        <h2>Log in to continue</h2>
                <form onSubmit={this.updateUserState}>
                  <div className="input-container">
                    <label>Username </label>
                    <input type="text" 
                           name="uname" 
                           required />
                  </div>
                  <div className="input-container">
                    <label>Password </label>
                    <input type="password"
                     minlength="8" 
                     name="pass"
                     required />
                  </div>

                  <p>Don't have an account? Sign up <a href = "/create  ">here</a></p>
                  <div className="button-container">
                    <input type="submit"></input>
                  </div>
                </form>
              </div>) }
          </div>
      );
  }
}

const Account = () => {

  const [user, setUser] = useState([]);

    const fetchData = () => {
    return fetch("http://localhost:5000/record/")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

    useEffect(() => {
      fetchData();
    },[])

  return (
    <div>
      <UserAccess />
      <h4>User List</h4>
      <ul>
      {user && user.length > 0 && user.map((userObj, index) => (
          <li key={userObj.id}>{userObj.name}</li>
        ))}
      </ul>
    </div>
    );
    
  };
    
export default Account;

/*
<form action = "">
            <div class = "changepasswordcontainer">

            <input type="password" placeholder="Enter Password" name="psw" id="psw" minlength="8" required></input> <br></br>

            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" minlength="8" required></input><br></br>

            <button type="submit" class="confirmbtn">Confirm</button>
            </div>
          </form>*/
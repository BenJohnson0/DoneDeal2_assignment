import React from "react";
import "./account.css";


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

          <div class = "accountmaindiv">
              <div><h4>Is User logged in?</h4> { this.state.isLoggedIn.toString() }</div>
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
          <img alt = '' src = "ford.jpeg"></img><br></br>
          <a href = 'index.html'>Change your profile picture</a>
        </div>

        <div id = "personaldetails">
          <h2>Your Details</h2>
        </div>

        <div id = "passwordsec">
          <h2>Your Password and security</h2>

          <h3>Change your password</h3>

          <form action = "">
            <div class = "changepasswordcontainer">

            <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input> <br></br>

            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input><br></br>

            <button type="submit" class="confirmbtn">Confirm</button>
            </div>
          </form>

        </div>

        <div id="favouritescontainer">
            <h2>Your Favourite Ads</h2>
        </div>
        
        <div id = "logout">
          <h2>Log out</h2>
          <h4>Are you sure you wish to log out?</h4>
          <button class = "logoutbutton" onClick={this.updateUserState}>Yes, log me out</button>
        </div>

      </div>) 
      
      || 
      
      <div className="form">
        <h3>Log in to continue</h3>
                <form onSubmit={this.updateUserState}>
                  <div className="input-container">
                    <label>Username </label>
                    <input type="password" name="uname" required />
                  </div>
                  <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                  </div>
                  <div className="button-container">
                    <input type="submit" onSubmit={this.updateUserState}></input>
                  </div>
                </form>
              </div> }
          </div>
      );
  }
}

const Account = () => {

    return (
      <div>
        <UserAccess />
      </div>
      

      );
      
    };
    
export default Account;
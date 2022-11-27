import React from "react";
import "./account.css";
import PictureUploader from "./fileUploader";
import RecordList from "./recordList";

//UserAccess class for profile managemen
class UserAccess extends React.Component {
  constructor(props) { 
      super(props);
      this.state = {
          isLoggedIn: false,
      }
      this.onInputchange = this.onInputchange.bind(this);
      this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    this.setState((state) => {
      return {
          isLoggedIn: !state.isLoggedIn,
      };
  });
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
              <div>
                <p>Login state: { this.state.isLoggedIn.toString() }</p>
                <button onClick={this.updateUserState}>View Profile</button>
              </div>
              
              { (this.state.isLoggedIn &&  <div class = "accountedit">
              <div class="vertical-menu">
                <button class = "verticalmenubutton" onClick={window['displayprofilefavourites']}>Favourite Ads</button>
                <button class = "verticalmenubutton" onClick={window['displayprofilepic']}>Profile Picture</button>
                <button class = "verticalmenubutton" onClick={window['displayprofiledetails']}>Personal Details</button>
                <button class = "verticalmenubutton" onClick={window['displayprofilelogout']}>Log out</button>
              </div>

        <div class = "accounteditdiv" id = "profilepicture">
          <h2>Your Profile Picture</h2>
          <PictureUploader /> 
        </div>

        <div class = "accounteditdiv" id = "personaldetails">
          <RecordList />
        </div>

        <div class = "accounteditdiv" id="favouritescontainer">
            <h2>Your Favourite Ads</h2>
            <p>The ads you favourite will appear here.</p>
        </div>
        
        <div id = "logout">
          <h2>Come back soon!</h2>
          <button class = "logoutbutton" onClick={this.updateUserState}>Log out</button>
        </div>

      </div>)}
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
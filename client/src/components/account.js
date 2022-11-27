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
      this.onInputchange = this.onInputchange.bind(this);
      this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    console.log(this.state)

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

    const { items } = this.state;

      return (

          <div class = "accountmaindiv">
              <div><p>Login state: { this.state.isLoggedIn.toString() }</p> </div>
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

      </div>) 
      
      || 
      
      (<div className="form">
        <h2>Log in to continue</h2>
                <form onSubmit={this.onSubmitForm}>
                  <div className="input-container">
                    <label>Username </label>
                    <input type="text" 
                           name="name" 
                           value={this.state.name}
                           onChange={this.onInputchange}
                           required />
                  </div>
                  <div className="input-container">
                    <label>Password </label>
                    <input type="password"
                     minlength="6" 
                     name="pwd"
                     value={this.state.pwd}
                     onChange={this.onInputchange}
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

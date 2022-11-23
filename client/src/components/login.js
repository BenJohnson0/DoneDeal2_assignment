import React from "react";
import Account from "./account";
import bcrypt from 'bcryptjs';



export default class App extends React.Component {
  render() {
      return (
          <h1>lOGIN</h1>
      );
  }
}

function login() {
  let user = await model.findOneUser({ email: this.req.body.email});
  
  if (user == null) {
      return sendResponse(this.res, 400, FAILED_MSG, 'Incorrect id or password.');
  }

  let isValidPassword = await bcrypt.compare(this.req.body.password, user.password);
  if (!isValidPassword) {
      return sendResponse(this.res, 400, FAILED_MSG, 'Incorrect id or password.');
  }
}
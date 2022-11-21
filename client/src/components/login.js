import './login.css';
import React from 'react';
//import PropTypes from 'prop-types';

/*
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

export default function Login({ setToken }) {

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      name,
      password
    });
    setToken(token);
  }
  */
      
  export default function Login() {
    return (
        <div class="container">
     <h3 id="regTitle">Login</h3>
     <form /*onSubmit={handleSubmit}*/>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           //onChange={e => setName(e.target.value)}
           type="text"
           className="form-control"
           id="name"
         />
       </div>

       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input
           //onChange={e => setPassword(e.target.value)}
           type="text"
           className="form-control"
           id="password"
         />
       </div>

       <div className="form-group">
         <input
           id="loginBtn"
           type="submit"
           value="Login"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
    )
  }

  /*
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
  */

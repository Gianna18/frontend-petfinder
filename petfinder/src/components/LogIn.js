import React, { useState } from 'react';
import "./LogIn.css";


function Login() {
  // define state variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // handle changes to the input fields
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // validate the login credentials
    if (username === "Mark" && password === "Tusko97") {
      // if the credentials are valid, redirect to the dashboard
      window.location.href = "/dashboard";
    } else {
      // if the credentials are invalid, display an error message
      alert("Invalid username or password");
    }
  };

  // render the login form
  return (
   <div className="login--container"><form onSubmit={handleSubmit}>
   <form id="login--form"></form>
   <h1>Login Here</h1> 
   <div class="details-container">
   <label>
        Username:
        
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Login</button>
      <input type="checkbox" checked="checked" /> Remember me
          <button type="button"> Cancel</button>
          Forgot <a href="#"> password? </a>
          </div>
    </form>
    </div>
  );
}

export default Login;
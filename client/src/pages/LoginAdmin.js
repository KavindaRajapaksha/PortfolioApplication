import React from "react";

import "./LoginAdmin.css";

export default function LoginAdmin() {
  return (
    <div className="loginpage">
      <section className="login">
        <div className="login-container">
          <div className="loginName">
            <h3>LOGIN</h3>
          </div>
          <div className="loginDetails">
            <label for="uname">
              <b>Username</b>
            </label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Username"
              className="uname"
              required
            ></input>
            <br></br>
            <label for="pword">
              <b>Password</b>
            </label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Password"
              className="pword"
              required
            ></input>
          </div>
          <button className="login-btn">Sign In</button>
          <p>
            Do not have an account?
            <span>
              <a href="/contacts/register">Register now</a>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

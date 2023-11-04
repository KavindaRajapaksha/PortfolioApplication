import React, { useState } from "react";
import "./LoginAdmin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adminData = {
      email,
      password,
    };
    try {
      await axios.post("http://localhost:8000/adminLogin", adminData);
      alert("Admin logged in");
      navigate("/contacts/list");
    } catch (err) {
      console.log(err);
      alert("Invalid credentials");

      setEmail(""); // Clear email field
      setPassword("");
    }
  };

  return (
    <div className="loginpage">
      <section className="login">
        <div className="login-container">
          <div className="loginName">
            <h3>LOGIN</h3>
          </div>
          <div className="loginDetails">
            <form onSubmit={handleSubmit}>
              <label htmlFor="uname">
                <b>email</b>
              </label>
              <br />
              <input
                type="email"
                id="uname"
                placeholder="Enter Username"
                className="uname"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="pword">
                <b>Password</b>
              </label>
              <br />
              <input
                type="password"
                id="pword"
                placeholder="Enter Password"
                className="pword"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="login-btn">Sign In</button>
            </form>
          </div>

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

import React from "react";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adminData = {
      firstName,
      lastName,
      email,
      password,
    };
    try {
      await axios.post("http://localhost:8000/admins/add", adminData);
      alert("Admin added");
      navigate("/contacts/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registerPage">
      <section className="register">
        <div className="register-container">
          <div className="registerName">
            <h3>Register as Admin</h3>{" "}
          </div>

          <div className="registerForm">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={firstName}
                placeholder="firstName"
                className="form-control"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="lastName"
                value={lastName}
                className="form-control"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                value={email}
                placeholder="email"
                className="form-control"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                placeholder="password"
                className="form-control"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="register-btn">Register</button>
            </form>

            <p className="register-footer">
              Already registered?{" "}
              <span>
                <a href="/contacts/login">Sign In</a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

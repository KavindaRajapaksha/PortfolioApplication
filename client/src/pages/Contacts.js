import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Contacts.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fullName,
      email,
      age,
      subject,
      message,
    };
    try {
      await axios.post("http://localhost:8000/clients/add", data);
      alert("Message sent");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contacts-page">
      <section className="header">
        <NavBar />
      </section>
      <section className="contacts">
        <form onSubmit={handleSubmit}>
          <h2 className="heading">
            Contact <span>Me!</span>
          </h2>
          <div className="form-group">
            <div className="row1">
              <input
                type="text"
                name="fullName"
                placeholder="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="form-control"
                required
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="row2">
              <input
                type="number"
                name="age"
                placeholder="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <input
              type="text"
              placeholder="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="form-control"
              id="message"
              required
            />
          </div>
          <button type="submit" className="btn-message">
            Send Message
          </button>
        </form>
      </section>
      <section className="admin-only" id="ak">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>

        <button className="adminOnly" onClick={()=> navigate("/contacts/login")}>Admin only</button>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};
export default Contacts;

import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts-page">
      <section className="header">
        <NavBar />
      </section>
      <section className="contacts">
        <form>
          <h2 className="heading">
            Contact <span>Me!</span>
          </h2>
          <div className="form-group">
            <div className="row1">
              <input
                type="text"
                placeholder="fullName"
                className="form-control"
              />
              <input type="text" placeholder="email" className="form-control" />
            </div>
            <div className="row2">
              <input type="text" placeholder="age" className="form-control" />
              <input
                type="text"
                placeholder="subject"
                className="form-control"
              />
            </div>
            <input
              type="text"
              placeholder="message"
              className="form-control"
              id="message"
            />
          </div>
          <button type="submit" className="btn-message">
            Send Message
          </button>
        </form>
      </section>
      <section className="admin-only" id="ak">
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

       <button className="adminOnly">Admin only</button>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};
export default Contacts;

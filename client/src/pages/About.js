import React from "react";
import "./About.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div className="about-content">
      <section className="hedderS">
        <NavBar />
      </section>
      <section className="aboutContent">
        <div className="about-img">
          <img src={require("../assets/about.png")} alt="Kavinda about" />
        </div>
        <div className="about-text">
          <h1>
            About <span>Me</span>
          </h1>
          <h2>Fullstack Developer!</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
          <button className="btn-about">Read me</button>
        </div>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};

export default About;

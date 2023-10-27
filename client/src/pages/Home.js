import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import About from "./About";

import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <section className="hedderS">
        <NavBar />
      </section>
      <section className="home" id="home">
        <div className="content">
          <h3>Hello It's me!</h3>
          <h1>Kavinda S Rajapaksha</h1>
          <h3>
            And I'm a <span className="multiple-text">Fullstack Developer</span>
          </h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quisat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."
          </p>
          <div className="social-media">
            <a href="https://web.facebook.com/kavinda.rajapaksha.50/">
              {" "}
              <FontAwesomeIcon
                className="facebook"
                icon={faFacebook}
                size="2xl"
                style={{ color: "#0557e6", marginRight: "9px" }}
              />
            </a>
            <a href="https://www.youtube.com/channel/UC7AM2vInSWHNZL8sUFShyAA">
              <FontAwesomeIcon
                className="youtube"
                icon={faYoutube}
                size="2xl"
                style={{ color: "#c31d1d", marginRight: "9px" }}
              />
            </a>
            <a href="https://github.com/KavindaRajapaksha">
              <FontAwesomeIcon
                className="github"
                icon={faGithub}
                size="2xl"
                style={{ color: "#17191c", marginRight: "9px" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/kavinda-s-rajapaksha-548808227/">
              <FontAwesomeIcon
                className="linkedin"
                icon={faLinkedin}
                size="2xl"
                style={{ color: "#165cd4" }}
              />
            </a>
          </div>
          <button className="btn">Download CV</button>
        </div>
        <div className="home-img">
          <img src={require("../assets/home.png")} alt="Kavinda S Rajapaksha" />
        </div>
      </section>
      <section className="para1">
        {" "}
        <p>
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham."
        </p>
      </section>

      <section className="Hfooter">
        <Footer />
      </section>
    </div>
  );
};

export default Home;

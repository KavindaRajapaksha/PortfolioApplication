import React from "react";
import NavBar from "../components/NavBar";
import "./Portfolio.css";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
const Portfolio = () => {
  return (
    <div>
      <section className="header">
        <NavBar />
      </section>
      <h2 className="portfolio-heading">
        Latest <span>Projects</span>
      </h2>
      <section className="portfolio">
        <div className="portfolio-box">
          <div className="set-1">
            <div className="pbox">
              <img src={require("../assets/portfolio1.jpg")} alt="portfolio1" />
              <div className="portfolio-layer">
                <h4>web Designing</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim{" "}
                </p>
                <a href="#">
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="l"
                    style={{ color: "#fff" }}
                  />
                </a>
              </div>
            </div>

            <div className="pbox">
              <img src={require("../assets/portfolio2.jpg")} alt="portfolio1" />
              <div className="portfolio-layer">
                <h4>web Designing</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim{" "}
                </p>
                <a href="#">
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="l"
                    style={{ color: "#fff" }}
                  />
                </a>
              </div>
            </div>

            <div className="pbox">
              <img src={require("../assets/portfolio3.jpg")} alt="portfolio1" />
              <div className="portfolio-layer">
                <h4>web Designing</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim{" "}
                </p>
                <a href="#">
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="l"
                    style={{ color: "#fff" }}
                  />
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="set-2">
            <div className="pbox">
              <img src={require("../assets/portfolio4.jpg")} alt="portfolio1" />
              <div className="portfolio-layer">
                <h4>web Designing</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim{" "}
                </p>
                <a href="#">
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="l"
                    style={{ color: "#fff" }}
                  />
                </a>
              </div>
            </div>

            <div className="pbox">
              <img src={require("../assets/portfolio5.jpg")} alt="portfolio1" />
              <div className="portfolio-layer">
                <h4>web Designing</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim{" "}
                </p>
                <a href="#">
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xl"
                    style={{ color: "#fff" }}
                  />
                </a>
              </div>
            </div>

            <div className="pbox">
              <img src={require("../assets/portfolio6.jpg")} alt="portfolio1" />
              <div className="portfolio-layer">
                <h4>web Designing</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim{" "}
                </p>
                <a href="#">
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xl"
                    style={{ color: "#fff" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Portfolio;

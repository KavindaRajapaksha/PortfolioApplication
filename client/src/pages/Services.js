import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Services.css";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPaintbrush } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <div>
      <section className="header">
        <NavBar />
      </section>
      <section className="ServicesContainer">
        <div className="services-container">
          <h2 className="services-heading">
            Our <span>Services</span>
          </h2>
          <div className="services-box">
            <div className="box1">
              <h3>Web Development</h3>
              <FontAwesomeIcon
                icon={faCode}
                size="2xl"
                style={{ color: "#4e7dd0" }}
              />
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </p>
              <a href="#" className="btn-wd">
                Read More
              </a>
            </div>

            <div className="box2">
              <h3>Graphic Design</h3>
              <FontAwesomeIcon
                icon={faPaintbrush}
                size="2xl"
                style={{ color: "#4277d1" }}
              />
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </p>
              <a href="#" className="btn-gd">
                Read More
              </a>
            </div>

            <div className="box3">
              <h3>Digital Marketing</h3>
              <FontAwesomeIcon
                icon={faChartSimple}
                size="2xl"
                style={{ color: "#3e5989" }}
              />
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </p>
              <a href="#" className="btn-dm">
                Read More
              </a>
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

export default Services;

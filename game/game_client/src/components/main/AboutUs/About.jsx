import React from "react";
import team from "../../../assets/images/development-team.png";

function About() {
  return (
    <>
      <div className="aboutus_container">
        <h1 className="title">About Us</h1>
        <div className="aboutus_content">
          <div className="aboutUs_img">
            <img src={team} alt="Development Team Animated" />
          </div>
          <div className="text_container">
            <h2 className="card_title">
              <a>Software Engineer Students</a>
            </h2>
            <p className="card_text">
              We are software development students dedicated to providing end to
              end solutions for you.
              <br></br>
              This time we brought a card game in the form of a website, where
              everyone can play it. Spot it is a fun and clever game for the
              entire family, that you can play anytime, anytime!
            </p>
            <h3>Development Team</h3>
            <div className="devNames">
              <p>Carlos Cartín Cascante</p>
              <p>Hellen Fuentes Artavia</p>
              <p>Brayan Sandí Barrantes</p>
              <p>Sung Jae Moon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

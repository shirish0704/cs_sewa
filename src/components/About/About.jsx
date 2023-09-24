import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="heading">
        <h1 className="head">About Us</h1>
        <div className="line">
          <div className="left-line"></div>
          <div className="middle-line"></div>
          <div className="right-line"></div>
        </div>
      </div>

      <div className="about-desc">
        <div className="about-left">
          Welcome to CS Sewa !! We provide creative solutions in the fields of
          food technology. Our team of experts has years of experience in
          providing high-quality solutions to clients across a range of
          industries.
        </div>
        <div className="about-right">
          At CS Sewa, we believe that every client deserves personalized
          attention and customized solutions. That's why we take the time to
          understand your unique needs and work with you to develop solutions
          that meet your specific requirements.
        </div>
      </div>

      <div className="about-team">
        <div className="team-left">
          <h3>Our Team</h3>
          <p>
            Our team of experts has years of experience in their respective
            fields, and we take pride in our ability to work collaboratively to
            provide the best possible solutions for our clients. We are
            passionate about what we do, and we are committed to staying
            up-to-date with the latest industry trends and best practices.
          </p>
          <h3>Our Approach</h3>
          <p>
            At CS Sewa, we believe in taking a personalized approach to each
            project we undertake. We take the time to understand our clients'
            unique needs and work collaboratively with them to develop
            customized solutions that meet their specific requirements. We are
            committed to delivering high-quality work that exceeds our clients'
            expectations.
          </p>
        </div>
        <div className="team-right">
          <img src="/src/assets/why-us.png" alt="" className="team-image" />
        </div>
      </div>

      <div className="choose">
        <div className="choose-img">
          <img src="/src/assets/skills.png" alt="" />
        </div>
        <div className="choose-text">
          <h3>Why Choose CS Sewa?</h3>
          <p>
            We are committed to delivering work of the highest quality, and we
            take pride in exceeding our clients' expectations on every project
            we undertake.
          </p>
          <p>• Customized solutions tailored to your unique needs</p>
          <p>• Expertise in a range of industries and fields</p>
          <p>• Experienced team of professionals</p>
          <p>• Commitment to quality and customer satisfaction</p>
          <p>• Competitive pricing</p>
        </div>
      </div>
    </>
  );
};

export default About;

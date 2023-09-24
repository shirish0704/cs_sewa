import React from "react";
import "./Services.css";
import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
import BasketballLineIcon from "remixicon-react/BasketballLineIcon";
import StackLineIcon from "remixicon-react/StackLineIcon";
import Dashboard3LineIcon from "remixicon-react/Dashboard3LineIcon";

const Services = () => {
  return (
    <>
      <div className="section">
        <div className="heading">
          <h1 className="head">Services</h1>
          <div className="line">
            <div className="left-line"></div>
            <div className="middle-line"></div>
            <div className="right-line"></div>
          </div>
        </div>

        <p className="section-why-us">
          CS Sewa offers a range of creative solutions in the fields of food
          technology. Our services include product design and development, food
          safety and quality assurance, and more.
        </p>

        <div className="services-points">
          <div className="points">
            <BasketballLineIcon size={40} color="#31a9e1" />
            <h3>Innovative Product Development</h3>
            <p className="para">
              Leveraging technology to create novel food products through
              ingredient optimization, flavor profiling, and nutritional
              analysis. Utilizing software tools to simulate taste and texture
              variations for consumer preference.
            </p>
          </div>
          <div className="points">
            <FileTextLineIcon size={40} color="#31a9e1" />
            <h3>Advanced Safety and Quality Assurance</h3>
            <p className="para">
              Employing cutting-edge sensors and monitoring systems to ensure
              real-time quality control and adherence to safety standards.
              Implementing blockchain technology for transparent supply chain
              tracking.
            </p>
          </div>
          <div className="points">
            <StackLineIcon size={40} color="#31a9e1" />
            <h3>Sustainable Practices with Automation</h3>
            <p className="para">
              Integrating automation and AI-driven algorithms to optimize
              production processes, minimize waste, and reduce energy
              consumption, promoting sustainable and efficient food production.
            </p>
          </div>
          <div className="points">
            <Dashboard3LineIcon size={40} color="#31a9e1" />
            <h3>Digital Nutrition Analysis and Compliance</h3>
            <p className="para">
              Utilizing software applications for rapid nutrition analysis and
              accurate labeling. Incorporating IoT devices for real-time data
              collection to ensure compliance with food safety regulations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

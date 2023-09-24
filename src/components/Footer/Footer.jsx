import React from "react";
import "./Footer.css";
import FacebookFillIcon from "remixicon-react/FacebookFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import SkypeFillIcon from "remixicon-react/SkypeFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="top-comp">
            <h1 className="text-2xl pb-3 font-bold text-darkblue max-[450px]:text-xl ">
              CS SEWA
            </h1>
            <h5 className="text-xs p-1 text-gray-500">
              Koteshwor, Kathmandu, Nepal
            </h5>
            <h5 className="text-xs p-1 text-gray-500">
              <span className="font-bold text-gray-600">Phone:</span>
              +977-9745335854
            </h5>
            <h5 className="text-xs p-1 text-gray-500">
              <span className="font-bold text-gray-600">Email:</span>
              cssewanepal@gmail.com
            </h5>
          </div>
          <div className="top-comp">
            <h1 className="text-darkblue font-bold max-[450px]:text-md ">
              Useful Links
            </h1>
            <h5 className="text-gray-500 max-[450px]:text-xs text-sm p-2">
              <span className="text-skyblue text-sm">▶ </span> Home
            </h5>
            <h5 className="text-gray-500 max-[450px]:text-xs text-sm p-2">
              <span className="text-skyblue text-sm">▶ </span> About Us
            </h5>
            <h5 className="text-gray-500 max-[450px]:text-xs text-sm p-2">
              <span className="text-skyblue text-sm">▶ </span> Services
            </h5>
            <h5 className="text-gray-500 max-[450px]:text-xs text-sm p-2">
              <span className="text-skyblue text-sm">▶ </span> Terms of service
            </h5>
            <h5 className="text-gray-500 max-[450px]:text-xs text-sm p-2">
              <span className="text-skyblue text-sm">▶ </span> Privacy policy
            </h5>
          </div>
          <div className="top-comp">
            <h1 className="text-darkblue font-bold max-[450px]:text-md">
              Our Services
            </h1>
            <h5 className="text-gray-500 max-[450px]:text-xs text-sm p-2">
              <span className="text-skyblue text-sm">▶ </span>
              Innovative Product Development
            </h5>
            <h5 className="text-gray-500 max-[450px]:text-xs text-sm p-2">
              <span className="text-skyblue text-sm">▶ </span> Advanced Safety
              and Quality Assurance
            </h5>
            <h5 className="text-gray-500 max-[450px]:text-xs text-sm p-2">
              <span className="text-skyblue text-sm">▶ </span> Sustainable
              Practices with Automation
            </h5>
            <h5 className="text-gray-500 max-[450px]:text-xs text-sm p-2">
              <span className="text-skyblue text-sm">▶ </span>
              Digital Nutrition Analysis and Compliancen
            </h5>
          </div>
          <div className="top-comp w-72">
            <h1 className="text-darkblue font-bold max-[450px]:text-md">
              Our Social Networks
            </h1>
            <p className="text-sm pt-5 text-gray-600 max-[450px]:text-xs">
              CS Sewa has experience leveraging a variety of social media
              networks to help clients reach and engage with their target
              audience.
            </p>
            <div className="icons">
              <div className="footer-icon bg-sky-100 rounded-full p-2">
                <TwitterFillIcon size={20} />
              </div>
              <div className="footer-icon bg-sky-100 rounded-full p-2">
                <FacebookFillIcon size={20} />
              </div>
              <div className="footer-icon bg-sky-100 rounded-full p-2">
                <InstagramLineIcon size={20} />
              </div>
              <div className="footer-icon bg-sky-100 rounded-full p-2">
                <SkypeFillIcon size={20} />
              </div>
              <div className="footer-icon bg-sky-100 rounded-full p-2">
                <LinkedinFillIcon size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-down">
          <div className="footer-down-left">
            <p>
              &copy; Copyright <span className="font-bold">CS Sewa.</span> All
              Rights Reserved
            </p>
          </div>
          <div className="footer-down-right">
            <p>
              Designed by <a href="/">CS Sewa</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

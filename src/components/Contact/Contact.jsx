import React, { useState } from "react";
import "./Contact.css";
import MapPinLineIcon from "remixicon-react/MapPinLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";
import SmartphoneLineIcon from "remixicon-react/SmartphoneLineIcon";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
    setSubject("");
    setName("");
    setEmail("");
  };
  return (
    <>
      <div className="heading">
        <h1 className="head">Contact</h1>
        <div className="line">
          <div className="left-line"></div>
          <div className="middle-line"></div>
          <div className="right-line"></div>
        </div>
      </div>
      <div className="contact">
        <h3 className="contact-desc">
          Ready to learn more about how CS Sewa can help you achieve your goals?
          Contact us today to schedule a consultation with one of our experts.
        </h3>
        <div className="box">
          <div className="box-left">
            <div className="details">
              <div className="details-icon bg-blue-100 rounded-full   p-3">
                <MapPinLineIcon size={25} />
              </div>
              <div className="details-text">
                <h2 className="text-xl px-4 text-darkblue font-extrabold ">
                  Location:
                </h2>
                <h5 className="px-4 text-sm text-gray-600  ">Koteshwor, Ktm</h5>
              </div>
            </div>
            <div className="details">
              <div className="details-icon bg-blue-100 rounded-full p-3">
                <MailLineIcon size={25} />
              </div>
              <div className="details-text">
                <h2 className="text-xl px-4 text-darkblue font-extrabold  ">
                  Email:
                </h2>
                <h5 className="px-4 text-sm text-gray-600  ">
                  cssewanepal @gmail.com
                </h5>
              </div>
            </div>
            <div className="details">
              <div className="details-icon bg-blue-100 rounded-full p-3">
                <SmartphoneLineIcon size={25} />
              </div>
              <div className="details-text">
                <h2 className="text-xl px-4 text-darkblue font-extrabold ">
                  Call:
                </h2>
                <h5 className="px-4 text-sm text-gray-600  ">
                  +977 - 9745335854
                </h5>
              </div>
            </div>
            <img
              src="/src/assets/map.png"
              alt=""
              className="p-8 mb-7 max-[1345px]:p-6 max-[1345px]:mb-1"
            />
          </div>
          <div className="box-right px-8 py-8">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="input">
                  <label> Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                  />
                </div>
                <div className="input">
                  <label> Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div className="subject flex flex-col mt-5">
                <label>Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
              </div>
              <div className="textarea flex flex-col mt-5">
                <label> Message</label>
                <textarea
                  name="text"
                  cols="30"
                  rows="10"
                  id="message"
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div className="submit flex items-center justify-center w-100%">
                <button
                  type="submit"
                  className="mt-6 form-btn"
                  disabled={!name || !email || !subject || !message}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

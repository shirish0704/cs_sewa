import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Button, Navbar } from "flowbite-react";

const NavbarWithSlider = () => {
  return (
    <>
      <Navbar className="bg-darkblue">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white logo">
            CS Sewa
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className=" border-light border-2 mr-3 rounded-3xl font-bold hover:bg-light transition-all ease-in duration-200">
            Get started
          </Button>
          <Navbar.Toggle className="text-light" />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-light" : "text-white"} hover:text-light`
              }
            >
              Home
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-light" : "text-white"} hover:text-light`
              }
            >
              About
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${isActive ? "text-light" : "text-white"} hover:text-light`
              }
            >
              Services
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-light" : "text-white"} hover:text-light`
              }
            >
              Contact
            </NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarWithSlider;

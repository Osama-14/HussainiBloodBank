import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/images/Husaini.png"
import { Home, ThreeDRotation } from '@material-ui/icons';


const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <div>
                  {" "}
                  <NavLink className="navbar-brand" to="/">
                    <img src={logo} />
                  </NavLink>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName='nav-link'
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                       <Home />
                       <span>Home</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='nav-link' className="nav-link" to="/service">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='nav-link' className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>{" "}
                    <li className="nav-item">
                      <NavLink activeClassName='nav-link' className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

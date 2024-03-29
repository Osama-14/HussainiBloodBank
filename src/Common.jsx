import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/bld.png";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="wrier col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <div>
                    <div>
                      <h1>
                        {props.name}
                        <strong className="brandName">Hussaini Blood</strong>
                      </h1>
                      <h2 className="my-3">
                        Lorem ipsum dolor sit amet, consectet
                      </h2>
                    </div>
                    {/* <NavLink to={props.visit} className="btn btn-outline-primary">
                  {props.btname}
                    
                   */}

                    <div class="middle">
                      <NavLink to={props.visit} className="btn btn1">
                      {props.btname}
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="common img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;

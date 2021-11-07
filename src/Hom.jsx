import React from "react";
import web from "../src/images/bld.png";

const Hom = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">

              <div className="wrier col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                  Grow business with <strong>Muhammad Osama</strong>
                </h1>
                <h2 className="my-3">Lorem ipsum dolor sit amet, consectet</h2>
                <div className="mt-3">
                  <button type="button" class="btn btn-outline-primary">
                    Donate Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={web} className="img-fluid animated" alt="home img" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hom;

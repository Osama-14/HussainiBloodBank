import React from "react";
import Cards from "./Cards";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 max-auto">
            <div className="row gy-4">
              <div className="col-md-4 col-10 mx-auto">
                  <Cards/>

            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;

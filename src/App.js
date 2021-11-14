import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Animate from "./Animate";

import Hom from "./Hom";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer"
import { BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
  
    <BrowserRouter>
        <Navbar />
        <Animate />
        <Routes>
          <Route  path="/" element={<Hom/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={ <Service />} />
          <Route path="/contact" element={<Contact/>} />


        </Routes>
        <Footer/>
    </BrowserRouter>




  );
};
export default App;

import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/bld.png";
import Common from './Common'

const About = () => {
  return (
    <>
    <Common name='welcome to About page' imgsrc={web} visit='./contact' btname="Contact Now" />
    </>
  );
};
export default About;

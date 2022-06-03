import React from "react";
// import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest
} from "react-icons/fa";
import './Footer.css'
let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
let iconStyles = { color: "white", fontSize: "1.5em" };

const Footer = () => {
 
  return (
    
    <div className="App grid grid-cols-2 sm:grid-cols-4 gap-2 w-3/4 mx-auto">
      <h4>Connect with us on our social networks:</h4>
      <span style={{ background: "#3B5998" }} className={circleClasses}>
        <FaFacebookF style={iconStyles} />
      </span>
      <span style={{ background: "#1DA1F2" }} className={circleClasses}>
        <FaTwitter style={iconStyles} />
      </span>
      <span style={{ background: "black" }} className={circleClasses}>
        <FaInstagram style={iconStyles} />
      </span>
      <span style={{ background: "#BD081C" }} className={circleClasses}>
        <FaPinterest style={iconStyles} />
      </span>
    </div>
 
   
 
  );
  }

  

export default Footer;


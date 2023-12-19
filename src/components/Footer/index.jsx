import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="footer">
      <FacebookIcon className="icon" />
      <InstagramIcon className="icon" />
      <TwitterIcon className="icon" />
      <div className="contact">
        <PhoneIcon className="icon" />{" "}
        <span style={{ marginRight: 15 }}>+995592057933</span>
        <EmailIcon className="icon" /> <span>online-shop@gmail.com</span>
      </div>
      <div className="copyright">
        Copyright © {new Date().getFullYear()} Online Shop
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="info-footer">Developed by: Sneyder Silva.</p>
      <div className="social">
        <a target="_blank" href="https://github.com/sneyderst94">
          <i className="bx bxl-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sneyder-silva-torres-724b77202/"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

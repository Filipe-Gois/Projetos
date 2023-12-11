import React from "react";
import Logo from "../../Assets/images/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-flex">
      <img src={Logo} alt="" />
      <p>
        Todos os direitos reservados -<span> 2020</span>
      </p>
    </footer>
  );
};

export default Footer;

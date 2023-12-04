import React from "react";
import "./Footer.css";
import Facebook from "../../assets/Icons/facebook.svg";
import Instagram from "../../assets/Icons/instagram.svg";
import Snapchat from "../../assets/Icons/snapchat.svg";
import Pinterest from "../../assets/Icons/pinterest.svg";
import Twitter from "../../assets/Icons/twitter.svg";
import Linkedin from "../../assets/Icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer-flex">
      <p className="footer-flex footer-flex__find">Find Us On</p>

      <div className="redes-sociais">
        <a href="https://www.facebook.com" target="blank" className="redes-sociais__item">
          <img src={Facebook} alt=""  />
        </a>

        <a href="https://www.instagram.com" target="blank" className="redes-sociais__item">
          <img src={Instagram} alt=""  />
        </a>

        <a href="https://www.snapchat.com" target="blank" className="redes-sociais__item">
          <img src={Snapchat} alt=""  />
        </a>
        <a href="https://br.pinterest.com" target="blank" className="redes-sociais__item">
          <img src={Pinterest} alt=""  />
        </a>

        <a href="twitter.com" target="blank" className="redes-sociais__item">
          <img src={Twitter} alt=""  />
        </a>

        <a href="https://www.linkedin.com/in/filipe-góis-841b58206/" target="blank" className="redes-sociais__item">
          <img src={Linkedin} alt=""  />
        </a>
      </div>

      <p className="footer-flex footer-flex__powered">&copy;Powered by w3css</p>
    </footer>
  );
};

export default Footer;

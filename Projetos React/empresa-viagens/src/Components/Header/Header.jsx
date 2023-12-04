import React from "react";
import "./Header.css";
import Image from "../../Components/Image/Image";
import Lupa from "../../assets/Icons/search.svg";
import Location from "../../assets/Icons/location.svg";
import Container from "../../Components/Container/Container";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-flex">
      <div className="header-content">
        <div className="header-box">
          <Link to="/" className="header-box__link-home">
            <img className="header-flex__logo" src={Location} />
            <h1 className="header-box__text">Logo</h1>
          </Link>
        </div>
        <div className="header-flex__search-Icon">
          <img src={Lupa} />
        </div>
      </div>
      {/* {window.innerWidth < 768 ? <Nav /> : console.log()} */}
    </header>
  );
};

export default Header;

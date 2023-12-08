import React from "react";
import "./Header.css";
import Image from "../../Components/Image/Image";
import Lupa from "../../assets/Icons/search.svg";
import Location from "../../assets/Icons/location.svg";
import Container from "../../Components/Container/Container";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header-flex">
        <div className="header-content">
          <Link to="/" className="header-box__link-home">
            <img className="header-flex__logo" src={Location} />
            <h1 className="header-box__text">Logo</h1>
          </Link>

          <div className="header-flex__search-Icon">
            <img src={Lupa} />
          </div>
        </div>

    </header>
  );
};

export default Header;

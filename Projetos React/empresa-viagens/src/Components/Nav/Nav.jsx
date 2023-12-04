import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Flight from "../../assets/Icons/flight.svg";
import Hotel from "../../assets/Icons/hotel.svg";
import Rental from "../../assets/Icons/rental.svg";

const Nav = () => {
  return (
    <nav className="navbar__itens-box">
      <Link to={"/flight"} className="navbar__item navbar__item--flight">
        <img src={Flight} />
        Flight
      </Link>

      <Link to={"/hotel"} className="navbar__item navbar__item--hotel">
        <img src={Hotel} alt="" />
        Hotel
      </Link>

      <Link to={"/rental"} className="navbar__item">
        <img src={Rental} alt="" />
        Rental
      </Link>
    </nav>
  );
};

export default Nav;

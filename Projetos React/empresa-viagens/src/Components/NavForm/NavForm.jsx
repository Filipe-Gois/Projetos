import React from "react";
import "./NavForm.css";
import Flight from "../../assets/Icons/flight.svg";
import Hotel from "../../assets/Icons/hotel.svg";
import Rental from "../../assets/Icons/rental.svg";
import { Button } from "../FormComponents/FormComponents";

//navbar__item--select fazer a segunte lógica: ao clicar em um botao, o mesmo deve ficar selecionado (vermelho, "navbar__item--select") e exibir outro formulário

const Nav = ({ additionalClass = "" }) => {
  return (
    <div className={`navbar__itens-box ${additionalClass}`}>
      <Button
        additionalClass="navbar__item navbar__item--select"
        textButton={"Flight"}
        image={true}
        imageRender={Flight}
      />

      <Button
        additionalClass="navbar__item navbar__item--hotel"
        textButton={"Hotel"}
        image={true}
        imageRender={Hotel}
      />

      <Button
        additionalClass="navbar__item"
        textButton={"Rental"}
        image={true}
        imageRender={Rental}
      />
    </div>
  );
};

export default Nav;

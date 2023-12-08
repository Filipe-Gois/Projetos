import React from "react";
import "./NavForm.css";
import Flight from "../../assets/Icons/flight.svg";
import Hotel from "../../assets/Icons/hotel.svg";
import Rental from "../../assets/Icons/rental.svg";
import { Button } from "../FormComponents/FormComponents";
import { click } from "@testing-library/user-event/dist/click";

//navbar__item--select fazer a segunte lógica: ao clicar em um botao, o mesmo deve ficar selecionado (vermelho, "navbar__item--select") e exibir outro formulário

const Nav = ({
  additionalClass = "",
  manipulationFunction1,
  manipulationFunction2,
  manipulationFunction3,
  selectClass = "navbar__item--select",
  clicked1 = false,
  clicked2 = false,
  clicked3 = false
}) => {

  return (
    <div className={`navbar__itens-box ${additionalClass}`}>
      <Button
        additionalClass={`navbar__item ${
          clicked1 ? selectClass : ""
        }`}

        textButton={"Flight"}
        image={true}
        imageRender={Flight}
        manipulationFunction={manipulationFunction1}

      />

      <Button
        additionalClass={`navbar__item ${
          clicked2 ? selectClass : ""
        }`}

        textButton={"Hotel"}
        image={true}
        imageRender={Hotel}
        manipulationFunction={manipulationFunction2}

      />

      <Button
        additionalClass={`navbar__item ${
          clicked3 ? selectClass : ""
        }`}
        textButton={"Rental"}
        image={true}
        imageRender={Rental}
        manipulationFunction={manipulationFunction3}

      />
    </div>
  );
};

export default Nav;

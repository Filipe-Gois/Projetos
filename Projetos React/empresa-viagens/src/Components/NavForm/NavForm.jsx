import React, { useState } from "react";
import "./NavForm.css";
import Flight from "../../assets/Icons/flight.svg";
import Hotel from "../../assets/Icons/hotel.svg";
import Rental from "../../assets/Icons/rental.svg";
import { Button } from "../FormComponents/FormComponents";
import { click } from "@testing-library/user-event/dist/click";

//navbar__item--select fazer a segunte lógica: ao clicar em um botao, o mesmo deve ficar selecionado (vermelho, "navbar__item--select") e exibir outro formulário

const Nav = ({
  additionalClass = "",
  selectClass = "navbar__item--select",
  setEditForm,
}) => {
  const [statusFilter, setStatusFilter] = useState("Flight");
  return (
    <div className={`navbar__itens-box ${additionalClass}`}>
      <Button
        additionalClass={`navbar__item ${
          statusFilter === "Flight" ? selectClass : ""
        }`}
        textButton={"Flight"}
        image={true}
        imageRender={Flight}
        manipulationFunction={() => {
          setStatusFilter("Flight");
          setEditForm("Flight");
        }}
      />

      <Button
        additionalClass={`navbar__item ${
          statusFilter === "Hotel" ? selectClass : ""
        }`}
        textButton={"Hotel"}
        image={true}
        imageRender={Hotel}
        manipulationFunction={() => {
          setStatusFilter("Hotel");
          setEditForm("Hotel");
        }}
      />

      <Button
        additionalClass={`navbar__item ${
          statusFilter === "Rental" ? selectClass : ""
        }`}
        textButton={"Rental"}
        image={true}
        imageRender={Rental}
        manipulationFunction={() => {
          setStatusFilter("Rental");

          setEditForm("Rental");
        }}
      />
    </div>
  );
};

export default Nav;

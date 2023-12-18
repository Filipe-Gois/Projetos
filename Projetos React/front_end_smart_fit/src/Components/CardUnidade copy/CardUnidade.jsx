import React from "react";
import "./CardUnidade.css";

import MascaraObrigatoria from "../../Assets/images/required-mask.png";
import MascaraRecomendada from "../../Assets/images/recommended-mask.png";
import ToalhaObrigatoria from "../../Assets/images/required-towel.png";
import ToalhaRecomendada from "../../Assets/images/recommended-towel.png";
import BebedouroParcial from "../../Assets/images/partial-fountain.png";
import BebedouroProibido from "../../Assets/images/forbidden-fountain.png";
import VestiarioLiberado from "../../Assets/images/required-lockerroom.png";
import VestiarioParcial from "../../Assets/images/partial-lockerroom.png";
import VestiarioFechado from "../../Assets/images/forbidden-lockerroom.png";

const CardUnidade2 = ({
  idUnidade,
  title,
  content, //ou street
  opened = true,
  mask,
  towel,
  fountain,
  locker_room,
  schedules = ["sdsd", "sdsd", "sdsd"],
}) => {
  return (
    <article className="banner" key={idUnidade}>
      <div className="banner-info">
        <p
          className={`status-unidade ${
            opened ? "status-unidade--aberto" : "status-unidade--fechado"
          }`}
        >
          {opened ? "Aberto" : "Fechado"}
        </p>
        <h2>Vila Carrão</h2>
        <p>Av. Guilherme Giorgi, 1460, Vila Carrão, São Paulo - SP</p>
      </div>

      {opened ? (
        <>
          {/* colocar uma divisoria aqui (usar um HR, ou border top na div "banner__imgs") */}
          <div className="banner__imgs">
            <img
              src={
                mask === "required" ? MascaraObrigatoria : MascaraRecomendada
              }
              alt=""
            />

            <img
              src={towel === "required" ? ToalhaObrigatoria : ToalhaRecomendada}
              alt=""
            />

            <img
              src={
                fountain === "partial" ? BebedouroParcial : BebedouroProibido
              }
              alt=""
            />

            <img
              src={
                locker_room === "allowed"
                  ? VestiarioLiberado
                  : locker_room === "partial"
                  ? VestiarioParcial
                  : VestiarioFechado
              }
              alt=""
            />
          </div>

          <div className="banner__funcionamento">
            {/* <div className="funcionamento__content banner__funcionamento--true"> */}
            {/* <div className=""> */}
            {/* caso n conseguir dar um flex-wrap no css, usar a div comentada para separar os periodos */}

            {schedules.map(() => {
              return (
                <div className="banner__funcionamento--horario">
                  <h3>Seg. à Sex.</h3>
                  <p>06:00 às 22:00</p>
                </div>
              );
            })}

            {/* </div> */}
          </div>
        </>
      ) : null}
    </article>
  );
};

export default CardUnidade2;

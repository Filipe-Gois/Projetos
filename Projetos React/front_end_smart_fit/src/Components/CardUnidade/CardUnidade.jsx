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

const CardUnidade = ({
  idUnidade,
  title,
  content,
  opened = false,
  mask,
  towel,
  fountain,
  locker_room,
  schedules = [],
}) => {
  return (
    <article className="banner" key={idUnidade}>
      <div className="banner-info">
        <p className={opened ? "banner-info--aberto" : "banner-info--fechado"}>
          {opened ? "Aberto" : "Fechado"}
        </p>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>

      {/* colocar uma divisoria aqui (usar um HR, ou border top na div "banner__imgs") */}
      <div className="banner__imgs">
        <img
          src={mask === "required" ? MascaraObrigatoria : MascaraRecomendada}
          alt=""
        />

        <img
          src={towel === "required" ? ToalhaObrigatoria : ToalhaRecomendada}
          alt=""
        />

        <img
          src={fountain === "partial" ? BebedouroParcial : BebedouroProibido}
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
        <div className="funcionamento__content banner__funcionamento--true">
          {/* <div className=""> */}
          {/* caso n conseguir dar um flex-wrap no css, usar a div comentada para separar os periodos */}

          <div className="segASex">
            <h3>{schedules[0].weekdays}</h3>
            <p>{schedules[0].hour}</p>
          </div>

          <div className="sab">
            <h3>{schedules[1].weekdays}</h3>
            <p>{schedules[1].hour}</p>
          </div>

          {/* </div> */}

          <div className="dom">
            <h3>{schedules[2].weekdays}</h3>
            <p>{schedules[2].hour}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardUnidade;

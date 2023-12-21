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
  schedules = [{}],
  addtionalClass,
}) => {
  return (
    <article
      className={`banner ${!opened || typeof(schedules) === Object ? "banner--altura-modificada" : ""}`}
      key={idUnidade}
    >
      {console.log(typeof(schedules))}
      <div className="banner-info">
        <p
          className={`status-unidade ${
            opened ? "status-unidade--aberto" : "status-unidade--fechado"
          }`}
        >
          {opened ? "Aberto" : "Fechado"}
        </p>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>

      {opened ? (
        <>
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

          <div
            className={`banner__funcionamento ${
              schedules.length > 3 ? "banner__funcionamento--4oumaisinfos" : ""
            }`}
          >
            {schedules.map((horario) => {
              return (
                <div
                  className={`banner__funcionamento--horario`}
                  key={Math.random()}
                >
                  <h3>{horario.weekdays}</h3>
                  <p>{horario.hour}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </article>
  );
};

export default CardUnidade2;

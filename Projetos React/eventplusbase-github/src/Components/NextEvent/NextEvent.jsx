import React from "react";
import { dateFormatDbToView } from "../../Utils/stringFunction";
import "./NextEvent.css";
import { Tooltip } from "react-tooltip";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const NextEvent = ({ title, description, eventDate, idEvento }) => {
  function conectar(idEvento) {
    alert(`Conectando ao evento: ${title}`);
  }

  return (
    // <article className="event-card">
    //   <h2
    //     className="event-card__title"
    //     data-tooltip-id={idEvento}
    //     data-tooltip-content={title}
    //     data-tooltip-place="top"
    //   >
    //     <Tooltip id={idEvento} className="tooltip" />
    //     {title.substr(0, 25)}
    //   </h2>

    //   <p
    //     className="event-card__description"
    //     data-tooltip-id={idEvento}
    //     data-tooltip-content={description}
    //     data-tooltip-place="top"
    //   >
    //     <Tooltip id={idEvento} className="tooltip" />
    //     {description.substr(0, 3)}...
    //   </p>

    //   <p className="event-card__description">{dateFormatDbToView(eventDate)}</p>

    //   <a
    //     onClick={() => {
    //       conectar(idEvento);
    //     }}
    //     href=""
    //     className="event-card__connect-link"
    //   >
    //     Conectar
    //   </a>
    // </article>

    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          {" "}
          <img
            width={250}
            height={250}
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Escudo_Vasco_2020.png"
            alt="vasco"
          />
        </div>
        <div class="swiper-slide">
          <img
            width={250}
            height={250}
            src="https://cdn.discordapp.com/attachments/1127347892873613475/1127350099132022975/7cc6d35c-ffc5-406d-b09f-1b2eaa505b3f.jpg?ex=65626698&is=654ff198&hm=c5591886dfd06ae7f03cbaf66c2401577f3030b32d61733929a6b39fd097dd68&"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            width={250}
            height={250}
            src="https://cdn.discordapp.com/attachments/869366332972486657/1140070439968841758/rounded-in-photoretrica.png?ex=656288d6&is=655013d6&hm=f9e6bf372c7fd1d3535e7a481472a669f9f4340e03e18a1d880fb8d793f72833&"
            alt=""
          />
        </div>
        ...
      </div>

      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <div class="swiper-scrollbar"></div>
    </div>
  );
};

export default NextEvent;

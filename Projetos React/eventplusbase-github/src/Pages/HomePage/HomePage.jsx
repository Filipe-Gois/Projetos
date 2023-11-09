import React, { useState } from "react";
import './HomePage.css'
import MainContent from "../../Components/MainContent/MainContent";
import Banner from "../../Components/Banner/Banner";
import VisionSection from "../../Components/VisionSection/VisionSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import NextEvent from "../../Components/NextEvent/NextEvent";
import Title from "../../Components/Title/Title";
import Container from "../../Components/Container/Container";
import axios from "axios";


const HomePage = () => {

  //fake mock - api mocada
  const [nextEvents, setNextEvents] = useState([
    {
      id: 1,
      title: "x",
      data: "10/11/2023",
      desc: "Muito legal!!!!!!!!!"
    },
    {
      id: 2,
      title: "y",
      data: "11/11/2023",
      desc: "Muito Phoda????!!!!"
    }
  ])
  return (
    <MainContent>
      <Banner />

      {/* PRÓXIMOS EVENTOS */}
      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Próximos Eventos"} />

          <div className="events-box">

            {nextEvents.map(e => {
              return (
                <>
                  <NextEvent
                    title={"Evento " + e.title}
                    description={e.desc}
                    eventDate={e.data}
                    idEvento={e.id}
                  />

                </>
              )
            })}


          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;

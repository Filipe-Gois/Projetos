import React, { useEffect, useState } from "react";
import './HomePage.css'
import MainContent from "../../Components/MainContent/MainContent";
import Banner from "../../Components/Banner/Banner";
import VisionSection from "../../Components/VisionSection/VisionSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import NextEvent from "../../Components/NextEvent/NextEvent";
import Title from "../../Components/Title/Title";
import Container from "../../Components/Container/Container";
import api from "../../Services/Service";


const HomePage = () => {

  useEffect(() => {
    async function getProximosDados() {
      try {
        const promise = await api.get(`  /Evento/ListarProximos`)

        setNextEvents(promise.data)


      } catch (error) {
        alert('F demaize na API')
      }
    }

    getProximosDados()

  }, [])

  //fake mock - api mocada
  const [nextEvents, setNextEvents] = useState([])
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
                    title={"Evento " + e.nomeEvento}
                    description={e.descricao}
                    eventDate={e.dataEvento}
                    idEvento={e.idEvento}
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

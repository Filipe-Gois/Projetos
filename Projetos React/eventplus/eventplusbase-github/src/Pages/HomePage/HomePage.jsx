import React, { useEffect, useState } from "react";
import "./HomePage.css";
import MainContent from "../../Components/MainContent/MainContent";
import Banner from "../../Components/Banner/Banner";
import VisionSection from "../../Components/VisionSection/VisionSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import NextEvent from "../../Components/NextEvent/NextEvent";
import Title from "../../Components/Title/Title";
import Container from "../../Components/Container/Container";
import api from "../../Services/Service";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {


  const [notifyUser, setNotifyUser] = useState({}); //state que possui as notificações


  useEffect(() => {
    async function getProximosDados() {
      try {
        const promise = await api.get(`/Evento/ListarProximos`);

        setNextEvents(promise.data);
      } catch (error) {
        setNotifyUser({
          titleNote: "Atenção",
          textNote: `F demaize na API!`,
          imgIcon: "danger",
          imgAlt:
            "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
          showMessage: true,
        });
      }
    }

    getProximosDados();
  }, []);

  //fake mock - api mocada
  const [nextEvents, setNextEvents] = useState([]);
  return (
    <MainContent>
      <Banner />

      {/* PRÓXIMOS EVENTOS */}
      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Próximos Eventos"} />

          <div className="events-box">
            <Swiper
              //fazer validação para o mobile só exibir um slide
              // {window.innerWidth >= 992 ? slidesPerView={3} : slidesPerView={1}}
              //window.innerWidth >= 992 ? 3 : 1
              slidesPerView={window.innerWidth >= 992 ? 3 : 1}
              spaceBetween={30}
              // style={}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {nextEvents.map((e) => {
                return (
                  <SwiperSlide key={e.idEvento}>
                    <NextEvent
                      title={"Evento " + e.nomeEvento}
                      description={e.descricao}
                      eventDate={e.dataEvento}
                      idEvento={e.idEvento}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;

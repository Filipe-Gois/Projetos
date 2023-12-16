import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Relogio from "../../Assets/images/icon-hour.png";
import Container from "../../Components/Container/Container";
import MainContent from "../../Components/MainContent/MainContent";
import Table from "../../Components/Table/Table";
import { Input } from "../../Components/FormComponents/FormComponents";
import MascaraObrigatoria from "../../Assets/images/required-mask.png";
import MascaraRecomendada from "../../Assets/images/recommended-mask.png";
import ToalhaObrigatoria from "../../Assets/images/required-towel.png";
import ToalhaRecomendada from "../../Assets/images/recommended-towel.png";
import BebedouroParcial from "../../Assets/images/partial-fountain.png";
import BebedouroProibido from "../../Assets/images/forbidden-fountain.png";
import VestiarioLiberado from "../../Assets/images/required-lockerroom.png";
import VestiarioParcial from "../../Assets/images/partial-lockerroom.png";
import VestiarioFechado from "../../Assets/images/forbidden-lockerroom.png";
import Figure from "../../Components/Figure/Figure";
import api, { url } from "../../Services/Apis";
import CardUnidade from "../../Components/CardUnidade/CardUnidade";

const HomePage = () => {
  const obrigatorioText = "Obrigatório";
  const recomendadoText = "Recomendado";

  const ParcialText = "Parcial";
  const ProibidoText = "Proibido";

  const LiberadoText = "Liberado";
  const FechadoText = "Fechado";
  const [unidadeSmartFit, setUnidadeSmartFit] = useState([]);

  const getUnidadeSmartFit = async () => {
    const response = await api.get(url);

    setUnidadeSmartFit(response.data);
  };

  useEffect(() => {
    getUnidadeSmartFit();
  }, []);

  console.log(unidadeSmartFit);

  return (
    <MainContent>
      <Container>
        {/* <section className="horario-section">
          <form action="" onSubmit={""}>
            <div className="relogio">
              <img
                src={Relogio}
                alt="Imagem de relógio amarelo simbolizando qual período do dia o usuário gostaria de treinar."
              />
              <p>Horário</p>
            </div>

            <Table />
          </form>
        </section> */}

        <section className="legend-section">
          <div className="legend-section__img-content">
            <p>Máscara</p>
            <div className="legend-section__img-box legend-section__img-content--mascaras">
              <Figure
                imageRender={MascaraObrigatoria}
                figCaption={obrigatorioText}
              />
              <Figure
                imageRender={MascaraRecomendada}
                figCaption={recomendadoText}
              />
            </div>
          </div>
          <div className="legend-section__img-content">
            <p>Toalha</p>

            <div className="legend-section__img-box legend-section__img-content--toalhas">
              <Figure
                imageRender={ToalhaObrigatoria}
                figCaption={obrigatorioText}
              />
              <Figure
                imageRender={ToalhaRecomendada}
                figCaption={recomendadoText}
              />
            </div>
          </div>
          <div className="legend-section__img-content">
            <p>Bebedouro</p>

            <div className="legend-section__img-box legend-section__img-content--bebedouros">
              <Figure imageRender={BebedouroParcial} figCaption={ParcialText} />
              <Figure
                imageRender={BebedouroProibido}
                figCaption={ProibidoText}
              />
            </div>
          </div>

          <div className="legend-section__img-content">
            <p>Vestiários</p>

            <div className="legend-section__img-box legend-section__img-content--vestiarios">
              <Figure
                imageRender={VestiarioLiberado}
                figCaption={LiberadoText}
              />
              <Figure imageRender={VestiarioParcial} figCaption={ParcialText} />
              <Figure imageRender={VestiarioFechado} figCaption={FechadoText} />
            </div>
          </div>
        </section>
      </Container>
    </MainContent>
  );
};

export default HomePage;

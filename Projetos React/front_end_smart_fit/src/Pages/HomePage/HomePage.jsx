import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Relogio from "../../Assets/images/icon-hour.png";
import Container from "../../Components/Container/Container";
import MainContent from "../../Components/MainContent/MainContent";
import Table from "../../Components/Table/Table";
import {
  Button,
  Form,
  Input,
  Label,
} from "../../Components/FormComponents/FormComponents";
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
  //objeto que representa a legenda das imagens de máscara, toalha, bebedouro e vestiário
  const [statusLegenda] = useState({
    obrigatorioText: "Obrigatório",
    recomendadoText: "Recomendado",
    parcialText: "Parcial",
    proibidoText: "Proibido",
    liberadoText: "Liberado",
    fechadoText: "Fechado",
  });

  //armazena os dados de todas as unidades presentes na API
  const [unidadesSmartFit, setUnidadesSmartFit] = useState([]);

  const [tabelThead] = useState([
    {
      titulo: "Qual período quer treinar?",
    },
  ]);
  // const [tabelTbody] = useState([{titulo:}])

  const getUnidadesSmartFit = async () => {
    const response = await api.get(url);

    setUnidadesSmartFit(response.data);
  };

  useEffect(() => {
    getUnidadesSmartFit();
  }, []);

  console.log(unidadesSmartFit);

  return (
    <MainContent>
      <Container>
        <section className="horario-section">
          <Form action="" onSubmit={""}>
            <div className="relogio">
              <img
                src={Relogio}
                alt="Imagem de relógio amarelo simbolizando qual período do dia o usuário gostaria de treinar."
              />
              <p>Horário</p>
            </div>

            <Table th={tabelThead} />

            <div className="">
              <Input
                type={"checkbox"}
                name={"unidades-fechadas"}
                // manipulationFunction={""}
                additionalClass="unidades-fechadas"
              />
              <Label
                htmlFor={"unidades-fechadas"}
                labelText={"Exibir unidades fechadas"}
              />

              <p>
                Resultados encontrado:{" "}
                {unidadesSmartFit.locations
                  ? unidadesSmartFit.locations.length
                  : 0}
              </p>
            </div>

            <div className="horario__botoes">
              <Button textButton={"Encontrar Unidade"} />
              <Button textButton={"Limpar"} />
            </div>
          </Form>
        </section>

        <section className="legend-section">
          <div></div>
          <div className="legend-section__img-content">
            <p>Máscara</p>
            <div className="legend-section__img-box legend-section__img-content--mascaras">
              <Figure
                imageRender={MascaraObrigatoria}
                figCaption={statusLegenda.obrigatorioText}
              />
              <Figure
                imageRender={MascaraRecomendada}
                figCaption={statusLegenda.recomendadoText}
              />
            </div>
          </div>
          <div className="legend-section__img-content">
            <p>Toalha</p>

            <div className="legend-section__img-box legend-section__img-content--toalhas">
              <Figure
                imageRender={ToalhaObrigatoria}
                figCaption={statusLegenda.obrigatorioText}
              />
              <Figure
                imageRender={ToalhaRecomendada}
                figCaption={statusLegenda.recomendadoText}
              />
            </div>
          </div>
          <div className="legend-section__img-content">
            <p>Bebedouro</p>

            <div className="legend-section__img-box legend-section__img-content--bebedouros">
              <Figure
                imageRender={BebedouroParcial}
                figCaption={statusLegenda.parcialText}
              />
              <Figure
                imageRender={BebedouroProibido}
                figCaption={statusLegenda.ProibidoText}
              />
            </div>
          </div>

          <div className="legend-section__img-content">
            <p>Vestiários</p>

            <div className="legend-section__img-box legend-section__img-content--vestiarios">
              <Figure
                imageRender={VestiarioLiberado}
                figCaption={statusLegenda.LiberadoText}
              />
              <Figure
                imageRender={VestiarioParcial}
                figCaption={statusLegenda.parcialText}
              />
              <Figure
                imageRender={VestiarioFechado}
                figCaption={statusLegenda.fechadoText}
              />
            </div>
          </div>
        </section>
      </Container>
    </MainContent>
  );
};

export default HomePage;

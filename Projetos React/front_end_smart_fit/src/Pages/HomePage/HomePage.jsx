import React, { useEffect, useState, memo } from "react";
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
import { useForm } from "react-hook-form";
import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScrollComponent from "../../Components/InfiniteScrollComponent/InfiniteScrollComponent";

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

  const [currentPage, setCurrentPage] = useState(1);

  //armazena os dados de todas as unidades presentes na API
  const [unidadesSmartFit, setUnidadesSmartFit] = useState([]);

  const [unidadesFiltradas, setUnidadesFiltradas] = useState([]);

  const [unidadesRenderizadas, setUnidadesRenderizadas] = useState(
    unidadesFiltradas.slice(0, 10)
  );

  const loadMoreUnits = () => {
    const nextUnits = unidadesFiltradas.slice(
      unidadesRenderizadas.length,
      unidadesRenderizadas.length + 10
    );
    setUnidadesRenderizadas(unidadesRenderizadas.concat(nextUnits));
  };

  // const { register, handleSubmit, reset } = useForm();

  const [checkbox, setCheckbox] = useState({
    manha: false,
    tarde: false,
    noite: false,
    exibirUnidadesFechadas: false,
  });

  //array responsavel pelas informações da tabela do formulário
  const [tabela] = useState([
    ["Qual período quer treinar?"],
    [
      { periodo: "Manhã", horario: "06:00 às 12:00" },
      { periodo: "Tarde", horario: "12:01 às 18:00" },
      { periodo: "Noite", horario: "18:01 às 23:00" },
    ],
  ]);

  const [horario, setHorario] = useState([
    { inicio: 6, fim: 12 },
    { inicio: 12, fim: 18 },
    { inicio: 18, fim: 23 },
  ]);

  const getUnidadesSmartFit = async () => {
    try {
      const response = await api.get(url);
      setUnidadesSmartFit(response.data.locations);
    } catch (error) {
      console.log(error);
    }
  };

  const filtraUnidades = () => {
    try {
      if (checkbox.exibirUnidadesFechadas === true)
        setUnidadesFiltradas(unidadesSmartFit);
      else {
        setUnidadesFiltradas(
          unidadesSmartFit.filter(
            (location) => location.opened || !location.schedules
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const exibirFechadas = () => {
    if (checkbox.exibirUnidadesFechadas === true) {
      setUnidadesFiltradas(unidadesSmartFit);
      // loadMoreUnits();
    } else {
      setUnidadesFiltradas(
        unidadesSmartFit.filter(
          (location) => location.opened || !location.schedules
        )
      );
    }
    // loadMoreUnits();
  };

  const exibirPeloPeriodo = () => {
    //caso queira treinar na manhã

    // exibirFechadas();
    if (checkbox.manha) {
      setUnidadesFiltradas(
        unidadesSmartFit.filter((location, index) => {
          // console.log("Indice" + index);

          if (location.schedules && location.schedules.length > index)
            return location.schedules[index]?.hour === "06h às 12h";
        })
      );

      // unidadesSmartFit.forEach(e, (index) => {
      //   if (e.schedules[index].hour === horario.manha) {
      //     setUnidadesFiltradas(e);
      //   }
      //   return;
      // });

      // for (let index = 0; index < unidadesSmartFit.schedules.length; index++) {
      //   setUnidadesFiltradas();
      // }

      // setUnidadesFiltradas(
      //   unidadesSmartFit.filter((location, indice) => {
      //     return location.schedules[indice].hour === horario.manha;
      //   })
      // );
    }

    // //caso queira treinar na manhã e exibir as fechadas
    // else if (checkbox.manha && checkbox.exibirUnidadesFechadas) {
    //   setUnidadesFiltradas(
    //     unidadesSmartFit.filter((location, indice) => {
    //       return (
    //         location.schedules[indice].hour === horario.manha &&
    //         location.opened === false
    //       );
    //     })
    //   );

    //   //caso queira treinar à tarde
    // } else if (checkbox.tarde) {
    //   setUnidadesFiltradas(
    //     unidadesSmartFit.filter((location, indice) => {
    //       return location.schedules[indice].hour === horario.tarde;
    //     })
    //   );
    // }

    // //caso queira treinar à tarde e exibir as fechadas
    // else if (checkbox.tarde && checkbox.exibirUnidadesFechadas) {
    //   setUnidadesFiltradas(
    //     unidadesSmartFit.filter((location, indice) => {
    //       return (
    //         location.schedules[indice].hour === horario.tarde &&
    //         location.opened === false
    //       );
    //     })
    //   );
    // }

    // //caso queira treinar à noite
    // else if (checkbox.noite) {
    //   setUnidadesFiltradas(
    //     unidadesSmartFit.filter((location, indice) => {
    //       return location.schedules[indice].hour === horario.noite;
    //     })
    //   );
    // } else {
    //   //caso queira treinar à noite e exibir as fechadas
    //   setUnidadesFiltradas(
    //     unidadesSmartFit.filter((location, indice) => {
    //       return (
    //         location.schedules[indice].hour === horario.noite &&
    //         location.opened === false
    //       );
    //     })
    //   );
    // }
  };

  const handleListar = (e) => {
    e.preventDefault();

    try {
      console.log(unidadesRenderizadas);
      exibirFechadas();

      // loadMoreUnits();
      // exibirPeloPeriodo();
      // if (!checkbox.manha && !checkbox.tarde && !checkbox.noite)
    } catch (error) {
      console.log(error);
    }
  };

  const handleActionAbort = (e) => {
    e.preventDefault();
    setCheckbox({
      manha: false,
      tarde: false,
      noite: false,
      exibirUnidadesFechadas: false,
    });
    //ver se dá p implementar essa lógica para simplificar
    // setCheckbox(false)
    setUnidadesFiltradas([]);
    setUnidadesRenderizadas([]);
    // console.clear()
  };

  useEffect(() => {
    getUnidadesSmartFit();

    // const intersectionObserver = new IntersectionObserver((entries) => {
    //   if (entries.some((entry) => entry.isIntersecting)) {
    //     setCurrentPage((c) => c + 1);
    //     loadMoreUnits();
    //     // console.log("Filtradas");
    //     // console.log(unidadesFiltradas);
    //     // console.log("Renderizadas");
    //     // console.log(unidadesRenderizadas);
    //   }
    // });

    // intersectionObserver.observe(document.querySelector("#sentinela"));
    // return () => intersectionObserver.disconnect();
  }, []);

  return (
    <MainContent>
      <Container>
        <section className="horario-section">
          <Form action="" onSubmit={handleListar}>
            <div className="relogio">
              <img
                src={Relogio}
                alt="Imagem de relógio amarelo simbolizando qual período do dia o usuário gostaria de treinar."
              />
              <p>Horário</p>
            </div>

            {/* css da table está no componente Table */}
            <table className="table">
              <thead className="thead">
                <tr className="linha-thead">
                  <th>Qual período quer treinar?</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr className="linha-tbody">
                  <td>
                    <Label htmlFor={"periodo-horario1"}>
                      <Input
                        type={"radio"}
                        name={"periodo-horario"}
                        id={"periodo-horario1"}
                        // manipulationFunction={""}
                        additionalClass="periodo-treino"
                        value={checkbox.manha}
                        manipulationFunction={(e) => {
                          setCheckbox({
                            ...checkbox,
                            manha: e.target.checked,
                            tarde: false,
                            noite: false,
                          });
                        }}
                        checked={checkbox.manha}
                      />
                      <span>{tabela[1][0].periodo}</span>
                    </Label>
                  </td>
                  <td>{tabela[1][0].horario}</td>
                </tr>

                <tr className="linha-tbody">
                  <td>
                    <Label htmlFor={"periodo-horario2"}>
                      <Input
                        value={checkbox.tarde}
                        additionalClass="periodo-treino"
                        type={"radio"}
                        name={"periodo-horario"}
                        id={"periodo-horario2"}
                        manipulationFunction={(e) =>
                          setCheckbox({
                            ...checkbox,
                            tarde: e.target.checked,
                            manha: false,
                            noite: false,
                          })
                        }
                        checked={checkbox.tarde}
                      />
                      <span>{tabela[1][1].periodo}</span>
                    </Label>
                  </td>
                  <td>{tabela[1][1].horario}</td>
                </tr>

                <tr className="linha-tbody">
                  <td>
                    <Label htmlFor={"periodo-horario3"}>
                      <Input
                        value={checkbox.noite}
                        additionalClass="periodo-treino"
                        type={"radio"}
                        name={"periodo-horario"}
                        id={"periodo-horario3"}
                        manipulationFunction={(e) =>
                          setCheckbox({
                            ...checkbox,
                            noite: e.target.checked,
                            manha: false,
                            tarde: false,
                          })
                        }
                        checked={checkbox.noite}
                      />
                      <span>{tabela[1][2].periodo}</span>
                    </Label>
                  </td>
                  <td>{tabela[1][2].horario}</td>
                </tr>
              </tbody>
            </table>

            <div className="horario-section__resultados">
              <Label htmlFor={"unidades-fechadas"}>
                <Input
                  type={"checkbox"}
                  name={"unidades-fechadas"}
                  id={"unidades-fechadas"}
                  value={checkbox.exibirUnidadesFechadas}
                  manipulationFunction={(e) =>
                    setCheckbox({
                      ...checkbox,
                      exibirUnidadesFechadas: e.target.checked,
                    })
                  }
                  checked={checkbox.exibirUnidadesFechadas}
                  additionalClass="exibir-unidades-fechadas"
                />
                <span>Exibir unidades fechadas</span>
              </Label>

              <p>
                Resultados encontrados:
                <span>
                  {` ${unidadesFiltradas ? unidadesFiltradas.length : 0}`} 
                  {/* unidadesRenderizadas */}
                </span>
              </p>
            </div>

            <div className="horario__botoes">
              <Button
                textButton={`Encontrar Unidade`}
                additionalClass={"button-component--yellow"}
              />
              <Button
                textButton={"Limpar"}
                additionalClass={"button-component--white"}
                manipulationFunction={handleActionAbort}
                type={"reset"}
              />
            </div>
          </Form>
        </section>

        <section className="legend-section">
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
                figCaption={statusLegenda.proibidoText}
              />
            </div>
          </div>

          <div className="legend-section__img-content">
            <p>Vestiários</p>

            <div className="legend-section__img-box legend-section__img-content--vestiarios">
              <Figure
                imageRender={VestiarioLiberado}
                figCaption={statusLegenda.liberadoText}
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

      <Container>
        <section className="unidades-section">
          {unidadesFiltradas
            .sort((a, b) =>
              a.opened < b.opened ? -1 : a.opened > b.opened ? 1 : 0
            ) //ordena a ordem de exibição dos cards, colocando os "fechados" em priemiro lugar no array  ordem: 1) fechadas, 2) abertas e com horario 3) sem horario

            //ou .sort((a, b) => a.opened === b.opened ? 0 : a.opened ? 1 : -1)   ordem: 1) fechadas, 2) sem horario 3) abertas e com horario
            .map((unidade) => {
              return (
                <CardUnidade
                  key={Math.random()}
                  idUnidade={unidade.id}
                  title={unidade.title}
                  content={unidade.content ? unidade.content : unidade.street}
                  opened={unidade.opened}
                  mask={unidade.mask}
                  towel={unidade.towel}
                  fountain={unidade.fountain}
                  locker_room={unidade.locker_room}
                  schedules={unidade.schedules}
                />
              );
            })}
          {/* <div id="sentinela"></div> */}
          {unidadesRenderizadas && (
            <InfiniteScrollComponent
              fnLoadMore={() => console.log("Apareceu")}
            />
          )}
        </section>
      </Container>
    </MainContent>
  );
};

export default HomePage;

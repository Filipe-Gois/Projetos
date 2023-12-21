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
import { useForm } from "react-hook-form";

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
  const [sche, setSche] = useState([]);

  const [unidadesFiltradas, setUnidadesFiltradas] = useState([]);

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
    // { inicio: 6, fim: 12 },
    // { inicio: 12, fim: 18 },
    // { inicio: 18, fim: 23 },
  ]);

  const exibirFechadas = () => {
    if (checkbox.exibirUnidadesFechadas === true)
      setUnidadesFiltradas(unidadesSmartFit);
    else {
      setUnidadesFiltradas(
        unidadesSmartFit.filter(
          (location) => location.opened || !location.schedules
        )
      );
    }
  };

  const getUnidadesSmartFit = async () => {
    try {
      const response = await api.get(url);
      setUnidadesSmartFit(response.data.locations);

      setSche(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const exibirPeloPeriodo = () => {
    //caso queira treinar na manhã

    if (checkbox.manha) {
      exibirFechadas();
      setUnidadesFiltradas(
        unidadesSmartFit.filter((location, index) => {
          // console.log("Indice" + index);

          if (location.schedules && location.schedules.length > index)
            return (
              location.schedules ||
              location.schedules[index]?.hour === "06h às 12h"
            );
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
      exibirPeloPeriodo();
      if (!checkbox.manha && !checkbox.tarde && !checkbox.noite)
        exibirFechadas();

      console.log(unidadesFiltradas);
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
    // console.clear()
  };

  useEffect(() => {
    getUnidadesSmartFit();
    console.log(unidadesFiltradas);
    // let u = {
    //   current_country_id: 1,
    //   locations: [
    //     {
    //       id: 10998878976097,
    //       title: "Dom Severino",
    //       content:
    //         "\n<p>Av. Dom Severino, 1733 &#8211; Fátima<br>Teresina, PI</p>\n",
    //       opened: true,
    //       mask: "required",
    //       towel: "required",
    //       fountain: "partial",
    //       locker_room: "allowed",
    //       schedules: [
    //         {
    //           weekdays: "Seg. à Sex.",
    //           hour: "06h às 22h",
    //         },
    //         {
    //           weekdays: "Sáb.",
    //           hour: "Fechada",
    //         },
    //         {
    //           weekdays: "Dom.",
    //           hour: "Fechada",
    //         },
    //       ],
    //     },
    //     {
    //       id: 10998878976096,
    //       title: "Teresina Shopping",
    //       content:
    //         "\n<p>Av. Raul Lopes, 1000 &#8211; Noivos<br>Teresina, PI</p>\n",
    //       opened: true,
    //       mask: "required",
    //       towel: "required",
    //       fountain: "partial",
    //       locker_room: "allowed",
    //       schedules: [
    //         {
    //           weekdays: "Seg. à Sex.",
    //           hour: "06h às 22h",
    //         },
    //         {
    //           weekdays: "Sáb.",
    //           hour: "Fechada",
    //         },
    //         {
    //           weekdays: "Dom.",
    //           hour: "Fechada",
    //         },
    //       ],
    //     },
    //   ],
    // };
    // console.log((Object.entries(u)));
  }, []);

  return (
    <MainContent>
      <Container>
        <section className="horario-section">
          <Form action="" onSubmit={handleListar}>
            {/* <div className=""> */}
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

            {/* <Table dados={tabela} /> */}

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
                </span>
              </p>
            </div>

            <div className="horario__botoes">
              <Button
                textButton={`Encontrar Unidade`}
                additionalClass={"button-component--yellow"}
                // manipulationFunction={handleListar}
              />
              <Button
                textButton={"Limpar"}
                additionalClass={"button-component--white"}
                manipulationFunction={handleActionAbort}
                type={"reset"}
              />
            </div>
            {/* </div> */}
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
          {/* {unidadesSmartFit.map((unidade) => {
            return (
              <CardUnidade
                idUnidade={unidade.locations.id}
                title={unidade.locations.title}
                content={
                  "content"
                    ? unidade.locations.content
                    : unidade.street
                }
                opened={unidade.locations.opened}
                mask={unidade.locations.mask}
                towel={unidade.locations.towel}
                fountain={unidade.locations.fountain}
                locker_room={unidade.locations.locker_room}
                schedules={unidade.locations.schedules}
              />
            );
          })} */}
        </section>
      </Container>
    </MainContent>
  );
};

export default HomePage;

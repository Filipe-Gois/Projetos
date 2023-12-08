import React, { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import "./EventosPage.css";
import Evento from "../../assets/images/evento.svg";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import Container from "../../Components/Container/Container";
import MainContent from "../../Components/MainContent/MainContent";
import Spinner from "../../Components/Spinner/Spinner";
import {
  Button,
  Input,
  Select,
  SelectTP
} from "../../Components/FormComponents/FormComponents";
import TableEvento from "./TableEvento/TableEvento";
import api from "../../Services/Service";
import Notification from "../../Components/Notification/Notification";
import { dateFormatDbToView, dateFormatDbToInput } from '../../Utils/stringFunction'


const EventosPage = () => {
  const [idEvento, setIdEvento] = useState(null);
  const [nomeEvento, setNomeEvento] = useState();
  const [descricao, setDescricao] = useState();
  const [dataEvento, setDataEvento] = useState();
  //const [idTipoEvento, setIdTipoEvento] = useState();
  // const [idInstituicao, setIdInstituicao] = useState("4a1c417e-caae-44ae-9522-d35b824b0757"); //senai
  const [idInstituicao, setIdInstituicao] = useState("22e6df3e-547b-4291-8110-735ee094f591"); //casa


  const [eventos, setEventos] = useState([]); //array que armazena todos os eventos

  const [frmEdit, setFrmEdit] = useState(false); //state que valida qual tela será exibida (cadastrar ou editar)
  const [notifyUser, setNotifyUser] = useState({}); //state que possui as notificações
  const [showSpinner, setShowSpinner] = useState(false); //state que possui o spinner caso a API não carregue

  const [tiposEvento, setTiposEvento] = useState([]); //array com todos os tipos de evento
  const [tipoEventoSelecionado, setTipoEventoSelecionado] = useState(""); //responsável por armazenar o valor escolhido do usuário no "Select" do formulário
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState("");
  const [frmEditData, setFrmEditData] = useState({
    nomeEvento,
    idInstituicao,
    dataEvento,
    descricao,
    idTipoEvento: tipoEventoSelecionado,
  }); //usar na hora de atualizar

  const [evento, setEvento] = useState([
    {
      nomeEvento,
      descricao,
      dataEvento,
      idTipoEvento: tipoEventoSelecionado,
      idInstituicao,
    },
  ]); //objeto com todas as propriedades de um evneto

  useEffect(() => {
    setShowSpinner(true);

    async function getTiposEvento() {
      const response = await api.get(`/TiposEvento`);
      setTiposEvento(response.data);
    }
    getTiposEvento();

    async function getEventos() {
      try {
        const response = await api.get(`/Evento`);
        setEventos(response.data);
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

      setShowSpinner(false);
    }

    getEventos();
  }, []);

  async function exibirLista() {
    try {
      const response = await api.get(`/Evento`);
      setEventos(response.data);
    } catch (error) { }
  }

  async function handleDelete(idEvento) {
    try {
      await api.delete(`/Evento/${idEvento}`);

      exibirLista();

      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `Excluído com sucesso!`,
        imgIcon: "success",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        showMessage: true,
      });
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

  async function handleUpdate(e) {
    e.preventDefault();

    if (nomeEvento.length > 3) {

      try {
        await api.put(`/Evento/${idEvento}`, {
          nomeEvento,
          descricao,
          dataEvento,
          idTipoEvento: tipoEventoSelecionado,
          idInstituicao,
        });

        editActionAbort();
        exibirLista();

        setNotifyUser({
          titleNote: "Sucesso",
          textNote: `Cadastrado com sucesso!`,
          imgIcon: "success",
          imgAlt:
            "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
          showMessage: true,
        });
      } catch (error) {
        setNotifyUser({
          titleNote: "Atenção",
          textNote: `Não foi possível atualizar.`,
          imgIcon: "danger",
          imgAlt:
            "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
          showMessage: true,
        });
      }
    }
  }

  function editActionAbort() {
    setFrmEdit(false);
    // setEvento({
    //     nomeEvento: "",
    //     descricao: "",
    //     idTipoEvento: "",
    //     dataEvento: ""
    // })
    setIdEvento(null);
    setNomeEvento("");
    setDescricao("");
    setDataEvento("");
    //setIdTipoEvento("");
    setTipoEventoSelecionado("");
  }

  async function showUpdateForm(idEvento) {
    setFrmEdit(true);

    try {
      const response = await api.get(`/Evento/${idEvento}`);
      // setEvento({
      //     nomeEvento: response.data.nomeEvento,
      //     descricao: response.data.descricao,
      //     idTipoEvento: response.data.idTipoEvento,
      //     dataEvento: response.data.dataEvento
      // })
      setIdEvento(response.data.idEvento);

      setDataEvento(dateFormatDbToInput(response.data.dataEvento));
      setNomeEvento(response.data.nomeEvento)
      setDescricao(response.data.descricao);
      setTipoEventoSelecionado(response.data.idTipoEvento);
      setInstituicaoSelecionada(response.data.idInstituicao);


      //console.log(dateFormatDbToInput(dataEvento));
    } catch (error) {
      setNotifyUser({
        titleNote: "Atenção",
        textNote: `F demaize na API!`,
        imgIcon: "danger",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        showMessage: true,
      });
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post(`/Evento`, {
        dataEvento,
        nomeEvento,
        descricao,
        idTipoEvento: tipoEventoSelecionado,
        idInstituicao,
      });

      editActionAbort();
      exibirLista();

      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `Cadastrado com sucesso!`,
        imgIcon: "success",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        showMessage: true,
      });
    } catch (error) {
      setNotifyUser({
        titleNote: "Atenção",
        textNote: `F demaize na API!`,
        imgIcon: "danger",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        showMessage: true,
      });
      console.log(error);
    }
  }

  return (
    <MainContent>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
      {showSpinner ? <Spinner /> : null}

      <section className="cadastro-evento-section">
        <Container>
          <div className="cadastro-evento__box">
            <Title titleText={"Eventos"} />

            <ImageIllustrator
              imageRender={Evento}
              alterText={""}
              additionalClass=""
            />

            <form
              action=""
              className="ftipo-evento"
              onSubmit={frmEdit ? handleUpdate : handleSubmit}
            >
              {!frmEdit ? (
                <>
                  <Input
                    type={"text"}
                    id=""
                    required={"required"}
                    additionalClass=""
                    name={""}
                    placeholder={"Nome"}
                    manipulationFunction={(e) => setNomeEvento(e.target.value)}
                    value={nomeEvento}
                  />

                  <Input
                    type={"text"}
                    id=""
                    required={"required"}
                    additionalClass=""
                    name={""}
                    placeholder={"Descrição"}
                    // manipulationFunction={e => {
                    //     setFrmEditData({
                    //         ...frmEditData,
                    //         descricao: e.target.value
                    //     })
                    // }}
                    manipulationFunction={(e) => setDescricao(e.target.value)}
                    value={descricao}
                  />
                  <SelectTP
                    id={""}
                    name={""}
                    dados={tiposEvento}
                    value={tipoEventoSelecionado}
                    defaultValue={tipoEventoSelecionado}
                    required={"required"}
                    manipulationFunction={(e) =>
                      setTipoEventoSelecionado(e.target.value)
                    }
                  />

                  <Input
                    type={"date"}
                    id=""
                    required={"required"}
                    additionalClass=""
                    name={""}
                    // placeholder={'Nome'}
                    manipulationFunction={(e) => setDataEvento(e.target.value)}
                    value={(dataEvento)}
                  />

                  <Button
                    type={"submit"}
                    name={""}
                    id=""
                    additionalClass=""
                    className={`button-component`}
                    //smanipulationFunction={''}
                    textButton={"Cadastrar"}
                  />
                </>
              ) : (
                <>
                  <Input
                    type={"text"}
                    id=""
                    required={"required"}
                    additionalClass=""
                    name={""}
                    placeholder={"Nome"}
                    value={nomeEvento}
                    manipulationFunction={(e) => setNomeEvento(e.target.value)}
                  />

                  <Input
                    type={"text"}
                    id=""
                    required={"required"}
                    additionalClass=""
                    name={""}
                    placeholder={"Descrição"}
                    value={descricao}
                    manipulationFunction={(e) => setDescricao(e.target.value)}
                  />
                  <SelectTP
                    id={""}
                    name={""}
                    dados={tiposEvento}
                    required={"required"}
                    manipulationFunction={(e) =>
                      setTipoEventoSelecionado(e.target.value)
                    }
                    defaultValue={tipoEventoSelecionado}
                  />

                  <Input
                    type={"date"}
                    id=""
                    required={"required"}
                    additionalClass=""
                    name={""}
                    manipulationFunction={(e) => setDataEvento(e.target.value)}
                    value={dataEvento}
                  />

                  <div className="buttons-editbox">
                    <Button
                      textButton="Atualizar"
                      type="submit"
                      additionalClass="button-component--middle"
                      id="atualizar"
                      name="atualizar"
                    />

                    <Button
                      textButton="Cancelar"
                      additionalClass="button-component--middle"
                      type="button"
                      id="cancelar"
                      name="cancelar"
                      manipulationFunction={editActionAbort}
                    />
                  </div>
                </>
              )}
            </form>
          </div>
        </Container>
      </section>

      <section className="lista-eventos-section">
        <Container>
          <Title titleText={"Lista de eventos"} color="#fff" />

          <TableEvento
            dados={eventos}
            fnUpdate={(idEvento) => showUpdateForm(idEvento)}
            fnDelete={handleDelete}
          />
        </Container>
      </section>
    </MainContent>
  );
};

export default EventosPage;

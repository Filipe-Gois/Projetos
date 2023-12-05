import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/MainContent/MainContent";
import Title from "../../Components/Title/Title";
import Table from "./TableEvA/TableEvA";
import Container from "../../Components/Container/Container";
import { Select } from "../../Components/FormComponents/FormComponents";
import Spinner from "../../Components/Spinner/Spinner";
import Modal from "../../Components/Modal/Modal";
import api from "../../Services/Service";

import './EventosAlunoPage.css';
import { UserContext } from "../../Context/AuthContext";

const EventosAlunoPage = () => {
  // state do menu mobile
  const [exibeNavbar, setExibeNavbar] = useState(false);
  const [eventos, setEventos] = useState([]);
  // select mocado
  const [quaisEventos, setQuaisEventos] = useState([
    { value: "1", text: "Todos os eventos" },
    { value: "2", text: "Meus eventos" },
  ]);

  const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // recupera os dados globais do usuário
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {


    //trazer todos os eventos ou trazer os meus eventos
    async function loadEventsType() {

      setShowSpinner(true)
      try {

        if (tipoEvento === "1") {
          const response = await api.get(`/Evento`)
          const responseEventos = await api.get(`/PresencaEvento/${userData.userId}`)

          const dadosMarcados = verificaPresenca(response.data, responseEventos.data)

          console.clear()
          console.log(dadosMarcados);

          setEventos(response.data)
        }
        else {
          let arrayModificado = []
          const response = await api.get(`/PresencaEvento/${userData.userId}`)


          response.data.forEach(element => {
            arrayModificado.push({ ...element.evento, situacao: element.situacao })
          });
          setEventos(arrayModificado)

        }

      } catch (error) {

      }

      setShowSpinner(false)
    }

    loadEventsType();
  }, [tipoEvento, userData.userId]);


  const verificaPresenca = (arrayAllEvents, eventsUser) => {


    for (let i = 0; i < arrayAllEvents.length; i++) {

      for (let x = 0; x < eventsUser.length; x++) {

        if (arrayAllEvents[i].idEvento === eventsUser[x].idEvento) {

          arrayAllEvents[i].situacao = true;

          break;
        }
      }

    }
    return eventsUser
  }

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  async function loadMyComentary(idComentary) {
    return "????";
  }

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  function handleConnect() {
    alert("Desenvolver a função conectar evento");
  }
  return (
    <>


      <MainContent>
        <Container>
          <Title titleText={"Eventos"} className="custom-title" />

          <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            dados={quaisEventos} // aqui o array dos tipos
            manipulationFunction={(e) => myEvents(e.target.value)} // aqui só a variável state
            defaultValue={tipoEvento}
            additionalClass="select-tp-evento"
          />
          <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => {
              showHideModal();
            }}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.userId}
          showHideModal={showHideModal}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
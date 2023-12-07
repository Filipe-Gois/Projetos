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

  const [notifyUser, setNotifyUser] = useState({}); //state que possui as notificações


  const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // recupera os dados globais do usuário
  const { userData, setUserData } = useContext(UserContext);

  const [comentarioDescricao, setComentarioDescricao] = useState("")






  //trazer todos os eventos ou trazer os meus eventos
  async function loadEventsType() {

    setShowSpinner(true)
    try {

      if (tipoEvento === "1") {
        const response = await api.get(`/Evento`)
        const responseEventos = await api.get(`/PresencaEvento/${userData.userId}`)
        setEventos(response.data)

        const dadosMarcados = verificaPresenca(response.data, responseEventos.data)

        console.clear()
        console.log(dadosMarcados);

      }
      else {
        let arrayModificado = []
        const response = await api.get(`/PresencaEvento/${userData.userId}`)


        response.data.forEach(element => {
          arrayModificado.push({
            ...element.evento,
            situacao: element.situacao,
            idPresencaEvento: element.idPresencaEvento
          })
        });
        setEventos(arrayModificado)

      }

    } catch (error) {

    }

    setShowSpinner(false)
  }


  useEffect(() => {

    console.log(eventos);
    loadEventsType();
  }, [tipoEvento, userData.userId]);


  const verificaPresenca = (arrayAllEvents, eventsUser) => {


    for (let x = 0; x < arrayAllEvents.length; x++) {

      for (let x = 0; i < eventsUser.length; i++) {

        if (arrayAllEvents[x].idEvento === eventsUser[i].idEvento) {

          arrayAllEvents[x].situacao = true;
          arrayAllEvents[x].idPresencaEvento = eventsUser[i].idPresencaEvento

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

  //ler um comentario - get
  async function loadMyComentary(idUsuario, idEvent) {
    try {
      const response = await api.get(`/ComentarioEvento/BuscarPorIdUsuario/123?idUsuario=${idUsuario}&idEvento=${idEvent}`);
      const response2 = await api.get(`/ComentarioEvento/BuscarPorIdUsuario/${idUsuario}/${idEvent}`);

      console.log(response.data.descricao)
      setComentarioDescricao("Filipe 123")
    }
    catch (error) {

    }
  }


  //remove o comentario - delete
  const comentaryRemove = async () => {

  }

  //cadastrar comentario - post
  const postMyComentary = async (idEvent) => {
    try {

      const response = await api.post(`/ComentarioEvento`, {
        idUsuario: userData.userId,
        idEvento: idEvent,
        situacao: true,
        descricao: comentarioDescricao
      })

    } catch (error) {

    }
  }

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  async function handleConnect(idEvent, whatTheFunction, idPresencaEvento = null) {

    if (whatTheFunction === "connect") {
      try {
        const response = await api.post("/PresencaEvento", {
          situacao: true,
          idUsuario: userData.userId,
          idEvento: idEvent
        })

        if (response.status === 201) {
        //   setNotifyUser({
        //     titleNote: "Sucesso",
        //     textNote: `Cadastrado com sucesso!`,
        //     imgIcon: "success",
        //     imgAlt:
        //         "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        //     showMessage: true,
        // });
        }

      } catch (error) {
        console.log(error);
      }
      return;
    }

    //unconnect
    alert("Desconectar ao evento" + idEvent)
    console.log(idPresencaEvento);

    const promiseDelete = await api.delete('/PresencaEvento' + idPresencaEvento)
    if (promiseDelete.status === 204) {
      loadEventsType()
      alert('Desconectado do evento.')
    }

  }
  return (
    <>


      <MainContent>
        <Container>
          <Title titleText={"Eventos"} additionalClass="custom-title" />

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
          fnGet={loadMyComentary}
          fnPost={postMyComentary}
          fnDelete={comentaryRemove}
          // fnNewCommentary={''}
          comentaryText={comentarioDescricao}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;

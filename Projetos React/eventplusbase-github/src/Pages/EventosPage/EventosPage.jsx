import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title/Title';
import './EventosPage.css'
import Evento from '../../assets/images/evento.svg'
import ImageIllustrator from '../../Components/ImageIllustrator/ImageIllustrator';
import Container from '../../Components/Container/Container';
import MainContent from '../../Components/MainContent/MainContent';
import Spinner from '../../Components/Spinner/Spinner';
import { Button, Input } from '../../Components/FormComponents/FormComponents';
import TableEvento from './TableEvento/TableEvento';
import api from '../../Services/Service';
import Notification from '../../Components/Notification/Notification';

const EventosPage = () => {

    const [eventos, setEventos] = useState([]);
    const [frmEdit, setFrmEdit] = useState(false);
    const [notifyUser, setNotifyUser] = useState({})
    const [showSpinner, setShowSpinner] = useState(false)

    useEffect(() => {
        setShowSpinner(true)

        async function getEventos() {

            try {
                const response = await api.get(`/Evento`)
                setEventos(response.data)

            } catch (error) {
                setNotifyUser({
                    titleNote: "Atenção",
                    textNote: `F demaize na API!`,
                    imgIcon: "danger",
                    imgAlt:
                        "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                    showMessage: true,
                })
            }

            setShowSpinner(false)
        }

        getEventos()
    }, [])

    async function exibirLista() {
        try {
            const response = await api.get(`/Evento`)
            setEventos(response.data)
        } catch (error) {

        }
    }

    async function handleDelete(idEvento) {
        try {
            await api.delete(`/Evento/${idEvento}`)
            exibirLista();

        } catch (error) {

            setNotifyUser({
                titleNote: "Atenção",
                textNote: `F demaize na API!`,
                imgIcon: "danger",
                imgAlt:
                    "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            })
        }

    }



    return (
        <MainContent>

            <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
            {showSpinner ? <Spinner /> : null}

            <section className='cadastro-evento-section'>
                <Container>
                    <div className='cadastro-evento__box'>


                        <Title titleText={"Eventos"} />


                        <ImageIllustrator
                            imageRender={Evento}
                            alterText={''}
                            additionalClass=''
                        />

                        <form action="" className='ftipo-evento'>
                            <Input
                                type={'text'}
                                id=''
                                required={'required'}
                                additionalClass=''
                                name={''}
                                placeholder={'Nome'}
                                manipulationFunction={''}
                                value={``}
                            />

                            <Input
                                type={'text'}
                                id=''
                                required={'required'}
                                additionalClass=''
                                name={''}
                                placeholder={'Descrição'}
                                manipulationFunction={''}
                                value={``}

                            />
                            <select />

                            <Input
                                type={'date'}
                                id=''
                                required={'required'}
                                additionalClass=''
                                name={''}
                                // placeholder={'Nome'}
                                manipulationFunction={''}
                                value={``}
                            />

                            <Button
                                type={'button'}
                                name={''}
                                id=''
                                additionalClass=''
                                className={`button-component`}
                                manipulationFunction={''}
                                textButton={'Cadastrar'}
                            />
                        </form>
                    </div>
                </Container>
            </section>

            <section className='lista-eventos-section'>
                <Container>
                    <Title titleText={'Lista de eventos'} color='#fff' />

                    <TableEvento

                        dados={eventos}
                        fnUpdate={``}
                        fnDelete={() => handleDelete} />


                </Container>
            </section>

        </MainContent >
    );
};

export default EventosPage;
import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title/Title';
import './EventosPage.css'
import Evento from '../../assets/images/evento.svg'
import ImageIllustrator from '../../Components/ImageIllustrator/ImageIllustrator';
import Container from '../../Components/Container/Container';
import MainContent from '../../Components/MainContent/MainContent';
import Spinner from '../../Components/Spinner/Spinner';
import { Button, Input, Select } from '../../Components/FormComponents/FormComponents';
import TableEvento from './TableEvento/TableEvento';
import api from '../../Services/Service';
import Notification from '../../Components/Notification/Notification';

const EventosPage = () => {

    const [eventos, setEventos] = useState([]); //array que armazena todos os eventos
    const [frmEdit, setFrmEdit] = useState(false);
    const [notifyUser, setNotifyUser] = useState({})
    const [showSpinner, setShowSpinner] = useState(false)
    const [tiposEvento, setTiposEvento] = useState([])

    const [tipoEventoSelecionado, setTipoEventoSelecionado] = useState()


    const [nomeEvento, setNomeEvento] = useState();
    const [descricao, setDescricao] = useState();
    const [dataEvento, setDataEvento] = useState();
    const [idTipoEvento, setIdTipoEvento] = useState();
    const [frmEditData, setFrmEditData] = useState(
        {
            nomeEvento: "xpto",
            idInstituicao: "980976",
            dataEvento: "20-20-02938",
            descricao: " euidhdjhkdh"
        }
    ); //usar na hora de atualizar

    const [evento, setEvento] = useState([{
        nomeEvento,
        descricao,
        dataEvento,
        idTipoEvento
    }]) //objeto com todas as propriedades de um evneto


    useEffect(() => {
        setShowSpinner(true)

        async function getTiposEvento() {
            const response = await api.get(`/TiposEvento`)
            setTiposEvento(response.data)
        }
        getTiposEvento()


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
            })
        }

    }

    async function handleUpdate(idEvento) {

    }

    function editActionAbort() {
        setFrmEdit(false)
        setEvento({
            nomeEvento: "",
            descricao: "",
            idTipoEvento: "",
            dataEvento: ""
        })

    }

    function showUpdateForm(idEvento) {
        setFrmEdit(true)

        try {
            const response = api.get(`/Evento/${idEvento}`);
            setEvento({
                nomeEvento: response.data.nomeEvento,
                descricao: response.data.descricao,
                idTipoEvento: response.data.idTipoEvento,
                dataEvento: response.data.dataEvento

            })
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

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await api.post(`/Evento`, { evento })

            setNotifyUser({
                titleNote: "Sucesso",
                textNote: `Cadastrado com sucesso!`,
                imgIcon: "success",
                imgAlt:
                    "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });

            exibirLista()


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

                        <form action=""
                            className='ftipo-evento'
                            onSubmit={frmEdit ? handleUpdate : handleSubmit}>




                            {!frmEdit ?

                                (
                                    <>
                                        <Input
                                            type={'text'}
                                            id=''
                                            required={'required'}
                                            additionalClass=''
                                            name={''}
                                            placeholder={'Nome'}
                                            manipulationFunction={e => setNomeEvento(e.target.value)}
                                            value={``}
                                        />

                                        <Input
                                            type={'text'}
                                            id=''
                                            required={'required'}
                                            additionalClass=''
                                            name={''}
                                            placeholder={'Descrição'}
                                            // manipulationFunction={e => {
                                            //     setFrmEditData({
                                            //         ...frmEditData,
                                            //         descricao: e.target.value
                                            //     })
                                            // }}
                                            value={``}

                                        />
                                        <Select
                                            id={''}
                                            name={''}
                                            dados={tiposEvento}


                                            required={'required'}
                                            manipulationFunction={e => setTipoEventoSelecionado(e.target.value) }
                                        />

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


                                    </>
                                )

                                :

                                (
                                    <>
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
                                        <Select
                                            id={''}
                                            name={''}
                                            dados={tiposEvento}


                                            required={'required'}
                                            manipulationFunction={''}
                                        />

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
                                        <div className="buttons-editbox">
                                            <Button
                                                textButton="Atualizar"
                                                type="submit"
                                                additionalClass='button-component--middle'
                                                id="atualizar"
                                                name="atualizar"
                                            />

                                            <Button
                                                textButton="Cancelar"
                                                additionalClass='button-component--middle'
                                                type='button'
                                                id='cancelar'
                                                name='cancelar'
                                                manipulationFunction={editActionAbort}
                                            />
                                        </div>

                                    </>
                                )


                            }


                        </form>
                    </div>
                </Container>
            </section>

            <section className='lista-eventos-section'>
                <Container>
                    <Title titleText={'Lista de eventos'} color='#fff' />

                    <TableEvento

                        dados={eventos}
                        fnUpdate={idEvento => showUpdateForm(idEvento)}
                        fnDelete={handleDelete}
                    />


                </Container>
            </section>

        </MainContent >
    );
};

export default EventosPage;
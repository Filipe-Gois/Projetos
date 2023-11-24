import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title/Title';
import './TipoEventosPage.css'
import MainContent from '../../Components/MainContent/MainContent'
import ImageIllustrator from '../../Components/ImageIllustrator/ImageIllustrator';
import eventTypeImage from '../../assets/images/tipo-evento.svg'
import Container from '../../Components/Container/Container'
import { Input, Button } from '../../Components/FormComponents/FormComponents'
import api from '../../Services/Service';
import TableTp from './TableTp/TableTp';
import Notification from '../../Components/Notification/Notification'
import Spinner from '../../Components/Spinner/Spinner'

const TipoEventosPage = () => {

    const [frmEdit, setFrmEdit] = useState(false)
    const [titulo, setTitulo] = useState()
    const [tipoEventos, setTipoEventos] = useState([])
    const [notifyUser, setNotifyUser] = useState({})
    const [idEvento, setIdEvento] = useState(null);
    const [showSpinner, setShowSpinner] = useState(false)


    useEffect(() => {

        async function getTiposEventos() {
            setShowSpinner(true)
            try {
                const promise = await api.get(`/TiposEvento`);

                setTipoEventos(promise.data);
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
            setShowSpinner(false)
        }

        getTiposEventos()

    }, [])


    async function exibirLista() {

        try {
            const response = await api.get(`/TiposEvento`)

            setTipoEventos(response.data)
        } catch (error) {

        }
    }


    async function handleSubmit(e) {
        e.preventDefault();

        if (titulo.trim().length < 3) {
            alert('O título deve ter no mínimo 3 caracteres!')
            return;
        }

        //chamar a api
        try {
            const promise = await api.post('/TiposEvento', {
                titulo
                //ou titulo: titulo
            });

            setNotifyUser({
                titleNote: "Sucesso",
                textNote: `Cadastrado com sucesso!`,
                imgIcon: "success",
                imgAlt:
                    "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });

            // console.log('Cadastrado com sucesso!!');
            // console.log(promise.data);

            //limpar a variavel titulo
            setTitulo('')

            exibirLista()

        } catch (error) {
            console.log(error);
        }

    }


    //Atualização dos dados
    async function handleUpdate(e) {
        e.preventDefault();

        try {
            await api.put(`/TiposEvento/${idEvento}`, {
                titulo

            })

            editActionAbort();
            exibirLista();

            setNotifyUser({
                titleNote: "Sucesso",
                textNote: `Atualizado com sucesso!`,
                imgIcon: "success",
                imgAlt:
                    "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });

        } catch (error) {
            alert(error)
        }


    }
    function editActionAbort() {
        setFrmEdit(false);
        setTitulo("");
        setIdEvento(null);
    }


    async function showUpdateForm(idTipoEvento) {
        setFrmEdit(true)

        try {

            const response = await api.get(`/TiposEvento/${idTipoEvento}`)

            setIdEvento(response.data.idTipoEvento);

            setTitulo(response.data.titulo);



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

    async function handleDelete(idTipoEvento) {
        try {
            await api.delete(`/TiposEvento/${idTipoEvento}`)

            exibirLista()

            setNotifyUser({
                titleNote: "Sucesso",
                textNote: `Excluído com sucesso!`,
                imgIcon: "success",
                imgAlt:
                    "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <MainContent>

            < Notification {...notifyUser} setNotifyUser={setNotifyUser} />
            {showSpinner ? <Spinner /> : null}


            {/* Cadastro de tipo de evento */}
            <section className='cadastro-evento-section'>
                <Container>
                    <div className='cadastro-evento__box'>
                        <Title titleText={'Página Tipos de Eventos'} />

                        <ImageIllustrator
                            imageRender={eventTypeImage}
                            alterText={''}
                            additionalClass='' />

                        <form action=""
                            className='ftipo-evento'
                            onSubmit={frmEdit ? handleUpdate : handleSubmit}>

                            {!frmEdit ?
                                // {Cadastrar}

                                (
                                    <>
                                        <Input
                                            type={'text'}
                                            id={'titulo'}
                                            name={'titulo'}
                                            placeholder={'Título'}
                                            required={'required'}
                                            value={titulo}
                                            manipulationFunction={e => { setTitulo(e.target.value) }}

                                        />
                                        {/* <p>{titulo}</p> */}
                                        <Button
                                            name={'cadastrar'}
                                            id={'cadastrar'}
                                            type={'submit'}
                                            className={''}
                                            textButton={'Cadastrar'}
                                        />

                                    </>
                                )
                                :
                                (

                                    <>
                                        <Input
                                            id="titulo"
                                            placeholder="Título"
                                            name="titulo"
                                            type="text"
                                            required="required"
                                            value={titulo}
                                            manipulationFunction={(e) => setTitulo(e.target.value)}
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
                                )}
                        </form>
                    </div>
                </Container>
            </section>


            {/* Listagem de tipo de Eventos */}
            <section className="lista-eventos-section">
                <Container>
                    <Title titleText={'Lista Tipo de Eventos'} color='#fff' />

                    <TableTp
                        dados={tipoEventos}
                        fnUpdate={idTipoEvento => showUpdateForm(idTipoEvento)}
                        fnDelete={handleDelete} />
                </Container>

            </section>



        </MainContent>
    );
};

export default TipoEventosPage;
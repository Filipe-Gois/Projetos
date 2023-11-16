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
import axios from 'axios';

const TipoEventosPage = () => {

    useEffect(() => {
        async function getTiposEventos() {
            try {
                const promise = await api.get(`/TiposEvento`);

                setTipoEventos(promise.data);
            } catch (error) {
                alert("F demaize na API");
            }
        }

        getTiposEventos();
    }, []);

    const [frmEdit, setFrmEdit] = useState(false)
    const [titulo, setTitulo] = useState()
    const [tipoEventos, setTipoEventos] = useState([])

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
            })

            console.log('Cadastrado com sucesso!!');
            console.log(promise.data);

            //limpar a variavel titulo
            setTitulo('')

        } catch (error) {
            console.log(error);
        }

    }


    //Atualização dos dados
    function handleUpdate() {
        alert('jsfngjf')
    }
    function editActionAbort() {
        alert('jsfngjf')
    }


    function showUpdateForm() {
        alert('jsfngjf')

    }

    function handleDelete() {
        try {
            const promise = api.delete('')
        } catch (error) {
            alert(error)
        }

    }

    return (
        <MainContent>

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
                        fnUpdate={showUpdateForm}
                        fnDelete={handleDelete} />
                </Container>

            </section>



        </MainContent>
    );
};

export default TipoEventosPage;
import React, { useState } from 'react';
import Title from '../../Components/Title/Title';
import './TipoEventosPage.css'
import MainContent from '../../Components/MainContent/MainContent'
import ImageIllustrator from '../../Components/ImageIllustrator/ImageIllustrator';
import eventTypeImage from '../../assets/images/tipo-evento.svg'
import Container from '../../Components/Container/Container'
import { Input, Button } from '../../Components/FormComponents/FormComponents'

const TipoEventosPage = () => {

    const [frmEdit, setFrmEdit] = useState(false)

    function handleSubmit() {

    }
    function handleUpdate() {

    }

    return (
        <MainContent>
            <section className='cadastro-evento-section'>
                <Container>
                    <div className='cadastro-evento__box'>
                        <Title titleText={'Página Tipos de Eventos'} />

                        <ImageIllustrator
                            imageRender={eventTypeImage}
                            alterText={''}
                            additionalClass='' />

                        <form action="" onSubmit={frmEdit ? handleUpdate : handleSubmit}>
                            <Input
                                type={''}
                            />


                        </form>
                    </div>
                </Container>
            </section>
        </MainContent>
    );
};

export default TipoEventosPage;
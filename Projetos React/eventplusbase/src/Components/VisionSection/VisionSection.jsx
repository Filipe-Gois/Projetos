import React from 'react';
import './VisionSection.css'
import Title from '../Title/Title';

const VisionSection = () => {
    return (
        <section className='vision'>
            <div className="vision__box">
                <Title titleText={"Visão"} color='white' additionalClass='vision__title' />

                <p className="vision__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam repudiandae repellat officia repellendus dicta tenetur? Doloribus repellendus deserunt dolorem perspiciatis vitae! Perferendis minima perspiciatis nobis unde illo, consectetur nam!
                    Tenetur delectus explicabo, nisi quia at sapiente ut reiciendis error, beatae commodi quaerat natus mollitia iusto molestiae, tempora et? Quam incidunt veritatis quo obcaecati ratione commodi id excepturi cumque consectetur.</p>
            </div>
        </section>
    );
};

export default VisionSection;
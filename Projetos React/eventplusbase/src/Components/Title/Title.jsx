import React from 'react';
import './Title.css'

const Title = ({ titleText, additionalClass = "", color = "" }) => {
    return (

        //color : color *mesma coisa*
        <h1 style={{ color }} className={`title ${additionalClass}`}>
            {titleText}

            <hr className='title__underscore' style={{ borderColor: color }} />
        </h1>
    );
};

export default Title;
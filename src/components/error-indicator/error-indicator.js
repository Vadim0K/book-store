import React from 'react';

import icon from './error-icon.png';

const ErrorIndicator = () =>{
    return (
        <div>
        <img src={icon} alt="Error"/>
        <span >Crashed!</span>
        </div>
    )
};

export default ErrorIndicator;
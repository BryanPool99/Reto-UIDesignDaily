import React from 'react';

const Toast=({ isVisible })=>{
    return(
        <div className='container-Toast' style={{ display: isVisible ? 'block' : 'none' }}>
            <p>Color <b>#F9ACA7</b> copied to your clipboard</p>
        </div>
    )
}
export default Toast;
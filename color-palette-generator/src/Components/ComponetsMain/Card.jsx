import React from 'react';
const Card=({color,toggleToast})=>{
    return(
        <div className='card'  onClick={() => toggleToast()}>
            <div className='bg' style={{background:color}}></div>
            <div className='bgHexa'>{color}</div>
        </div>
    )
}
export default Card;
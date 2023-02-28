import React from 'react';
import img from '../../Img/matheus-ferrero.jpg';
const Avatar=()=>{
    return(
        <section className='sectio-avatar'>
            <img src={img} alt='avatar'/>
            <div>
                <p>Business Account</p>
                <b>Sarah Bills</b>
            </div>
        </section>
    );
}
export default Avatar;
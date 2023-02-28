import React from 'react';
import img from '../../Img/matheus-ferrero.jpg';
const Avatar=()=>{
    return(
        <section>
            <img src={img} alt='avatar' style={{width:'5rem'}}/>
            <div>
                <p>Business Account</p>
                <b>Sarah Bills</b>
            </div>
        </section>
    );
}
export default Avatar;
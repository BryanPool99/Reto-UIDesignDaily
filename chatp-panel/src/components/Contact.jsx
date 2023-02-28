import React from 'react';
const Contact=( {data} )=>{
    return(
        <ul>
            {data.map((e)=>
                <li key={e.id}>
                    <figure>
                        <img src={e.imgURL} alt={e.alt}/>
                    </figure>
                    <b>{e.name}</b>
                </li>
            )}
         </ul>
    );
}
export default Contact;
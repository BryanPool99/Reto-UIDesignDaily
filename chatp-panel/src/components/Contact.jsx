import React from 'react';
const Contact=( { data,searchTerm } )=>{
    const filteredData = data.filter((contact) =>
    contact.name.toLowerCase().startsWith(searchTerm.toLowerCase()) // filtra los contactos cuyos nombres incluyen el valor de searchTerm
    );
    return(
        <ul>
            {filteredData.map((e)=>
                <li key={e.id}>
                    <figure>
                        <img src={e.imgURL} alt={e.alt}/>
                        <div className={e.isActive ? 'online' : ''}></div>
                    </figure>
                    <b>{e.name}</b>
                </li>
            )}
        </ul>
    );
}
export default Contact;
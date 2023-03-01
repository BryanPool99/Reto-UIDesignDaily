import React from 'react';
import { data } from '../data';
import Contact from './Contact';
const ContainerContacts=({searchTerm})=>{
    return(
        <section className='container-contacts'>
            <Contact data={data} searchTerm={searchTerm}/>
        </section>
    );
}
export default ContainerContacts;
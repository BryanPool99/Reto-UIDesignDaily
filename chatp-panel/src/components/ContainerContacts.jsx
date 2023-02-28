//import React,{useState} from 'react';
import React from 'react';
import { data } from '../data';
import Contact from './Contact';
const ContainerContacts=()=>{
    //const [contact, setContact] = useState(data);
    return(
        <section className='container-contacts'>
            <Contact data={data}/>
        </section>
    );
}
export default ContainerContacts;
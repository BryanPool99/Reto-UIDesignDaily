import React,{useState} from 'react';
import { FaToggleOff,FaToggleOn } from "react-icons/fa";
const Toggle=()=>{
    const [active,setActive]=useState(false);
    const isActive=()=>{
        setActive(!active);
    }
    return(
        <section className='section-toggle'>
            <div className='container_toggle'>
                <button onClick={isActive}>{
                    active ? 
                    <FaToggleOn/>
                    :
                    <FaToggleOff/> }
                </button>
                <b>Stay signed in</b>
            </div>
            <button className='btnContinue'>Continue</button>
        </section>
    );
}
export default Toggle;
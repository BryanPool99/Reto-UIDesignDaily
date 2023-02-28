import React,{useState} from 'react';
import { FaToggleOff,FaToggleOn } from "react-icons/fa";
const Toggle=()=>{
    const [active,setActive]=useState(false);
    const isActive=()=>{
        setActive(!active);
    }
    return(
        <section>
            <div>
                <button onClick={isActive}>{
                    active ? 
                    <FaToggleOn/>
                    :
                    <FaToggleOff/> }
                </button>
                <p>Stay signed in</p>
            </div>
            <button>Continue</button>
        </section>
    );
}
export default Toggle;
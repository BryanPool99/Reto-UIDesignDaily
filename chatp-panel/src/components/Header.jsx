import React from 'react';
import { MdOutlineModeEditOutline,MdSettings } from "react-icons/md";
import { data } from '../data';
const Header=()=>{
    const cantOnline=()=>{
        let val=data.filter(e=>e.isActive);
        return val.length;
    }
    return(
        <section className='Header'>
            <div>
                <h1>Chat</h1>
                <p>{cantOnline()} online</p>
            </div>
            <div className='icons'>
                <button>
                    <MdOutlineModeEditOutline/>
                </button>
                <button className='setting'>
                    <MdSettings/>
                </button>
            </div>
        </section>
    );
}
export default Header;
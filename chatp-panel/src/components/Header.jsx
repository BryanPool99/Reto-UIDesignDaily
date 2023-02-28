import React from 'react';
import { MdOutlineModeEditOutline,MdSettings } from "react-icons/md";
import { data } from '../data';
const Header=()=>{
    return(
        <section className='Header'>
            <div>
                <h1>Chat</h1>
                <p>{data.length} online</p>
            </div>
            <div className='icons'>
                <button>
                    <MdOutlineModeEditOutline/>
                </button>
                <button>
                    <MdSettings/>
                </button>
            </div>
        </section>
    );
}
export default Header;
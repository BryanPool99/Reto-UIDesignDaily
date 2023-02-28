import React,{useState,useRef} from 'react';
const Input=()=>{
    const [visible,setVisible]=useState(false);
    const inputRef = useRef(null);
    const isVisible=()=>{
        setVisible(!visible);
        inputRef.current.focus();
    }
    return(
        <section className='section-input'>
            <b>Password</b>
            <div className='container'>
                <div className='container_input'>
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type={visible ? 'text' : 'password'} ref={inputRef}/>
                </div>
                <button onClick={isVisible}>
                    {visible ? <ion-icon name="eye-outline"></ion-icon> : <ion-icon name="eye-off-outline"></ion-icon>}
                </button>
            </div>
        </section>
    );
}
export default Input;
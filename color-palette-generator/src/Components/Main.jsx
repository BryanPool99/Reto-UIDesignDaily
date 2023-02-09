import React,{ useState,useEffect }from 'react';
import Card from './ComponetsMain/Card';

const randomColor=()=>{
    const ArrayHexa=["#"];
    const values="0123456789ABCDEF";
    for (let i = 1; i < 7; i++) {
       let rnd=values.charAt(Math.floor(Math.random() * 16));
       ArrayHexa.push(rnd);
    }
    return ArrayHexa.join("");
}
const Main=({ toggleToast })=>{
    const [colors, setColors]=useState([randomColor(), randomColor(), randomColor(), randomColor(), randomColor()]);
    const generate=()=>{
        setColors([randomColor(), randomColor(), randomColor(), randomColor(), randomColor()]);
    }
    const generateSpace=(e)=>{
        if (e.key === ' ') {
            setColors([randomColor(), randomColor(), randomColor(), randomColor(), randomColor()]);
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', generateSpace);
        return () => {
            window.removeEventListener('keydown', generateSpace);
        };
    }, []);
    return(
        <main onKeyUp={generateSpace}>
           <section className='container-cards'>
                {colors.map((color, index) => <Card key={index} color={color} toggleToast={toggleToast} />)}
           </section>
           <section className='container-btn_P'>
                <button onClick={generate}type="button" className="btnGenerator">Generate palette</button>
                <p>Or just press the “Spacebar” to generate new palettes.</p>
           </section>
        </main>
    )
}
export default Main;
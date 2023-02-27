import React from 'react';
const Birthday=({ people })=>{
    return (
        <ul>
           {people.map((e)=>
           <li key={e.id}>
                <img src={e.image} alt={e.name}/>
                <div>
                    <b>{e.name}</b>
                    <p>{e.age} years</p>
                </div>
           </li>)
           }
        </ul>
      );
}
export default Birthday;
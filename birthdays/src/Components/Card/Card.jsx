import React,{ useState } from 'react';
import Birthday from '../Birthday/Birthday';
import DATA from '../../DATA';
const Card=()=>{
    const [people, setPeople] = useState(DATA);
    return (
        <main>
            <h1>{people.length} birthdays today</h1>
            <Birthday people={people}/>
            <button onClick={() => setPeople([])}>Clear all</button>
        </main>
      );
}
export default Card
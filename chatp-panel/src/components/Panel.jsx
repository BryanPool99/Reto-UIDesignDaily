import React from 'react';
import Containercontacts from './ContainerContacts';
import Header from './Header';
import Search from './Search';
const Panel=()=>{
    return(
        <main>
            <Header/>
            <hr/>
            <Search/>
            <Containercontacts/>
        </main>
    );
}
export default Panel;
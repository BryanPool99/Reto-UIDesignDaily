import React,{useState} from 'react';
import Containercontacts from './ContainerContacts';
import Header from './Header';
import Search from './Search';
const Panel=()=>{
    const [searchTerm, setSearchTerm] = useState('');
    return(
        <main>
            <Header/>
            <hr/>
            <Search setSearchTerm={setSearchTerm} />
            <Containercontacts searchTerm={searchTerm}/>
        </main>
    );
}
export default Panel;
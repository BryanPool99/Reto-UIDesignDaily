import React from 'react';
import { MdSearch } from "react-icons/md";
const Search=({ setSearchTerm })=>{
    
    return(
        <section className='container-search'>
            <aside>
                <button>
                    <MdSearch/>
                </button>
                <input type={'text'} placeholder={'Search'} 
                    onChange={(e)=>{setSearchTerm(e.target.value)}}
                />
            </aside>
        </section>
    );
}
export default Search;
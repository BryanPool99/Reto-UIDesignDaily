import React from 'react';
import { MdSearch } from "react-icons/md";
const Search=()=>{
    return(
        <section className='container-search'>
            <aside>
                <button>
                    <MdSearch/>
                </button>
                <input type={'text'} placeholder={'Search'}/>
            </aside>
        </section>
    );
}
export default Search;
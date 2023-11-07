import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

function Search() {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
    };

    function handleSearch(){

    }

  return (
    <>
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Product Search..." value={query} onChange={handleChange} style={{marginLeft:0,padding:15, width:240, borderRadius:20}} />
                <button style={{padding:15, backgroundColor:'forestgreen', width:50, borderRadius:20}} type="submit">Go</button>
        </form>
        </div>
    
    </>
  )
}

export default Search
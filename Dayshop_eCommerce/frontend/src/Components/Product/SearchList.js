import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard';



function SearchList({name,setPageResp}) {

    const [message, setMessage] = useState('');
    const [error,setError]=useState([]);
    const [items,setItems]=useState([]);
    const [page, setPage] = useState(1);
    console.log(name)

  async function fetchData(name){

    await axios.get(`http://localhost:8000/allsearchproducts?name=${name}`).then(response=>{
        
            console.log(response.data)
            setMessage(response.data.message)
            setItems(response.data)
        }).catch(error=>{
            console.log(error.response.data)
            setError(error.response.data)
        })

  }
  useEffect(()=>{fetchData(name)},[name])

    // Function to handle "Next" button click
  const handleNext = () => {
    setPage(page + 1);
    setPageResp('search');
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
      setPageResp('search');
    }
  };

  return (
    <>
        {/* "Previous" and "Next" buttons */}
        <div style={{backgroundColor:'skyblue'}}>
          <button style={{padding:5, borderRadius:10, fontSize:25, width:200,backgroundColor:'blueviolet'}} onClick={handlePrevious} disabled={page === 1}>
            Previous
          </button>
          <button style={{marginLeft:1180,padding:5, borderRadius:10, fontSize:25, width:200, backgroundColor:'blueviolet'}} onClick={handleNext}>Next</button>
        </div>
        <div className='row' style={{marginLeft:10}}>
              <ProductCard items={items}/>
        </div> 
    </>
  )
}

export default SearchList
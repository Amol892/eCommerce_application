import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import Search from './Product/Search'
import ProductCard from './Product/ProductCard';

function Home({user,setPageResp}) {

  const [message, setMessage] = useState('');
  const [error,setError]=useState([]);
  const [items,setItems]=useState([]);
  const [page, setPage] = useState(1);
  const token = sessionStorage.getItem('token')

  async function fetchData(page){

    await axios.get(`http://localhost:8000/allproducts?page=${page}/`,{
      headers:{'Content-Type':'application/json', "Authorization":'Bearer ' + token}
    }).then(response=>{
        console.log(response)
            setMessage(response.data.message)
            setItems(response.data)
        }).catch(error=>{
            console.log(error.response.data)
            setError(error.response.data)
        })

  }
  useEffect(()=>{fetchData(page)},[page])

    // Function to handle "Next" button click
  const handleNext = () => {
    setPage(page + 1);
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>  
        {/* "Previous" and "Next" buttons */}
        <div style={{backgroundColor:'skyblue'}}>
          <button style={{padding:5, borderRadius:10, fontSize:25, width:200,backgroundColor:'yellow'}} onClick={handlePrevious} disabled={page === 1}>
            Previous
          </button>
          <button style={{marginLeft:1180,padding:5, borderRadius:10, fontSize:25, width:200, backgroundColor:'yellow'}} onClick={handleNext}>Next</button>
        </div>
        <div className='row' style={{marginLeft:10}}>
              <ProductCard items={items} user={user} setPageResp={setPageResp}/>
        </div> 
    
    
    </>
  )
}

export default Home
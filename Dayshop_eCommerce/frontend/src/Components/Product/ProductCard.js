import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductCard({items,user,setPageResp}) {

    const token = sessionStorage.getItem('token');
    const [message, setMessage] = useState('');
    const [error,setError]=useState([]);
    const navigate = useNavigate();
    
    console.log(token)

    function saveData(data){

        // Create a new order object with 'user' and 'data' properties
        const orderData = {
                            user: user._id, 
                            products: [
                              {
                                product: data._id, 
                                name : data.Handle,
                                quantity: 1,
                                price: data['Variant Price'],
                                photo: data['Image Src']
                              },
                            ],
                            status: 'Processing',
                            totalAmount: data['Variant Price'] * 1,
                          };
        
        console.log(orderData)
        axios.post('http://localhost:8000/createorder/',orderData,{
          headers:{'Content-Type':'application/json', "Authorization":token}
         }).then(response =>{
                setMessage(response.data)
                setPageResp('cart')
         }).catch(error=>{
            console.log(error.response.data.message)
            setError(error.response.data)
            if(error.response.data.message === 'Unauthorized'){
                  setPageResp('login')
            }
         });
    }
 

  return (
    <>
        
        {   
            
            items.map(obj=>{

                return(
                    
                    <div className='col-lg-4' style={{backgroundColor:'springgreen',borderRadius:20,width:500,marginRight:30,marginTop:10,}}>
                        <center>
                        <img src={obj["Image Src"]} width={400} height={400} alt='not found'></img>
                        <div style={{textAlign:'left',marginLeft:'10px',padding:5}}>
                        <center>
                        <h5 style={{alignItems: 'center',fontSize:25, backgroundColor:'lightcyan',borderRadius:10}}>{obj.Handle}</h5>

                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{width:330,fontSize:25, backgroundColor:'lightcyan',borderRadius:10}}>Price : {obj['Variant Price']}</div>
                            <button onClick={(e)=>{saveData(obj)}} style={{marginLeft:20,borderRadius:10,backgroundColor:'yellow', padding:5, fontWeight:500}}>Add to cart</button>
                        </div>
                        </center>
                        </div>
                        
                        </center>      
                        
                    </div> 
                    
                )
                 
            })
        }
    
    
    
    
    </>
  )
}

export default ProductCard
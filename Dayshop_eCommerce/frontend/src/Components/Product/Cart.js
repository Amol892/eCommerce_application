import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Cart({user}) {

  const navigate = useNavigate(); 
  const [orderObjs, setOrderObjs]=useState([]);
  const userId = user._id;
  const token = sessionStorage.getItem('token')


  async function fetchData(userId){
      await axios.get(`http://localhost:8000/orderlist/${userId}`,{
        headers:{'Content-Type':'application/json', "Authorization":token}
      }).then(response=>{
            console.log('orderlist')
            setOrderObjs(response.data)
      }).catch(error=>{
            console.log(error)
      })
  };

  useEffect(()=>{fetchData(userId)},[orderObjs]);
  console.log(orderObjs)

  // Delete item from Carts
  async function deleteData(userId){
    await axios.delete(`http://localhost:8000/deleteorder/${userId}`,{
      headers:{'Content-Type':'application/json', "Authorization":token}
    }).then(response=>{
      
    }).catch(error=>{
        console.log(error);
    });
    
  }

  return (
    <>
        
        <div className='container' style={{backgroundColor:'darkgrey',borderRadius:10,padding:10}}>
            <h1>Your Cart list</h1><hr/>
            <table className='table table-lightcyan' style={{textAlign:'center'}}>
                      <thead>
                        <tr>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        { orderObjs.map(obj =>{
                          return(
                            <tr>
                            <td><img src={obj.products[0].photo} width={100} height={100} alt='not found'></img></td>
                            <td>{obj.products[0].name}</td>
                            <td>{obj.products[0].quantity}</td>
                            <td>{obj.products[0].price}</td>
                            <td><button className='btn btn-warning col-6' onClick={()=>{deleteData(obj._id)}}>delete</button></td>
                          </tr>
                          );
                        })
                          
                        }
                        
                        
                      </tbody>
                      
                    </table>
        </div>
        
    
    
    </>
  )
}

export default Cart
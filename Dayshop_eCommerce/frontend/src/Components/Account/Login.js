import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function Login({setIsLoggedIn,setUserRole,setUserData}) {

    const {register,handleSubmit}=useForm()
    const navigate = useNavigate()
    const [error, setError] = useState('');

    async function saveData(data){
        await axios.post('http://localhost:8000/login/',data).then(response=>{
            console.log(response.data)
            const token = response.data.token
            //setError(response.data)
            sessionStorage.setItem('token',token)
            sessionStorage.setItem('role',response.data.data.role)   
            //sessionStorage.setItem('email',response.data.data)
            
            setUserRole(sessionStorage.getItem('role'))
            setUserData(response.data.data)
            if(token){
                setIsLoggedIn(true)
            }
            else{
                setIsLoggedIn(false)
            }      
               
            }).catch(error=>{
                console.log(error)
                //setError(error.response.data)
               
            });
        }
  return (
    <>
        <div className='container' style={{backgroundColor:'skyblue',borderRadius:20,padding:40,width:500,height:600,marginTop:20,marginLeft:1000}}>
                <center style={{color:'midnightblue'}}>
                <h1>Welcome to DayShop</h1>
                <h1 style={{color:'black'}}>Login</h1>
                {error && <h3>{error}</h3>}
                </center><hr/>
                

                <form onSubmit={handleSubmit(saveData)}>

                    <label htmlFor='un'>Email id</label>
                    <input type='email' id='un' style={{padding:20}} placeholder='Enter user registered email id' className='form-control' {...register('email')}/><br/><br/>

                    <label htmlFor='pw'>Password</label>
                    <input type='password' id='pw' style={{padding:20}} placeholder='Enter user password' className='form-control' {...register('password')}/><br/><br/>

                    
                    <input type='submit' value='Login me' className='btn btn-success col-4'/><br/><br/>


                </form>
            </div>
    
    </>
  )
}

export default Login
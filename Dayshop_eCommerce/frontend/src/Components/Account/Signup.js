import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


function Signup() {

    const {register,handleSubmit}=useForm();
    const navigate = useNavigate();
    const [message, setMessage] = useState(' ');
    const [error,setError]=useState([]);

    async function saveData(data){
            console.log(data)
            await axios.post('http://localhost:8000/register/',data,
            {headers:{"content-Type":'application/json'}}).then(response=>{
                setMessage(response.data.message)
                
            }).catch(error=>{
                console.log(error.response.data)
                setMessage(error.response.data.error)
                setError(error.response.data)
            })
            
    }
  return (
    <>
        
        
            <div style={{width:600,marginLeft:900,backgroundColor:'mediumpurple',borderRadius:20,marginTop:20,padding:40}}>
                <center style={{color:'yellow'}}>
                <h1>Create your Account</h1><hr/>
                  {message && <h3>{message}</h3>}
                  
                </center>
                <form onSubmit={handleSubmit(saveData)}>

                    <label htmlFor='fn'>First Name</label>
                    <input type='text' id='fn' style={{padding:20}} placeholder='Enter First name' className='form-control' {...register('first_name',{required : 'first_name is required'})}/><br/>
                    <p style={{'color':'red'}}>{error.first_name && error.first_name.message}</p>

                    <label htmlFor='ln'>Last Name</label>
                    <input type='text' id='ln' style={{padding:20}} placeholder='Enter Last name' className='form-control' {...register('last_name',{required : 'last_name is required'})}/><br/>
                    <p style={{'color':'red'}}>{error.last_name && error.last_name.message}</p>

                    <label htmlFor='un'>Username</label>
                    <input type='text' id='un' style={{padding:20}} placeholder='Enter Username' className='form-control' {...register('username',{required : 'Username is required'})}/><br/>
                    <p style={{color:'red'}}>{error.username}</p>

                    <label htmlFor='em'>Email Id</label>
                    <input type='email' id='em' style={{padding:20}} placeholder='Enter Email' className='form-control' {...register('email',{required : 'Email id is required',
                                                                        pattern:{value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,message:'Enter valid email'}})}/><br/>
                    <p style={{color:'red'}}>{error.email}</p>

                    <label htmlFor='ps'>Password</label>
                    <input type='password' id='psd' style={{padding:20}} placeholder='Enter Password' className='form-control' {...register('password',{required : 'password is required'})}/><br/>
                    {error.password && <h4 style={{color:'red'}}>{error.password}</h4>}<br/>
                    
                    <label htmlFor='ro'>User Role</label>&nbsp;&nbsp;
                    <select className='btn btn-dark col-6' {...register('role',{required : 'User Role is required'})}>
                        <option disabled selected>Select User Role</option>
                        <option value='cs'>customer</option>
                        <option value='vd'>vendor</option>
   
                    </select>
                    <p style={{'color':'red'}}>{error.role && error.role.message}</p><br/>
                    <center>
                    <input type='submit' value='Register' style={{padding:10,fontSize:20}} className='btn btn-success col-6'/><br/><br/>
                    </center>
                  
                </form>
            </div>
        
        
    
    </>
  )
}

export default Signup
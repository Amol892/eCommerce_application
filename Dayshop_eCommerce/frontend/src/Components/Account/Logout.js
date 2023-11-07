import React from 'react'
import { NavLink } from 'react-router-dom'

function Logout({setIsLoggedIn,setUserRole,setUserEmail,setPageResp}) {

  async function logoutPage(){
    sessionStorage.clear()
    setIsLoggedIn(false)
    setUserRole(sessionStorage.getItem('role'))
    setUserEmail(sessionStorage.getItem('email'))
    
    }


  return (
    <>
        <div className='container' style={{backgroundColor:'thistle',borderRadius:20,padding:40,width:500}}>
            <form onSubmit={logoutPage}>
                <center>
                    <h1>Logout confirmation !!</h1>
                    <h3>Do you want to logout</h3>
                    <input type='submit' value='Yes' className='btn btn-success col-4'/>
                    <button onClick={()=>{setPageResp(false)}} className='btn btn-warning col-4'>No</button>
                </center>

            </form>
        </div>
    
    </>
  )
}

export default Logout
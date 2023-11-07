import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cartImage from './cart2.png'
import Search from '../Product/Search'
import Signup from '../Account/Signup'
import Login from '../Account/Login'
import Home from '../Home'
import Cart from '../Product/Cart'

function GuestNavbar({setIsLoggedIn,setUserRole,setUserEmail}) {

  const [PageResp,setPageResp] = useState([])

  let Page;
    if(PageResp === 'cart'){
      Page = <Cart/>
    }else if (PageResp === 'signup'){
      Page = <Signup/>
    }else if (PageResp === 'login'){
      Page = <Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} setUserEmail={setUserEmail}/>
    }else{
      Page = <Home/>
    }

  return (
    <>  
        <center>
         <nav className="container Navbar_element" style={{width:1400, padding:10, borderRadius:20,marginTop:10, backgroundColor:'springgreen',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            
            <NavLink style={{marginLeft:0,borderRadius:10,padding:20,color:'darkorchid'}} className="nav-link active custom-link" to="/"><b>DayShop</b></NavLink>
            <NavLink style={{marginLeft:80,borderRadius:10,padding:20,color:'black'}} className="nav-link active custom-link" aria-current="page" onClick={()=>{setPageResp('home')}}><b>Home</b></NavLink>
            
            <NavLink style={{marginLeft:300,borderRadius:10,padding:20,color:'black'}} className="nav-link active custom-link" onClick={()=>{setPageResp('signup')}}><b>Signup</b></NavLink>
            <NavLink style={{marginLeft:20,borderRadius:10,padding:20,color:'black'}} className="nav-link active custom-link" onClick={()=>{setPageResp('login')}}><b>Login</b></NavLink>
            

         </nav>
         </center>

        <div className='row'>
        <div  className='col-4' style={{width:370,height:800,marginLeft:0,backgroundColor:'paleturquoise',borderRadius:20,marginTop:0,padding:40}}>
            {<Search/>}
        </div>
        <div className='col-8' style={{width:1670,marginLeft:0,backgroundColor:'papayawhip',borderRadius:20,marginTop:0,padding:40}}>
                <h1>Welcome to DayShop</h1><hr/>
                {Page}
        </div>
        </div>
        
    </>
  )
}

export default GuestNavbar
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cartImage from './cart2.png'
import Search from '../Product/Search'
import Home from '../Home'
import Cart from '../Product/Cart'
import Logout from '../Account/Logout'

function CustNavbar({setIsLoggedIn,setUserRole,setUserEmail}) {

    const [PageResp,setPageResp] = useState([])
    const userName = sessionStorage.getItem('name')
    let Page;
      if(PageResp === 'cart'){
        Page = <Cart/>
      }else if (PageResp === 'logout'){
        Page = <Logout setIsLoggedIn= {setIsLoggedIn} setUserRole={setUserRole} setUserEmail={setUserEmail} setPageResp={setPageResp}/>
      }else{
        Page = <Home/>
      }

  return (
    <>
    
    <center>
         <nav className="container Navbar_element" style={{width:1400, padding:10, borderRadius:20,marginTop:10, backgroundColor:'springgreen',display: 'flex',  alignItems: 'center'}}>
            
            <NavLink style={{marginLeft:0,borderRadius:10,padding:20,color:'darkorchid'}} className="nav-link active custom-link" to="/"><b>DayShop</b></NavLink>
            <NavLink style={{marginLeft:80,borderRadius:10,padding:20,color:'black'}} className="nav-link active custom-link" aria-current="page" onClick={()=>{setPageResp('home')}}><b>Home</b></NavLink>
            
            <NavLink style={{marginLeft:600,borderRadius:10,padding:20,color:'black'}} className="nav-link active custom-link" onClick={()=>{setPageResp('logout')}}><b>Logout</b></NavLink>
            <button style={{marginLeft:50,borderRadius:10}} onClick={()=>{setPageResp('cart')}}><img src={cartImage} alt='not found' width={50} height={50}></img></button>

         </nav>
         </center>

        <div className='row'>
        <div  className='col-4' style={{width:370,height:800,marginLeft:0,backgroundColor:'paleturquoise',borderRadius:20,marginTop:0,padding:40}}>
            {<Search/>}
        </div>
        <div className='col-8' style={{width:1670,marginLeft:0,backgroundColor:'papayawhip',borderRadius:20,marginTop:0,padding:40}}>
                <h1>Welcome {userName}</h1><hr/>
                {Page}
        </div>
        </div>
        
    </>
  )
}

export default CustNavbar
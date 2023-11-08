import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cartImage from './cart2.png'
import Search from '../Product/Search'
import Home from '../Home'
import Cart from '../Product/Cart'
import Logout from '../Account/Logout'
import axios from 'axios'
import SearchList from '../Product/SearchList'

function CustNavbar({setIsLoggedIn,setUserRole,setUserData,userData}) {

    const [PageResp,setPageResp] = useState([])
    
    const [name,setName] = useState('')
    const user = userData

    
    let Page;
      if(PageResp === 'cart'){
        Page = <Cart user={user}/>
      }else if (PageResp === 'logout'){
        Page = <Logout setIsLoggedIn= {setIsLoggedIn} setUserRole={setUserRole} setUserData={setUserData} setPageResp={setPageResp}/>
      }else if(PageResp === 'search'){
        Page = <SearchList name={name} setPageResp={setPageResp}/>
      }else{
        Page = <Home user={user} setPageResp={setPageResp}/>
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
            {<Search setPageResp={setPageResp} setName = {setName}/>}
        </div>
        <div className='col-8' style={{width:1670,marginLeft:0,backgroundColor:'papayawhip',borderRadius:20,marginTop:0,padding:40}}>
                <h1>Welcome {user.first_name +" "+user.last_name} !!</h1><hr/>
                {Page}
        </div>
        </div>
        
    </>
  )
}

export default CustNavbar
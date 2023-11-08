import logo from './logo.svg';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import GuestNavbar from './Components/NavBar/GuestNavbar';
import Signup from './Components/Account/Signup';
import Login from './Components/Account/Login';
import Home from './Components/Home';
import Cart from './Components/Product/Cart';
import CustNavbar from './Components/NavBar/CustNavbar';
import Logout from './Components/Account/Logout';
import { useState } from 'react';
function App() {

  const [userRole,setUserRole] = useState(sessionStorage.getItem('role'))
  const [userData,setUserData] = useState([])
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  let navbarComponent;

  if (isLoggedIn) {
    if (userRole === 'cs') {
      navbarComponent = <CustNavbar setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} setUserData={setUserData} userData={userData}/>;
    }
      
  }else{
    navbarComponent = <GuestNavbar setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} setUserData={setUserData} userData={userData}/>;
  }

  return (
    <>
      <BrowserRouter>
        {navbarComponent}
        <Routes>
            
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;

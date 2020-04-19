import React  from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
// import logo from './logo.svg';

const Header = () => {
    
  return ( 
       <div className='link'>
    
    {/* <Link to='/'>Storefront</Link>
    <Link to='/cart'>Shopping Cart </Link> */}
    
    <div className='div'>
    <div className = 'loginRegister'>Login/Register</div>
    <div className= 'location'>Find A Location</div>
    </div>
    </div>)
}

export default Header;
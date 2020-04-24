import React  from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import logo from '../../pip-logo.png';

const Header = (props) => {
    
  return ( 
    <div className='header'>
    < img className='header-img' src={logo}/>
      <Link to='Login'>
    <div className='login'>Login/Register</div>
    </Link>
    <Link to='Find_A_Location'>
    <div className='location'>Find A Location</div>
    </Link>
    <div className='home'>
        <Link to='/'>
          <img className='home-img' src= 'https://media.discordapp.net/attachments/697873219692265492/702250665300459630/donut-icon.png?width=672&height=672' width='70px' height='70px'/>
        </Link>

    </div>
    </div>)
}

export default Header;
import React from 'react';
import routes from './routes';
import Header from './Components/Header/Header'

import logo from './logo.svg';
import Storefront from './Components/Storefront/Storefront'
import SocialFollow from './SocialFollow'
import {Dropdown} from './Dropdown'
import './Reset.css';
import './App.css';

function App() {
  return (
    <div className='App'>
  <Header/>


  
    {routes}


    </div>
  );
}

export default App;

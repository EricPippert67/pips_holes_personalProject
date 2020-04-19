import React from 'react';
import routes from './routes';
import Header from './Components/Header/Header'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import logo from './logo.svg';
import Storefront from './Components/Storefront/Storefront'
import SocialFollow from './SocialFollow'
import './Reset.css';
import './App.css';

function App() {
  return (
    <div className='App'>
  <Header/>
  <Storefront/>
  <ShoppingCart/>
  
    {routes}

    </div>
  );
}

export default App;

import React from 'react';
import{Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import ShoppingCart from './Components/ShoppingCart';
import Header from './Components/Header';
import Sidebar from '/Components/Sidebar';

export default(
    <Switch>
        <Route exact path='/' component={Footer}/>
        <Route path='/shoppingCart' component={ShoppingCart}/>
        <Route path='/header' component={Header}/>
        <Route path='/sidebar' component={Sidebar}/>


    </Switch>
)
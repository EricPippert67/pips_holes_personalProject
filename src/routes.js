import React from 'react';
import{Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

export default(
    <Switch>
        {/* <Route exact path='/' component={Footer}/>
        <Route path='/shoppingCart' component={ShoppingCart}/> */}
        <Route path='/header' component={Header}/>
        {/* <Route path='/sidebar' component={Sidebar}/> */}


    </Switch>
)
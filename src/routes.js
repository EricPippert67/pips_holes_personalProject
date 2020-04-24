import React from 'react';
import{Switch, Route} from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import OrderNow from './Components/OrderScreen/OrderNow'
import Admin from './Components/Admin/Admin'
import Storefront from './Components/Storefront/Storefront';
import NeedHelp from './Components/Footer/NeedHelp'
import Login from './Components/Login/Login'

export default(
    <Switch>
        <Route exact path='/' component={Storefront}/>
         <Route path='/shoppingCart' component={ShoppingCart}/> 
            <Route path='/orderNow' component={OrderNow}/>
            <Route path='/needHelp' component={NeedHelp}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/login' component={Login}/>
     


    </Switch>
)
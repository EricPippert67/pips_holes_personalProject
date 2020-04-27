import React from 'react';
import{Switch, Route} from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import OrderNow from './Components/OrderScreen/OrderNow'
import Admin from './Components/Admin/Admin'
import Storefront from './Components/Storefront/Storefront';
import NeedHelp from './Components/Footer/NeedHelp'
import Login from './Components/Login/Login'
import FreeDonut from './Components/Storefront/FreeDonut'
import Fundraising from  './Components/Storefront/Fundraising'
import Merchandise from  './Components/Storefront/Merchandise'
import AboutUs from './Components/Footer/AboutUs'
import ContactUs from './Components/Footer/ContactUs'
import FindLocation from './Components/Storefront/FindLocation'


export default(
    <Switch>
        <Route exact path='/' component={Storefront}/>
         <Route path='/shoppingCart' component={ShoppingCart}/> 
            <Route path='/orderNow' component={OrderNow}/>
            <Route path='/needHelp' component={NeedHelp}/>
            <Route path='/aboutUs' component={AboutUs}/>
            <Route path='/contactUs' component={ContactUs}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/login' component={Login}/>
       <Route path='/orderMerchandise' component={Merchandise} />
       <Route path='/fundraising' component={Fundraising} />
       <Route path='/freeDonut' component={FreeDonut} />
       <Route path='/Find_A_Location' component={FindLocation} />



    </Switch>
)
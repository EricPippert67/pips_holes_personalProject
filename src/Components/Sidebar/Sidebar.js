import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import './Sidebar.scss'

const Sidebar = (props) =>{


    return(
        <div className='Sidebar'>

       <nav className='sidebar-menu' >

         <Link to='/orderNow' style={{textDecoration: 'none'}}>
           <h1 className='sidebar-donuts'>Donuts</h1>
           </Link>
         <Link to='/orderNow'  style={{textDecoration: 'none'}}>
           <h1 className='sidebar-cocoa'>Hot Cocoa</h1>
           </Link>
         <Link to='/orderNow'  style={{textDecoration: 'none'}}>
           <h1 className='sidebar-other' style={{textDecoration: 'none'}}>Other Drinks</h1>
           </Link>
         <Link to='/orderMerch'  style={{textDecoration: 'none'}}>
           <h1 className='sidebar-merchandise'>Merchandise</h1>
           </Link>
           


       </nav>
        

        </div>
    )
}
export default Sidebar;
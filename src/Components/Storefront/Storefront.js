import React, { useState, useEffect } from 'react';
import SWS from 'aws-sdk'
import {Link} from 'react-router-dom'
import Footer from'../Footer/Footer';
import Sidebar from  '../Sidebar/Sidebar';
import{withRouter} from 'react-router-dom';

import './Storefront.css';







function Storefront(props) {
   
    
  

    
        return(
            
            <div className='Storefront-Container'>
               {window.innerWidth <= 800? '': <Sidebar/>}
                
                
           
       

            {/* <p>
                    {product_id}
            </p> */}
            <div className='storefront-main'>
            <div className= 'donut-cont1'>
            <div className='orderDonut'>
            <Link to='/orderNow'>
           
            <img className= 'orderDonutImg' src={'https://i.pinimg.com/736x/76/76/bb/7676bbfa4e9e0fe1234d2642bc407931.jpg'} width={510} height={450} mode='fit'/>
             <button className='orderButton'>Order Now</button> 
             </Link>
                </div>
                {window.innerWidth <= 800? '':(

            <div className='donut-cont1a'>
            <div className='freeDonut'>
                <img className='donutImg'/>
                <Link to='/freeDonut'>
                <button>Learn How</button> 
                </Link>
            </div>
            <div className='randomDonutImg'>
            <img className= 'randomImg' src={'https://farm3.staticflickr.com/2885/12322648285_317a0bf8da_z.jpg'} />
            </div>
            </div>
                ) }
          </div>              
            
           <div className='donut-cont2'>
           {window.innerWidth <= 800? "": (
            <div className='merchImage'>
            <img className= 'merchpic' src={'https://i.pinimg.com/564x/25/25/5a/25255a8a25639abb1efc4c7b8b5541e7.jpg'} />
                <Link to='/orderMerchandise'>
                <button>Order merchandise</button> 
                </Link>
            </div>
           )}
            <div className='fundraising'>
        
                <Link to='/Fundraising'>
            <img className='fundraise-img' src ='https://image.shutterstock.com/image-vector/fundraising-stamp-sticker-seal-round-600w-542480833.jpg' width='400px' height= '400px'/>
                {/* <button>Learn How</button>  */}
                </Link>
            </div>
            </div>   
            <Footer/>
            </div>
            </div> 
                        
            
         
         
        )
}

     
export default withRouter( Storefront);
import React, { useState, useEffect } from 'react';
import SWS from 'aws-sdk'
import {Link} from 'react-router-dom'
import Footer from'../Footer/Footer';
import Sidebar from  '../Sidebar/Sidebar';
import{withRouter} from 'react-router-dom'
import './Storefront.css'






function Storefront(props) {
   
    
  

    
        return(
            
            <div className='Storefront-Container'>
                <Sidebar/>
           
       

            {/* <p>
                    {product_id}
            </p> */}
            <div className='storefront-main'>
            <div className= 'donut-cont1'>
            <div className='orderDonut'>
            <Link to='/orderNow'>
           
             <button className='orderButton'>Order Now</button> 
            <img className= 'orderDonutImg' src={'https://i.pinimg.com/736x/76/76/bb/7676bbfa4e9e0fe1234d2642bc407931.jpg'} width={510} height={450} mode='fit'/>
             </Link>
                </div>
            <div className='donut-cont1a'>
            <div className='freeDonut'>
                Free Donut Saturday
                <Link to='/freeDonut'>
                <button>Learn How</button> 
                </Link>
            </div>
            <div className='randomDonutImg'>
            <img className= 'randomImg' src={'https://farm3.staticflickr.com/2885/12322648285_317a0bf8da_z.jpg'} />
            </div>
            </div>
          </div>              
            
           <div className='donut-cont2'>
            
            <div className='fundraising'>
        
                <Link to='/Fundraising'>
            <img className='fundraise-img' src ='https://image.shutterstock.com/image-vector/fundraising-stamp-sticker-seal-round-600w-542480833.jpg' width='400px' height= '400px'/>
                {/* <button>Learn How</button>  */}
                </Link>
            </div>
            <div className='merchImage'>
                image of merchandise
                <Link to='/orderMerchandise'>
                <button>Order merchandise</button> 
                </Link>
            </div>
            </div>   
            <Footer/>
            </div>
            </div> 
                        
            
         
         
        )
}

     
export default withRouter( Storefront);
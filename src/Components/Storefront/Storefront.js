import React, { useState, useEffect } from 'react';
import SWS from 'aws-sdk'
import {Link} from 'react-router-dom'
import Footer from'../Footer/Footer';
import Sidebar from  '../Sidebar/Sidebar';
import{withRouter} from 'react-router-dom'
import './Storefront.css'






function Storefront(props) {
    // const [product_id, setProduct_id] = useState(0);
    // const [name, setName] = useState(' ');
    // const [image, setImage] = useState('url');
    // const [description, setDescription] = useState(' ');
    // const [price, setPrice] = useState('');
    // const [category, setCategory] = useState(' ')
    






    

    
        return(
            
            <div className='Storefront-Container'>
                <Sidebar/>
           
            <div className= 'Storefront'>
             {/* <input value={product_id} onChange={e => setProduct_id(e.target.value)} placeholder='ProductId' type = 'number'  name= 'productId' />

             <input value={name} placeholder='name' onChange={e => setName(e.target.value)} type = 'text'  name= 'name' />

             <input value={image} onChange={e => setImage(e.target.value)} placeholder='URL' type = 'url'  name= 'Image' />

             <input value={description} onChange={e => setDescription(e.target.value)} placeholder='description' type = 'text'  name= 'description' />

             <input value={price} onChange={e => setPrice(e.target.value)} placeholder='Price' type = 'price'  name= 'price' />

             <input value={category} onChange={e => setCategory(e.target.value)} placeholder='Category' type = 'text'  name= 'Category' /> */}

            {/* <p>
                    {product_id}
            </p> */}
            <div className= 'donut-cont1'>
            <div className='orderDonut'>
            <Link to='/orderNow'>
            <img className= 'orderDonutImg' src={'https://pip-pipsholes.s3-us-west-1.amazonaws.com/assorted-dozen-donuts.jpg'} width={510} height={450} mode='fit'/>
             <button>Order Now</button> 
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
                random donut image
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
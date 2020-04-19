import React, { useState, useEffect } from 'react';
import Footer from'../Footer/Footer';
import Sidebar from  '../Sidebar/Sidebar';
import{withRouter} from 'react-router-dom'
import './Storefront.css'






function Storefront(props) {
    const [product_id, setProduct_id] = useState(0);
    const [name, setName] = useState(' ');
    const [image, setImage] = useState('url');
    const [description, setDescription] = useState(' ');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState(' ')
    



const order = () => {
    props.history.push('/test')

}
const learnHow = () => {
    props.history.push('/test')

}    
const orderMerch = () =>{
    props.history.push('/test')
}    


    useEffect(() => {

    })
    
        return(
            
            <div className='Storefront-Container'>
                <Sidebar/>
           
            <div className= 'Storefront'>
             <input value={product_id} onChange={e => setProduct_id(e.target.value)} placeholder='ProductId' type = 'number'  name= 'productId' />

             <input value={name} placeholder='name' onChange={e => setName(e.target.value)} type = 'text'  name= 'name' />

             <input value={image} onChange={e => setImage(e.target.value)} placeholder='URL' type = 'url'  name= 'Image' />

             <input value={description} onChange={e => setDescription(e.target.value)} placeholder='description' type = 'text'  name= 'description' />

             <input value={price} onChange={e => setPrice(e.target.value)} placeholder='Price' type = 'price'  name= 'price' />

             <input value={category} onChange={e => setCategory(e.target.value)} placeholder='Category' type = 'text'  name= 'Category' />

            <p>
                    {product_id}
            </p>
            <div className= 'donut-cont1'>
            <div className='orderDonut'>
            
             <button onClick={order}>Order Now</button> 
                </div>
                <div className='donut-cont1a'>
            <div className='freeDonut'>
                Free Donut Saturday
                <button onClick={learnHow}>Learn How</button> 
            </div>
            <div className='randomDonutImg'>
                random donut image
            </div>
            </div>
          </div>              
            
           <div className='donut-cont2'>
            <div className='fundraising'>
                Fundraising
                <button onClick={learnHow}>Learn How</button> 
            </div>
            <div className='merchImage'>
                image of merchandise
                <button onClick={orderMerch}>Order merchandise</button> 
            </div>
            </div>   
            <Footer/>
            </div> 
                        
            
         
         </div>
        )
}

     
export default withRouter( Storefront);
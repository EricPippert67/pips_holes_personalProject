import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import  './OrderNow.scss';




const OrderNow = ( props) => {
   const [product_id, setProduct_id] = useState(0);
    const [name, setName] = useState(' ');
    const [image, setImage] = useState('url');
    const [description, setDescription] = useState(' ');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState(' ')

  
    
    
    
    return (
       <div>
          {console.log(props)}
<div className='donutCoca-Toggle'>
         <div>DONUTS </div>
         <div>HOT COCOA & DRINKS</div>
      </div>

      <div> ORDER DONUTS </div>

      <div className='productView'>
         <div>image 1</div>
         <div>image 2</div>
         <div>image 3</div>
         <div>image 4</div>
      </div>


         {/* <div className='orderNow-container'>
              <div className= 'orderNow'>
              <input value={product_id} onChange={e => setProduct_id(e.target.value)} placeholder='ProductId' type = 'number'  name= 'productId' />
              
              <input value={name} placeholder='name' onChange={e => setName(e.target.value)} type = 'text'  name= 'name' />
              
              <input value={image} onChange={e => setImage(e.target.value)} placeholder='URL' type = 'url'  name= 'Image' />
              
              <input value={description} onChange={e => setDescription(e.target.value)} placeholder='description' type = 'text'  name= 'description' />
              
              <input value={price} onChange={e => setPrice(e.target.value)} placeholder='Price' type = 'price'  name= 'price' />
              
              <input value={category} onChange={e => setCategory(e.target.value)} placeholder='Category' type = 'text'  name= 'Category' /> 
              
            </div> */}
    {/* </div> */}
    </div>
   )
}
const mapStateToProps = reduxState =>  reduxState;

export default connect(mapStateToProps)(OrderNow); 

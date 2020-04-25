import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'



function Product (props){

    const addToCart = (id, price) => {
        if(props.username){
            console.log(props.cart_id, 'tested again and again')
           axios.post('/api/cart_item', {cart_id:props.user.cart_id, product_id: id, price})
        }
        else {
            return 'what up'
        }
     }

    return(

        <div className='donut-container'>
        <img src= {props.product.image} alt={'donut pic'} height='200px' width='200px'/>
         <p className='product-name'>   {props.product.name}</p>
         <p className='product-price'> {props.product.price} </p>
         <button className='adds' onClick={()=> addToCart(props.product.product_id, props.product.price)}> Add</button>
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Product)
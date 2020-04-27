import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'



const  Product = (props) =>{
    const [productToggle, setProductToggle] = useState(false);

    useEffect(() => {
        setProductToggle(props.donutToggle)
    },[])
      
    const addToCart = (id, price) => {
        console.log(id, price)
        axios.post('/api/cart_item', {cart_id:7, product_id: id, price})
        if(props.user.user_id){
            console.log(props.cart_id, 'tested again and again')
            axios.post('/api/cart_item', {cart_id:props.user.cart_id, product_id: id, price})
        }
        else {
            return 'what up'
        }
    }
    console.log(props)
    
    return(
        <div className='donut-container'>
        
         
        <img src= {props.product.image} alt={`${props.product.name}`} height='200px' width='200px'/>
         <p className='product-name'>   {props.product.name}</p>
         <p className='product-price'> {props.product.price} </p>
         <button className='adds' onClick={()=> addToCart(props.product.product_id, props.product.price)}> Add</button>
               
         </div>
         
         )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Product)
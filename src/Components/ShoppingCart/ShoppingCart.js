import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './ShoppingCart.scss'

class ShoppingCart extends Component {
   constructor(props){
       super(props);

       this.state = {
        //    cart: []
           cart: [{image:"https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg", name: "Drink", description:" this is a drink", price: 42.99},
           {image:"https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg", name: "donut", description:" this is a donut", price: 409.99},
           {image:"https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg", name: "unDrink", description:" this is not a drink", price: 742.99}]
       }
   }
   
   componentDidMount = () => {
       this.getCart()
       console.log(this.state.cart)
   }

   getCart = () => {
    axios.get(`/api/cart/${this.props.user.cart_id}`)
    .then(res => this.setState({cart: res.data}))
    .catch(err => console.log(err));
   }

   deleteCartItem = (id) => {
       axios.delete(`/api/cart_item/${id}`)
       .then(() => {
           this.getCart()
       })
       .catch(err => console.log(err))
   }
   
    render(){
        let cartItems = this.state.cart.map((e, i) => {
            return (
                <div key={i} className='cart-container'>
                    <img src={e.image} alt={e.name} className='cart-image'/>
                    <div className='cart-info'>
                        <h1 className='s-name'>{e.name} </h1>
                        <p className='s-description'  >{e.description}</p>
                        <p className='s-price'>${e.price}</p>
                    </div>
                    <button className='s-remove' onClick={() => this.deleteCartItem(e.cart_item_id)}>Remove Item</button>
                </div>
            )
        })
        return (
            <div>





            <div className='products'>
                SHOPPING CART
                {cartItems}
            </div>

            <div className='sub-total'>
                SUB-TOTAL
                {/* {subtotal} */}
            </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(ShoppingCart);
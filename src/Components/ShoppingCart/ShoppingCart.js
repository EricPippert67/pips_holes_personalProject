import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './ShoppingCart.scss';
import StripeCheckout from 'react-stripe-checkout';
import stripe from '../../stripe';

class ShoppingCart extends Component {
   constructor(props){
       super(props);

       this.state = {
           cart: [],
           orderTotal: 0
        //    cart: [{image:"https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg", name: "Drink", description:" this is a drink", price: 42.99},
        //    {image:"https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg", name: "donut", description:" this is a donut", price: 409.99},
        //    {image:"https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg", name: "unDrink", description:" this is not a drink", price: 742.99}]
       }
    }
    onToken=async(token) =>{
        token.card=void 0;
        let total = this.state.cart.reduce((acc, curr) => {
            return acc+= +curr.price
            }, 0)
        
        await axios.post('/api/payment' ,{token, amount: total * 100})
        .then(()=> {
            alert('Payment Submitted')
        })
        .catch(err => console.log(err))
     }
   
   componentDidMount = () => {
       this.getCart()
       console.log(this.state.cart)
   }

   getCart = () => {
       console.log(this.props.user.cart_id)
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
        let total = this.state.cart.reduce((acc, curr) => {
            return acc+= +curr.price
            }, 0)
        let cartItems = this.state.cart.map((e, i) => {
            return(


            <div>
                <div key={i} className='cart-container'>
                <img src={e.image} alt={e.name} className='cart-image'/>
                <div className='cart-info'>
                    <h1 className='s-name'>{e.name} </h1>
                    <p className='s-description'  >{e.description}</p>
                    <p className='s-price'>${e.price}</p>
                </div>
                <button className='s-remove' onClick={() => this.deleteCartItem(e.cart_item_id)}>Remove Item</button>
            </div>
            </div>
            )
        
    })
            return (
                <div>
                    {cartItems}

            <h1>{`Total: $${total}`}</h1>
                    <StripeCheckout  
                        label="Proceed to Checkout"
                        token={() =>this.onToken()}
                        stripeKey=  {stripe.publicKey}  
                        amount={total * 100}  
                        //shippingAddress={true}
                        //billingAddress={true}    
                        />
                </div>
            )

       
        // return (
        //     <div>





        //     <div className='products'>
        //         SHOPPING CART
        //         {cartItems}
        //     </div>

        //     <div className='sub-total'>
        //         SUB-TOTAL
        //         {/* {subtotal} */}
        //     </div>
        //     </div>

        // )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(ShoppingCart);
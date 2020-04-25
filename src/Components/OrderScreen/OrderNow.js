import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import  './OrderNow.scss';
import { faProject } from '@fortawesome/free-brands-svg-icons';
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import {withRouter} from 'react-router-dom'
import Product from './Product'





const OrderNow = ( props) => {
   
   const [donutToggle, setDonutToggle] = useState(true);
   const [donutProducts, setDonutProducts] = useState([]);
   const [drinkProducts, setDrinkProducts] = useState([]);
   
   function donutView() {
      setDonutToggle(true)
   }
   function drinkView(){
      setDonutToggle(false)
   }
   function donutToggler(){
      setDonutToggle(!donutToggle)
   }

   

useEffect (() =>{
   axios.get('/api/products/donuts')
   .then(res=> { 
      console.log(res.data)
      setDonutProducts(donuts => [...donuts, ...res.data])
   })
} , [])

useEffect (() =>{
   axios.get('/api/products/donuts')
   .then(res=> { 
      console.log(res.data)
      setDrinkProducts(drinks => [...drinks, ...res.data])
   })
} , [])

return (

   <div className='orderNow-container'>
      <div>
         <h2 onClick= {donutView}>Donuts</h2>
         <h2 onClick={drinkView}>Hot Cocoa & Other Drinks</h2>
      </div>
      <div>
         {donutToggle ? ( 
            <div>
              orderDonuts  
            </div>
         ):( 
            <div>
               orderDrinks
            </div>
         )}
      </div>

      <div>
      {donutToggle ? ( 
            <div className='donut-map-container'>
              {donutProducts.map(donut =>{ 
                 return <Product product ={donut} key={donut.product_id}/>

              })} 
            </div>
         ):( 
            <div>
               orderDrinks
            </div>
         )}
      </div>

   </div>
)}

export default OrderNow;


   // const [product_id, setProduct_id] = useState(0);
   //  const [name, setName] = useState(' ');
   //  const [image, setImage] = useState('url');
   //  const [description, setDescription] = useState(' ');
   //  const [price, setPrice] = useState('');
   //  const [category, setCategory] = useState(' ')
   






   //  const handleDonut = async  (props) => {
   //    await props.donutOrder(name, image, price, category);
   //    props.history.push("/ShoppingCart");

   //    const handleDrinks = async  (props) => {
   //       await props.drinksOrder(name, image, price, category);
   //       props.history.push("/ShoppingCart");

  
    
    
    
//     return (
//        <div>
         
//           {console.log(props)}
// <div className='donutCocoa-Toggle'>







// {/* {!orderToggle 
//             ? (
//                <>
//                   <button onClick={() => handleDonut()}>Donuts</button>
//                   <p>ORDER DONUTS <span onClick={() => setDonutToggle(!donutToggle)}>Donuts</span></p>
//                </>)
//             : (
//                <>
//                   <button onClick={() => handleDrinks()}>Hot Cocoa & Drinks</button>
//                   <p>ORDER DRINKS <span onClick={() => setDrinksToggle(!drinksToggle)}>Drinks</span></p>
//                </>)
//             } */}
//       </div>

//       <div> ORDER DONUTS </div>

//       <div className='productView'>
         
//          <div>image 1</div>
//          <div>image 2</div>
//          <div>image 3</div>
//          <div>image 4</div>
//       </div>


//          {/* <div className='orderNow-container'>
//               <div className= 'orderNow'>
//               <input value={product_id} onChange={e => setProduct_id(e.target.value)} placeholder='ProductId' type = 'number'  name= 'productId' />
              
//               <input value={name} placeholder='name' onChange={e => setName(e.target.value)} type = 'text'  name= 'name' />
              
//               <input value={image} onChange={e => setImage(e.target.value)} placeholder='URL' type = 'url'  name= 'Image' />
              
//               <input value={description} onChange={e => setDescription(e.target.value)} placeholder='description' type = 'text'  name= 'description' />
              
//               <input value={price} onChange={e => setPrice(e.target.value)} placeholder='Price' type = 'price'  name= 'price' />
              
//               <input value={category} onChange={e => setCategory(e.target.value)} placeholder='Category' type = 'text'  name= 'Category' /> 
              
//             </div> */}
//     {/* </div> */}
//     </div>
//    )
// }
// // const mapStateToProps = reduxState =>  reduxState;

// export default connect(OrderNow); 

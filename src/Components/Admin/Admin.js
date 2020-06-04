import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Admin.scss'

class Admin extends Component{

    constructor(){
        super()

        this.state = {
            product_id:'',
            name: '',
            price: 0,
            image: '',
            category:'',
            inventory:[]
        }
       
    }

    componentDidMount(){
       
            axios.get(`/api/products`)
            .then(response => {
                this.setState({
                    inventory: [...response.data]
                })
            })
            }

    
    editProduct(){
        const {product_id,image, name, price, category}= this.state
        console.log(product_id)
        axios.put(`/api/product`, {product_id, image, name,price,category})
            .then(() => {
                this.props.history.push('/')
            })
        }
    
    createProduct(){
        console.log('button pressed')
        axios.post('/api/inventory', {name: this.state.name, price: this.state.price, img: this.state.image})
        .then(response => {
            this.setState({inventory: response.data})})
           
        }
        


    imageHandler(value){
        this.setState({img: value})
    }
    
    nameHandler(value){
        this.setState({name: value})
    }
    
    priceHandler(value){
        this.setState({price: value})
    }
    categoryHandler(value){
        this.setState({category: value})
    }
    selectHandler(id){
        console.log(id)
        axios.get(`/api/product/${id}`)
        .then(res => {
            console.log(res.data)
            const {product_id,image, name, price, category}= res.data[0]
            this.setState({
                product_id,
                image,
                name,
                price,
                category
            })
        }).catch(err=> console.log(err))
    }
    render(){
        console.log(this.state.inventory)
        return(
            <div className='form-container'>

            <select className="product-selector" 
                         onChange={(event) =>this.selectHandler(event.target.value)}>
               <option ></option>
               {this.state.inventory
                     .map(product => <option value={`${product.product_id}`}>  {product.name} </option>)
               
                }
            </select>
                    <img className='form-img' src={this.state.image} />
                <div className='form-input-container'>
                image
                <input 
                     value={this.state.image}
                    onChange={e => this.imageHandler(e.target.value)}
                />
                
                name
                <input 
                    value={this.state.name}
                    onChange={e => this.nameHandler(e.target.value)}
                />
                price
                <input 
                    value={this.state.price}
                    onChange={e => this.priceHandler(e.target.value)}
                />
                 category
                <input 
                    value={this.state.category}
                    onChange={e => this.categoryHandler(e.target.value)}
                />
                </div>
                <div className='form-buttons-container'>
                    <div className='form-cancel-button'>
                    <Link to='/'>
                    <button >Cancel</button>
                    </Link>
                    </div>
                    <div>
                        {this.state.name ? (
                            <button onClick={() => this.editProduct()}>Save Changes</button>
                        ):(
                        <div className='form-add-button'>
                        <Link to='/'>
                        <button onClick={() => this.createProduct()}>Add to Inventory</button>
                        </Link>
                        </div>    
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;
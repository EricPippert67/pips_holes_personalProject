import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Admin.scss'

class Admin extends Component{

    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            img: '',
            category:''
        }
       
    }

    componentDidMount(){
        if (this.props.match.params.id){
            axios.get(`/api/inventory/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    price: response.data.price,
                    img: response.data.img,
                    category:response.data.category
                })
            })
        }
    }

    
    editProduct(id){
        axios.put(`/api/inventory/${id}`, this.state)
            .then(() => {
                this.props.history.push('/')
            })
        }
    
    createProduct(){
        console.log('button pressed')
        axios.post('/api/inventory', {name: this.state.name, price: this.state.price, img: this.state.img})
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
    render(){
        console.log(this.props)
        return(
            <div className='form-container'>
                    <img className='form-img' src={this.state.img} />
                <div className='form-input-container'>
                image
                <input 
                     value={this.state.img}
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
                        {this.props.match.params.id ? (
                            <button onClick={() => this.editProduct(this.props.match.params.id)}>Save Changes</button>
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
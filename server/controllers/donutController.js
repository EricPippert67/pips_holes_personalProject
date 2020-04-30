module.exports= {
    
    getProduct: (req,res) => {
        const {category}= req.params,
         db = req.app.get('db');

        db.product.get_product(category)
        .then(product =>res.status(200).send (product))
        .catch(err => res.status(500).send(err));

    },
    getAllProducts: (req,res)=> {
        const db = req.app.get('db')
        db.product.get_all_products()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err))
    },
    getOneProduct: (req,res)=> {
        const {id}= req.params
        const db = req.app.get('db')
        db.product.get_one_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },
    editProduct: (req,res) =>{
        console.log('edit  Product hits')
        const db = req.app.get('db')
        const {product_id, image,name,price, category} = req.body
        db.product.edit_product(product_id, image,name,price, category)
        .then(editCart => res.status(200).send(editCart))
        .catch(err => res.status(500).send(err))
    },
    
    addToCart: (req,res) => {
        const{cart_id, product_id, price} = req.body,
        db = req.app.get('db');
        console.log(req.body)
          db.cart.add_to_cart(cart_id, product_id, price)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },
    getCart: (req,res) =>{
        const{id} =req.params,
        db = req.app.get('db');

        db.cart.get_cart(id)
        .then(items => res.status(200).send(items))
        .catch(err=> res.status(500).send(err))
    },
    deleteCartItem: (req,res) =>{
        const{id} =req.params,
            db = req.app.get('db');

        db.cart.delete_cart_item(id)
        .then(()=> res.sendStatus(200))
        .catch(err=> res.status(500).send(err));

    },
    completePurchase: async(req, res) =>{ 
        console.log('update product hits')
        const{id} = req.params,
        db = req.app.get('db')
        db.cart.complete_purchase(id);
        let userCart = await db.cart.create_cart(id);
        let sessionUser = {...req.session.user, cart_id: userCart[0].cart_id}
        req.session.user = sessionUser;
        res.status(200).send(req.session.user);
    }
   
}
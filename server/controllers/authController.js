const bcrypt = require('bcryptjs');
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const nodemailer= require('nodemailer');

const {EMAIL, PASSWORD} = process.env

module.exports = {
    register: async(req, res) => {
        const {email, password} = req.body,
        db = req.app.get('db');

        let foundUser = await db.customer.check_customer(email);
        if(foundUser[0]){
            return res.status(400).send('Email is already being used')
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.customer.register_customer(email, hash);

        let customerCart = await db.cart.create_cart(newUser[0].customer_id);
        let sessionCustomer = {...newUser[0], ...customerCart[0]};

        req.session.user = sessionCustomer;
        res.status(201).send(req.session.user);
    },
    login: async(req, res)=>{
        const {email, password} = req.body,
        db = req.app.get('db');

        let foundUser = await db.customer.check_customer(email);
        if(!foundUser[0]){
        return res.status(400).send("User is not found")
}
        const authorized=bcrypt.compareSync(password, foundUser[0].password);
        if(!authorized){
        return res.status(401).send('Password is wrong, try again')

}
        delete foundUser[0].password;
        req.session.user = foundUser[0];
        res.status(202).send(req.session.user);
},
    logout: (req,res) => {
        req.session.destroy();
        res.sendStatus(200);
},
pay:(req,res)=>{
    
    const {token:{id},amount} = req.body;
    console.log(id,amount,stripe)
    stripe.charges.create(
        {
            amount:amount,
            currency:'usd',
            source:id,
            description:'Test Charge'
        },
        (err, charge) => {
            if(err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
                console.log('Successful payment',charge)
                
                return res.status(200).send(charge)
            }
          }
        )},
    email: async (req, res) => {
        const { name, message, email, title, image } = req.body
            
        try {
                   
        let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                user: EMAIL,
                 pass: PASSWORD
                }
            });
            
             
        let info = await transporter.sendMail({
                from: `'${name}' <${email}>`, 
                to: EMAIL,
                subject: title, //This will show on the subject of the email
                    text: message, //for clients with plaintext support only
                    html: `<div>${message}<div> 
                          <img src="cid:unique@nodemailer.com"/>`,
                    attachments: [
                      { //this is the attachment of the document
                        filename: 'license.txt',
                        path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                      },
                      { //this is the embedded image
                        cid: 'unique@nodemailer.com', //same cid value as in the html img src
                        path:image
                      }
                    ]
                  }, (err, res) => {
                    if (err) {
                      console.log('err', err)
                    } else {
                      console.log('res', res)
                      res.status(200).send(info)
                    }
                  })
                } catch (err) {
                  console.log(err)
                  res.sendStatus(500)
                }
              }
        }
  
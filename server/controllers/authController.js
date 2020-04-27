const bcrypt = require('bcryptjs');
const nodemailer= require('nodemailer');
const {SECRET_KEY}=process.env
stripe = require('stripe')(SECRET_KEY);

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
completePayment: (req, res) => {
    const {token, amount} = req.body;

    const charge = stripe.charges.create({
        amount,
        currency: 'usd',
        source: token.id,
        description: 'Test Charge'
    }, function(err, charge){
        if(err){
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
},

        email: async(req, res) => {
            const {email, password}  = req.body;
          // try/catch is used to handle errors without the use of .then and .catch
          try {
              //The transporter is essentially the email that you are using to send
              //emails to your users. This is done using NodeMailers createTransport
              //method, passing it an object containing the information needed to 
              //sign into the email.
              let transporter = nodemailer.createTransport({
                  host: 'smtp.mail.yahoo.com',
                  //host: 'smtp.gmail.com'
                  port: 465,
                  //gmailPORT --> port: 587
                  service: 'yahoo',
                  //service: 'gmail'
                  secure: false,
                  //gmailONLY --> requireTLS: true
                  //You should include your email and password for this email account
                  //to your .env file to keep that information secure
                  auth: {
                      user: EMAIL,
                      pass: PASSWORD
                  }
              });
            
             
              let info = await transporter.sendMail({
                from: `Eric Pippert <${EMAIL}>`,
                to: email,
                subject: 'NodeMailer Test',
                //text is for plain text support if the html cannot load properly
                text: 'This is a NodeMailer Test',
                //html contains the body of your email, and can use html tags to
                //structure it, and inline styling to style it. IF you are using an
                //image, you should pass the src that is provided below, and then
                //give the actual image a value in the attachments array below.
                html: `<div>This is NodeMailer Test</div>
                       <img src="cid:unique@nodemailer.com"/>`,
                //attachments include files attached to the email, as well as sources
                //for your images.
                attachments: [
                    {
                        filename: 'license.txt',
                        path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                    },
                    {
                        cid: 'unique@nodemailer.com',
                        path: 'https://i.kym-cdn.com/photos/images/original/001/516/899/f31.jpg'
                    }
                ]
            }, (err, res) => {
                if(err){
                    console.log(err)
                } else {
                    res.status(200).send(info);
                }
            })
        } catch(err){
            res.status(500).send(err);
        }
    } 
}
require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      authCtrl= require('./controllers/authController'),
      donutCtrl = require('./controllers/donutController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());
app.post('/api/email', authCtrl.email);
app.post('/api/payment', authCtrl.completePayment);

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge:1000 * 60 * 60 * 24 }
}))      
const aws =require('aws-sdk');

const {S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env;

app.get('/api/signs3', (req,res) =>{
    aws.config = {
        region: 'us-west-1',
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
    };
    const s3 = new aws.S3();
    const fileName=req.query['file-name'];
    const fileType=req.query['file-type'];
    const s3Params ={
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'public-read',
    };
    s3.getSignedUrl('putObject', s3Params, (err,data)=> {
        if(err) {
            console.log(err);
            return res.end();
        }
        const returnData ={
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
        };
        return res.send(returnData);
    })

})

massive({
    connectionString: CONNECTION_STRING,
    ssl:{rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
})


app.post('/api/cart-item', donutCtrl.addToCart);
app.get('/api/cart/:id', donutCtrl.getCart);
app.delete('/api/cart-item/:id', donutCtrl.deleteCartItem);
app.get('/api/products/:category', donutCtrl.getProduct)


app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/api/logout', authCtrl.logout);
// app.post('/api/payment', authCtrl.pay)


app.listen(port, () => console.log(`Server running on ${port}`));

var nodejsmailer  = require('nodemailer'); 
var mailOptions ={
    from:'shreyashdivekar.numetry@gmail.com',
    to:'shreyashdivekar831@gmail.com',
    subject:"Sending Email to Shreyash",
    text:"Welcome to NodeMailer, It's Working",
    html: '<h1>Welcome</h1><p>That was easy!</p>',
   
}    
var transporter = nodejsmailer.createTransport({
    service:'gmail',
    auth:{
        user:'yourmail@gmail.com',
        pass:'yourpassword'     
    }
});

transporter.sendMail(mailOptions,function(error,info){
     if(error){
         console.log(error);
     }else{
         console.log('Email Send ' + info.response);
     }
});

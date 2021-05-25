var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var tours = require("./lib/tours.js");
var data = require("./lib/data.js");
var formidable = require('formidable');
var credentials = require('./credentials.js')

// View Engine Implemented
var handlebars = require('express3-handlebars').create(
    {
        defaultLayout:'main',
        helpers:{
            section:function(name, options){
                if(!this._sections){this._sections = {}};
                this._sections[name] = options.fn(this)
                return null;
            }
        }
    }
);
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');



// Port 
var port = 3000;

// Static Route
app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(bodyparser.urlencoded({
    extended: true
  }));
app.use(bodyparser.json())
app.use(require('cookie-parser')(credentials.cookieSecret));

// Home Page
app.get('/',function(req,res){
   res.render('home');
})

// Sign Up
app.get('/signup',(req,res)=>{   
    var signupdata = {
        designation:data.designation
    }
    res.render('signup',signupdata);
})

app.post('/signup',(req,res)=>{
    console.log("body :", req.body);
   
    res.send({
        status:200,
        msg:'Sucessfully register user : '+req.body.username
    })
})
app.get('/api/employee',(req,res)=>{
    console.log("Signed Cookie :", req.signedCookies["signed_monster"]);
    console.log("Unsigned Cookie :", req.cookies);
   if(!req.signedCookies["signed_monster"]){
       res.redirect(302,'/');
       return false;
   }
    res.json({
        signedCookie : req.signedCookies["signed_monster"] ? req.signedCookies["signed_monster"] : 'sorry',
        cookies: req.cookies,
        msg:"this is employee section"
    });
})
app.get('/logout',(req,res)=>{
    res.clearCookie('monster');
    res.clearCookie('signed_monster');
    res.send("User is logout");
})
app.post('/api/login',(req,res)=>{
    res.cookie('monster', 'nom nom');
    res.cookie('signed_monster', 'signed nom nom',{maxAge: 10000,domain:'localhost',httpOnly:true,signed:true});
    res.redirect(302,'/dashboard');
})

app.get('/dashboard',(req,res)=>{
    res.render('dashboard');
})
// About Page
app.get('/about',(req,res)=>{
  res.render('about',{
      layout:'blogs'
  });
})

// Tours
app.get('/tours',(req,res)=>{
    res.render('tours',tours);
})

// Newsletter
app.get('/newsletter',(req,res)=>{
    res.render('newsletter',{
        csrf : '1234654987989248'
    })
})

app.post('/newsletter',(req,res)=>{
   //res.sendStatus(200)
   res.send({
       status:200,
       msg:'Sucessfully send'
   })
})

// Newsletter Process
app.post('/process',(req,res)=>{
    console.log('Form (from querystring):', req.body);
    console.log('CSRF token (from hidden form field): ' + req.body._csrf);
    console.log('Name (from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    res.sendStatus(200);
    res.send({
        msg:"Sucessfully send",
        status:200
    })
})

// Register Contestent
app.get('/register/contest',(req,res)=>{
   res.render("reguser");
})
app.post('/register/contest',(req,res)=>{
    console.log("Post : register/contest");
    
    var form = new formidable.IncomingForm();
    /* let formData = new FormData();
formData.append('username', 'hirakumar');
formData.append('email', 'value2');
f
*/
form.parse(req,function(err, fields, files){
    console.log("form parse");
    if(err) return res.send('some thing error')
    console.log('received fields:');
    console.log(fields);
    console.log('received files:');
    console.log(files);
    res.send({
        msg:'Sucesssfully send form',
        status:200,
        data:{
            fields:fields,
            files:files
        }

    });
})


 })

// Contact Page
app.get('/contact',(req,res)=>{   
    res.send(req.params);
})

app.get('/thanks',(req,res)=>{
    res.render('thanks')
})

app.post('/contact',(req,res)=>{
    
    if(Object.keys(req.body).length>0){
        // Do database stuff        
        console.log("Sucessfully post query");
        res.redirect(301,"/thanks")

    }else{
        res.send("You do not have params");
    }    
})

app.post('/login',(req,res)=>{
    if(!req.header('x-auth-token')){
        return res.status(400).send('No Token')
    }
    if(req.header('x-auth-token') != '123456'){
        return res.status(401).send('Not authorized');
    }
    res.send('Logged in');
})

app.put('/blog/:id',(req,res)=>{
    // Do some database stuff\
    res.json({
        id:req.params.id,
        title:req.body.title
    })
})

app.delete('/blog/:id',(req,res)=>{
    // Do some database stuff\
    res.json({
        msg:"Blog id : " + req.params.id + " has been deleted"
    })
});

app.use(function(req,res){  
    res.status(500);
    res.render('500');
})

app.listen(port || 3000,()=>{
	console.log("Server is started on http://localhost:"+port);
});
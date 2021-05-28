var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var tours = require("./lib/tours.js");
var data = require("./lib/data.js");

var credentials = require('./credentials.js');
var cookieParse = require('cookie-parser');
var query = require('./lib/query.js');
var route = require('./routes/index.js');



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
app.use(cookieParse(credentials.cookieSecret));


// Check Route for admin folder to validate Cookie
var {validateCookie} = require("./lib/cookie");
app.get("/admin/*",validateCookie,(req,res,next)=>{
    console.log("Signed Cookie :",req.signedCookies )
   next();
})

route(app);


// Listening Port
app.listen(port || 3000,()=>{
	console.log("Server is started on http://localhost:"+port);
});
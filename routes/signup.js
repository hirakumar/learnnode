var data = require('../lib/data.js');
module.exports = function(app){
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
}
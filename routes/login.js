var data = require('../lib/data.js');
var query = require('../lib/query.js');

module.exports = function(app){
    // Login 

    app.post('/api/admin/login',(req,res)=>{
        
        if(!query.ifValidUser(req.body)) {
           res.status(200).send({status:false, msg:'User name or password is invalid'});
        }else{
            var token = query.getToken(req.body);
            res.cookie('token',token,{sameSite:true, httpOnly:true, secure:false});
            res.cookie('email',req.body.email,{sameSite:true, httpOnly:true, secure:false});
            res.cookie('country','nepal',{sameSite:true, httpOnly:true, secure:false, signed:true});
            res.cookie('gender','male',{sameSite:true, httpOnly:true, secure:false, signed:true})
            res.status(200).send({status:true, msg:'User name or password validated'})       
        }   
    })
}
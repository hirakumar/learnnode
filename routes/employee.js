var data = require('../lib/data.js');
module.exports = function(app){
  
    app.get('/admin/employee',(req,res)=>{
        console.log("Employee is called");
        res.render("employee",{users:data.users});
    })

    // Employee
    app.get('/api/admin/employee',(req,res)=>{

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
}

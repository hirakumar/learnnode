var query = require("./query.js");

var  validateCookie= function (req,res,next){
    console.log("*** validateing cookie ****")
    const {cookies} = req;
    if('token' in cookies){
        console.log("have token");
        var token =cookies.token;
        query.isTokenValid(token) ? next() : res.render("403");
    }else{
        res.render("403");
    }
}
module.exports ={validateCookie}
var data = require("./data.js");

var ifValidUser = function (obj){
    var obj = data.users.find((item)=>item.email === obj.email && item.password === obj.password);
    return obj ? true : false;
}
var getToken = function(obj){
    var obj = data.users.find((item)=>item.email === obj.email && item.password === obj.password);
    return obj ? obj.token : false;
}
var isTokenValid = function(token){
    var obj = data.users.find((item)=>item.token === token);
    return obj ? true : false;
}

module.exports={ifValidUser,getToken,isTokenValid}
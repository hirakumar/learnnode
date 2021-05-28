

module.exports = function(app){

    app.get('/logout',(req,res)=>{
        res.clearCookie('token');
        res.clearCookie('email');
        res.clearCookie('country');
        res.clearCookie('gender');
        res.send("User is logout");
    })
    }
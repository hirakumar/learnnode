module.exports = function(app){
    app.get('/admin/dashboard',(req,res)=>{
        res.render('dashboard');
    })

}
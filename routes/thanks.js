module.exports = function(app){
    app.get('/thanks',(req,res)=>{
        res.render('thanks')
    })
}
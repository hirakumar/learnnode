module.exports = function(app){
    app.get('/admin/salary',(req,res)=>{
            res.status(200).render('salary')
        })
}
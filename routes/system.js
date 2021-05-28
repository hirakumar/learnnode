module.exports = function(app){
  // 500 Error
app.use(function(req,res,next){  
    res.status(500);
    res.render('500');
})

// 404
app.use((req,res)=>{
    res.status(404).render('404')
})

app.use((req,res)=>{
    res.status(401).render('401')
})
}
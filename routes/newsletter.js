module.exports=function(app){
    // Newsletter
app.get('/admin/newsletter',(req,res)=>{
    res.render('newsletter',{
        csrf : '1234654987989248'
    })
})
app.post('/admin/newsletter',(req,res)=>{
   //res.sendStatus(200)
   res.send({
       status:200,
       msg:'Sucessfully send'
   })
})

// Newsletter Process
app.post('/admin/newsletter/process',(req,res)=>{
    console.log('Form (from querystring):', req.body);
    console.log('CSRF token (from hidden form field): ' + req.body._csrf);
    console.log('Name (from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    res.sendStatus(200);
    res.send({
        msg:"Sucessfully send",
        status:200
    })
})
}


module.exports = function(app){

// About Page
app.get('/about',(req,res)=>{
    res.render('about',{
        layout:'blogs'
    });
  })
}
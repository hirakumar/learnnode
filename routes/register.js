var formidable = require('formidable');
module.exports = function(app){
    // Register Contestent
app.get('/register/contest',(req,res)=>{
    res.render("reguser");
 })
 app.post('/register/contest',(req,res)=>{
     console.log("Post : register/contest");
     
     var form = new formidable.IncomingForm();
 
     form.parse(req,function(err, fields, files){
         console.log("form parse");
         if(err) return res.send('some thing error')
         console.log('received fields:');
         console.log(fields);
         console.log('received files:');
         console.log(files);
         res.send({
             msg:'Sucesssfully send form',
             status:200,
             data:{
                 fields:fields,
                 files:files
             }
 
         });
     })
  })
 
}
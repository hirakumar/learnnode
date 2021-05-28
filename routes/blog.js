var data = require('../lib/data.js');
module.exports = function(app){

    app.put('/blog/:id',(req,res)=>{
        // Do some database stuff\
        res.json({
            id:req.params.id,
            title:req.body.title
        })
    })
    app.delete('/blog/:id',(req,res)=>{
        // Do some database stuff\
        res.json({
            msg:"Blog id : " + req.params.id + " has been deleted"
        })
    });
}


module.exports = function(app){



// Contact Page
app.get('/contact',(req,res)=>{   
    res.send(req.params);
})

app.post('/contact',(req,res)=>{    
    if(Object.keys(req.body).length>0){
        // Do database stuff        
        console.log("Sucessfully post query");
        res.redirect(301,"/thanks")

    }else{
        res.send("You do not have params");
    }    
})

}
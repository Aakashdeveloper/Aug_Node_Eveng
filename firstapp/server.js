var express = require('express');
var app = express();
var port = 9100;

app.get('/',function(req,res){
    res.send("Hi from home")
});



app.listen(port,function(err){
    if(err) throw err;
    console.log('Server is running on port '+port)
})
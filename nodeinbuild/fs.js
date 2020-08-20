var fs = require('fs');

/*
fs.writeFile('mytext.txt','This is from nodeJS',function(err){
    if(err){
        console.log(err)
    }else{
        console.log("File Written")
    }
})
*/
fs.appendFile('mytext.txt','This is from nodeJS app\n',function(err){
    if(err){
        console.log(err)
    }else{
        console.log("File Written")
    }
})
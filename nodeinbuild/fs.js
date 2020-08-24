var fs = require('fs');

/*
fs.writeFile('mytext.txt','This is from nodeJS',function(err){
    if(err){
        console.log(err)
    }else{
        console.log("File Written")
    }
})

fs.appendFile('mytext.txt','This is from nodeJS app\n',function(err){
    if(err){
        console.log(err)
    }else{
        console.log("File Written")
    }
})
fs.readFile('db.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
});


fs.rename('db.json','city.json',function(err){
    if(err) throw err;
    console.log("File Renamed")
})
*/

fs.unlink('mytext.txt',function(err){
    if(err) throw err;
    console.log('File deleted')
})


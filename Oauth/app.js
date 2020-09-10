const express = require('express');
const app = express();
const port = 9600;
const request = require('request');
const superagent = require('superagent');

app.use(express.static(__dirname+'/public'));
app.set('views','./src');
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index')
});

app.get('/user',(req,res) => {
    //const code = req.query.code;
    const {code} = req.query;
    if(!code){
        res.send({
            success:false,
            message:'Error on login'
        })
    }
    superagent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id:'d6f27fd0c6c78b394c28',
            client_secret:'f5a371f141bf706c2db7e3104acf09174ea01848',
            code:code
        })
        .set('Accept','application/json')
        .end((err,result) => {
            if(err) throw err;
            var accesstoken = result.body.access_token
            const option={
                url:'https://api.github.com/user',
                method:'GET',
                headers:{
                    'Accept':'application/json',
                    'Authorization':`token ${accesstoken}`,
                    'User-Agent':'sepapp'
                }
            }
            var output;
            request(option,(err,response,body) => {
                output = body;
                return res.send(output)
            })
        })
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})

//var express = require('express');
//var request = require('request');
import express from 'express';
import request from 'request';
const app = express();
const port = 8800;

var apiurl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

app.use(express.static(__dirname+'/public'));
app.set('views','./src/views');
app.set('view engine','ejs');


app.get('/weather',(req,res) => {
    request(apiurl,(err,response) => {
        if(err) throw err;
        //res.send(response.body)
        const output = JSON.parse(response.body)
        res.render('index',{title:'Weather App',result:output})
    })
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})
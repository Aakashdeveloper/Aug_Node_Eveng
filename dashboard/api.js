const express = require('express');
const app = express();
const mongo = require('mongodb');
const port = 6700;
const  MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongourl = "mongodb://localhost:27017";
let db;
let col_name="nodeapisep";

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//Specify the path of public/static file(css/js)
app.use(express.static(__dirname+'/public'));
//Path for HTML
app.set('views','./src/views');
//View Engine
app.set('view engine','ejs');

app.get('/health',(req,res) => {
    res.status(200).send("Health Ok")
});

app.get('/',(req,res) => {
    db.collection(col_name).find({isActive:true}).toArray((err,result) => {
        if(err) throw err;
        res.render('index',{data:result})
    })
})

app.get('/new',(req,res) => {
    var id= Math.floor(Math.random()*10000)
    res.render('admin',{id:id})
})

app.get('/users',(req,res) => {
    var query = {}
    if(req.query.id){
        query= {_id:parseInt(req.query.id),isActive:true}
    }else if(req.query.city){
        query={city:req.query.city,isActive:true}
    }
    else{
        query={isActive:true}
    }
    
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
});

app.post('/addUser',(req,res) => {
    //console.log(req.body)
    var data = {
        "_id":parseInt(req.body._id),
        "name":req.body.name,
        "city":req.body.city,
        "phone":req.body.phone,
        "isActive":true
    }
    db.collection(col_name).insert(data,(err,result) => {
        if(err){
            throw err;
        }else{
            res.redirect('/')
        }
    })
})

app.put('/updateUser',(req,res) => {

    db.collection(col_name).update(
        {_id:parseInt(req.body._id)},
        {
            $set:{
                name:req.body.name,
                city:req.body.city,
                phone:req.body.phone,
                isActive:true
            }
        },(err,result) => {
            if(err){
                throw err
            }else{
                res.send('Data updated')
            }
        }
    )
});

app.delete('/deleteUser',(req,res) => {
    db.collection(col_name).remove({_id:parseInt(req.body._id)},(err,result) => {
        if(err){
            throw err
        }else{
            res.send('Data Deleted')
        }
    })
});


MongoClient.connect(mongourl,(err,client) => {
    if(err) console.log(err);
    db = client.db("classpractice");
    app.listen(port,(err) => {
        console.log(`Server is running on port ${port}`)
    })
})
var express = require('express');
var hotelRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


function router(abc){
    hotelRouter.route('/')
    .get(function(req,res){
       mongodb.connect(url,function(err,client){
         if(err){
           res.status(501).send("Error while connecting")
         }else{
           const dbo = client.db('nodeaugeveng')
           dbo.collection('hotels').find({}).toArray((err,data) => {
             if(err){
               res.status(402).send("Error while Fetching")
             }else{
              res.render('hotel',{title:'Hotels Page',menu:abc,hoteldata:data})
             }
           })
         }
       })
      
    });

    hotelRouter.route('/details/:id')
        .get(function(req,res){
            //var id = req.params.id
            var {id} = req.params
            mongodb.connect(url,function(err,client){
              if(err){
                res.status(501).send("Error while connecting")
              }else{
                const dbo = client.db('nodeaugeveng')
                dbo.collection('hotels').findOne({_id:id},(err,data) => {
                  if(err){
                    res.status(402).send("Error while Fetching")
                  }else{
                    console.log(data)
                   res.render('hotelDetails',{title:'Hotels Page',menu:abc,hoteldata:data})
                  }
                })
              }
            })
    });

    return hotelRouter;
}


module.exports = router;
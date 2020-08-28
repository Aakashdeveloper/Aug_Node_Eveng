var express = require('express');
var hotelRouter = express.Router();

var hotel=[
    {
        "_id": "1",
        "name": "Roseate House",
        "city_name": "New Delhi",
        "city": "1",
        "locality": "Aerocity, New Delhi",
        "thumb": "https://i.ibb.co/pv8Kf4m/roseate.jpg",
        "cost": 8399,
        "address": "Plot No 10, GMR Hospitality District, Indira Gandhi International Airport, Aerocity",
        "type": [
          {
            "roomtype": "1",
            "name": "Deluxe Room"
          },
          {
            "roomtype": "4",
            "name": "Semi Deluxe Room"
          },
          {
            "roomtype": "2",
            "name": "Premiere Rooms"
          }
        ],
        "tripType": [
          {
            "trip": "1",
            "name": "Business"
          },
          {
            "trip": "2",
            "name": "Holiday"
          }
        ]
      },
      {
        "_id": "2",
        "name": "Pride Plaza Hotel ",
        "city_name": "New Delhi",
        "city": "1",
        "locality": "Aerocity, New Delhi",
        "thumb": "https://i.ibb.co/5nKNcz1/pride.jpg",
        "cost": 4000,
        "address": "Asset 5-A, Hospitality District, Aerocity, IGI Airport , New Delhi",
        "type": [
          {
            "roomtype": "1",
            "name": "Deluxe Room"
          },
          {
            "roomtype": "2",
            "name": "Premiere Rooms"
          },
          {
            "roomtype": "3",
            "name": "Budget Room"
          }
        ],
        "tripType": [
          {
            "trip": "1",
            "name": "Business"
          },
          {
            "trip": "2",
            "name": "Holiday"
          }
        ]
      },
      {
        "_id": "3",
        "name": "The Piccadily",
        "city_name": "New Delhi",
        "city": "1",
        "locality": "Janakpuri, New Delhi",
        "thumb": "https://i.ibb.co/QD1RRBk/piccadily.jpg",
        "cost": 5170,
        "address": "Janakpuri, District Centre Complex, Near Janak Puri West Metro Station",
        "type": [
          {
            "roomtype": "3",
            "name": "Budget Room"
          },
          {
            "roomtype": "4",
            "name": "Semi Deluxe Room"
          },
          {
            "roomtype": "2",
            "name": "Premiere Rooms"
          }
        ],
        "tripType": [
          {
            "trip": "4",
            "name": "Luxury"
          },
          {
            "trip": "3",
            "name": "Travel"
          }
        ]
      },
      {
        "_id": "4",
        "name": "The Ashtan Sarovar Portico",
        "city_name": "New Delhi",
        "city": "1",
        "locality": "Greenpark, New Delhi",
        "thumb": "https://i.ibb.co/TbVsznT/sarovar.jpg",
        "cost": 8399,
        "address": "C2, Green park Extension, Green Park Extn, Behind Gurudwara, Nr Greenpark Metro Station, New Delhi",
        "type": [
          {
            "roomtype": "3",
            "name": "Budget Room"
          },
          {
            "roomtype": "4",
            "name": "Semi Deluxe Room"
          },
          {
            "roomtype": "1",
            "name": "Deluxe Room"
          }
        ],
        "tripType": [
          {
            "trip": "4",
            "name": "Luxury"
          },
          {
            "trip": "3",
            "name": "Travel"
          }
        ]
      }
]

function router(abc){
    hotelRouter.route('/')
    .get(function(req,res){
       // res.send(hotel)
       res.render('hotel',{title:'Hotels Page',menu:abc,hoteldata:hotel})
    });

    hotelRouter.route('/')
        .get(function(req,res){
            res.send('Details for hotels')
    });

    return hotelRouter;
}


module.exports = router;
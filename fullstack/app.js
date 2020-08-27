var express = require('express');
var app = express();
var port = 9000;
var morgan = require('morgan');
var fs = require('fs')
var cors = require('cors');
var chalk = require('chalk');

var menu = [
  {name:'Home',link:'/'},
  {name:'City',link:'/city'},
  {name:'Hotels',link:'/hotel'}
]

var hotelRouter = require('./src/routes/hotelRoutes')(menu);
var cityRouter = require('./src/routes/cityRoutes')(menu);

//Cors> cross origin resource sharing
app.use(cors());
//Morgan for logs
app.use(morgan('tiny',{
    stream: fs.createWriteStream('mylogs.log',{flags:'a'})
}));
//Specify the path of public/static file(css/js)
app.use(express.static(__dirname+'/public'));
//Path for HTML
app.set('views','./src/views');
//View Engine
app.set('view engine','ejs');

app.get('/',function(req,res){
    //res.send("Hi from home")
    res.render('index',{title:"Home Page",menu:menu})
});

app.use('/hotel',hotelRouter);
app.use('/city',cityRouter);

app.listen(port,function(err){
    if(err) throw err;
    console.log(chalk.blue('Server is running on port '+port))
});

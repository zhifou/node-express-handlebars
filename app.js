var express = require('express');
var exphbs  = require('express-handlebars');
var routes = require('./routes');
//var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');

var hbs = exphbs.create({layoutsDir: 'views/layouts/', partialsDir: 'views/partials',
    defaultLayout: 'main'});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/static', express.static('static'));

/*
app.use(express.static(__dirname, '/public'));
app.use(express.static(__dirname + '/files'));
app.use(express.static(__dirname + 'uploads'));
*/

routes(app);

app.listen(4000);

//http.createServer(app).listen(app.get('port'), function(){
//    console.log('Express server listening on port ' + app.get('port'));
//});

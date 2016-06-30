var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	http = require('http'),
    cors = require('cors'),
    sql = require('mssql');


app.use(cors());


app.use(function (req, res, next) {
    //var allowedOrigins = ['*'];
    var origin = req.headers.origin;
    //if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', '*');
    //}
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ Server: "A" }));
});


var config = {
    user: 'sa',
    password: 'TBD@456!123',
    server: '216.55.143.205',//'192.168.0.103\\SQL2014EXP', // You can use 'localhost\\instance' to connect to named instance 
    database: 'NodeCRM'

}

sql.connect(config);
//console.log(config);
var server = app.listen(1783);
console.log('Started');

var router = express.Router();
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));// configure app to use bodyParser() this will let us get the data from a POST
app.use(bodyParser.json({ limit: '100mb' }));

app.use(function (req, res, next) {
    var _send = res.send;
    var sent = false;
    res.send = function (data) {
        if (sent) return;
        _send.bind(res)(data);
        sent = true;
    };
    next();
});


process.on('uncaughtException', function (err) {
    console.log('error', err);
})

app.use(express.static(__dirname));
app.use(require('./Routes/CutomerRoutes'));
app.use(require('./Routes/UserRoutes'));
app.use(require('./Routes/UtilityRoutes'));


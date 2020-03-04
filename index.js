
let configuration = require('./config');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let express = require ('express');
let apiRoutes = require('./api-routes');
let app = express();

var port = process.env.port || 8080;

app.use('/api', apiRoutes);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect(configuration.getConnection(), {useNewUrlParser: true});

var db = mongoose.connection;

app.listen(port, function(){
});
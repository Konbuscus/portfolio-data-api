
//let configuration = require('./config');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let express = require ('express');
let apiRoutes = require('./api-routes');
let app = express();

app.use('/api', apiRoutes);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect(process.env.CONNECTION, {useNewUrlParser: true});
//configuration.getConnection(),
var db = mongoose.connection;

app.listen(process.env.PORT || 8080, function(){
});
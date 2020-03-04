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

mongoose.connect('mongodb+srv://atlasAdmin:@cluster0-gp1rj.gcp.mongodb.net/Portfolio?retryWrites=true&w=majority', {useNewUrlParser: true});

var db = mongoose.connection;

if(!db){
    console.log("error connection db");
}else{
    console.log("db ok");
}

app.listen(port, function(){
    console.log("running on port : " + port);
});
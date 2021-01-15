
//let configuration = require('./config');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let express = require ('express');
let apiRoutes = require('./api-routes');
let cors = require('cors');
let app = express();

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api', apiRoutes);
mongoose.connect('mongodb+srv://atlasAdmin:Jemangedesraviolis0@cluster0-gp1rj.gcp.mongodb.net/Portfolio?retryWrites=true&w=majority', {useNewUrlParser: true,  useUnifiedTopology: true});
//process.env.CONNECTION
//configuration.getConnection(),
var db = mongoose.connection;

app.listen(process.env.PORT || 8080, function(){
});
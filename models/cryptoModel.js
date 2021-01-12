var mongoose = require('mongoose');

var cryptoSchema = mongoose.Schema({

    LastDate:{
        type: String,
        required: true
    },
    Name : {
        type: String,
        required: true
    },
    Price_EUR : {
        type: String,
        required: true
    },
    Price_USD:{
        type: String,
        required : true
    }
});

//Export EducationModel model
var Crypto = module.exports = mongoose.model('cryptohistory', cryptoSchema);

module.exports.get = function (callback, limit){
    Crypto.find(callback).limit(limit);
}

module.exports.createData = function(callback, imit){
    Crypto.createData(callback);
}

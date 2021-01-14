var mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;
var cryptoSchema = mongoose.Schema({

    crypto_last_date:{
        type: Number,
        required: true
    },
    crypto_last_price_eur : {
        type: SchemaTypes.Double,
        required: true
    },
    crypto_last_price_usd : {
        type: Number,
        required: true
    },
    crypto_name:{
        type: String,
        required : true
    }
});

//Export EducationModel model
var Crypto = module.exports = mongoose.model('cryptohistory', cryptoSchema);

module.exports.get = function (callback, limit){
    Crypto.find(callback).limit(limit);
}


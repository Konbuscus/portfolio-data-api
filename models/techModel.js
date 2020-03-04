var mongoose = require('mongoose');

var techSchema = mongoose.Schema({

    Title:{
        type: String,
        required: true
    },
    Description : {
        type: String,
        required: true
    },
    Logo: {
        type:String,
        required: true
    }
});

//Export techs model
var Tech = module.exports = mongoose.model('techs', techSchema);

module.exports.get = function (callback, limit){
    Tech.find(callback).limit(limit);
}
var mongoose = require('mongoose');

var skillSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    percentage : {
        type: Number,
        required: true
    }
});

//Export skill model
var Skill = module.exports = mongoose.model('skills', skillSchema);

module.exports.get = function (callback, limit){
    Skill.find(callback).limit(limit);
}
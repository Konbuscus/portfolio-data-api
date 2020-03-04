var mongoose = require('mongoose');

var workExperienceSchema = mongoose.Schema({

    Where:{
        type: String,
        required: true
    },
    Description : {
        type: String,
        required: true
    },
    As : {
        type: String,
        required: true
    },
    Date : {
        type: String,
        required: true
    },
    StillActive : {
        type: Boolean,
        required: true
    },
    CompanyLogo : {
        type: String,
        required: true
    }
});

//Export workexperience model
var workExperience = module.exports = mongoose.model('workexperiences', workExperienceSchema);

module.exports.get = function (callback, limit){
    workExperience.find(callback).limit(limit);
}
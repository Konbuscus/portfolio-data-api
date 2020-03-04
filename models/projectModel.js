var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({

    Title:{
        type: String,
        required: true
    },
    Body : {
        type: String,
        required: true
    },
    Image : {
        type: String,
        required: true
    },
    DatePublished : {
        type: String,
        required: true
    },
    Published : {
        type: Boolean,
        required: true
    },
    Excerpt : {
        type: String,
    },
});

//Export skill model
var Project = module.exports = mongoose.model('projects', projectSchema);

module.exports.get = function (callback, limit){
    Project.find(callback).limit(limit);
}
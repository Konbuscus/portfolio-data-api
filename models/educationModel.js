var mongoose = require('mongoose');

var educationSchema = mongoose.Schema({

    Graduation:{
        type: String,
        required: true
    },
    Where : {
        type: String,
        required: true
    },
    Date:{
        type: String,
        required: true
    },
    EntityLogo : {
        type: String,
        required: true
    }
});

//Export EducationModel model
var Education = module.exports = mongoose.model('educations', educationSchema);

module.exports.get = function (callback, limit){
    Education.find(callback).limit(limit);
}
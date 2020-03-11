var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({

    Network:{
        type: String,
        required: true
    },
    Value : {
        type: String,
        required: true
    }
});

//Export EducationModel model
var Contact = module.exports = mongoose.model('contacts', contactSchema);

module.exports.get = function (callback, limit){
    Contact.find(callback).limit(limit);
}
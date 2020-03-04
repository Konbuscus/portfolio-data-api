Education = require('../models/educationModel');

exports.index = function(req, res) {
    Education.get(function(err, education)
    {
        if(err){
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "educations retrieved successfully",
            data: education
        });
    });

};

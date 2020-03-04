WorkExperience = require('../models/workexperienceModel');

exports.index = function(req, res) {
    WorkExperience.get(function(err, workExperiences)
    {
        if(err){
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "workExperiences retrieved successfully",
            data: workExperiences
        });
    });

};

Project = require('../models/projectModel');

exports.index = function(req, res) {
    Project.get(function(err, projects)
    {
        if(err){
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "projects retrieved successfully",
            data: projects
        });
    });

};

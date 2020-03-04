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

exports.view = function(req, res){

    Project.findById(req.params._id, function(err, project){
            if (err){
                res.send(err);
            }
            res.json({
                message: 'project details loading..',
                data: project
            });
    });
};

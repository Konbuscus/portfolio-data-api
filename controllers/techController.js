Tech = require('../models/techModel');

//Getting all skills -> Only GET api over here
exports.index = function(req, res) {
    Tech.get(function(err, techs){
        if(err){
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "techs retrieved successfully",
            data: techs
        });
    });
};

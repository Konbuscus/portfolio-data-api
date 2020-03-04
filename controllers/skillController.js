Skill = require('../models/skillModel');

//Getting all skills -> Only GET api over here
exports.index = function(req, res) {
    Skill.get(function(err, skills){
        if(err){
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "skills retrieved successfully",
            data: skills
        });
    });
};

//We can improve our api by adding some insert / update / delete function, might be later though.
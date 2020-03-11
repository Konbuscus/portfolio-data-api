Contact = require('../models/contactModel');

exports.index = function(req, res) {
    Contact.get(function(err, contact)
    {
        if(err){
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "contacts informations retrieved successfully",
            data: contact.sort((a,b) => a.Network.localeCompare(b.Network))
        });
    });

};

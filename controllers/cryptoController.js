Crypto = require('../models/cryptoModel');

exports.index = function(req, res) {
    Contact.get(function(err, crypto)
    {
        if(err){
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "crypto informations retrieved successfully",
            data: crypto.sort((a,b) => a.Network.localeCompare(b.Network))
        });
    });

};

exports.createData = function(req, res){
    console.log(req);
    Crypto.createData(function(err, crypto){

        if(err){
            res.json({
                status:error,
                message:err
            });
        }
        res.json({
            status: "success",
            message: "cryptos posted",
            data: crypto
        });
    });
}

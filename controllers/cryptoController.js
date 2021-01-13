Crypto = require('../models/cryptoModel');

exports.index = function(req, res) {
    Crypto.get(function(err, crypto)
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

exports.postData = function(req, res){
  
    var cryptos = [];
    var data = req.body;
    for(var i = 0; i< data.length;i++)
    {
        var crypto = new Crypto({
            crypto_last_date : data[i].crypto_last_date,
            crypto_last_price_eur : data[i].crypto_last_price_eur,
            crypto_last_price_usd :data[i].crypto_last_price_usd,
            crypto_name :data[i].crypto_name
        });
        cryptos.push(crypto);
    }
    Crypto.insertMany(cryptos).then(function(){
        res.json({
            "success" : "bravo"
        });
    }).catch(function(error){
        res.json({
            "error" : error
        });
    });  

}

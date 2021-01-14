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
        timestamp = (new Date(data[i].crypto_last_date)).getTime() / 1000;
		console.log(timestamp);
        var crypto = new Crypto({

            crypto_last_date : timestamp,
            crypto_last_price_eur : data[i].crypto_last_price_eur,
            crypto_last_price_usd :data[i].crypto_last_price_usd,
            crypto_name :data[i].crypto_name
        });
        cryptos.push(crypto);
    }
    Crypto.insertMany(cryptos, function(error, cryptos) {

        if(error){
            res.json({error: error});
        }
        else
            res.json({
                cryptos : "inserted"
            });
    });

}

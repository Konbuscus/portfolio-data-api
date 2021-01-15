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

        //Building trading json object to send to chart
        var labels = [];
        
        //select all dates and make them unique
        var uniqueTimestamps = crypto.flatMap(a => a.crypto_last_date);
        uniqueTimestamps = [...new Set(uniqueTimestamps)];
        var data = [];

        for(var i = 0; i < uniqueTimestamps.length; i++){

            var tmstp = uniqueTimestamps[i];
            data.push({});
            for(var y = 0; y < crypto.length; y++){
                
                crypto[y].crypto_last_price_eur = parseFloat(crypto[y].crypto_last_price_eur);
                crypto[y].crypto_last_price_usd = parseFloat(crypto[y].crypto_last_price_usd);

                if(crypto[y].crypto_last_date == tmstp){
                    if(data[i][tmstp] == undefined){
                        data[i][tmstp] = [];
                    }
                    data[i][tmstp].push(crypto[y])
                }
            }

        }

        //Regroup cryptos with timestamps
        
        res.json({
            status: "success",
            message: "crypto informations retrieved successfully",
            data: data
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

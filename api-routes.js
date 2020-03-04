let router = require('express').Router();

router.get('/', function(req, res) {
    res.json({status : 'Currently running', message: 'Welcome'})
});

var skillController = require('./controllers/skillController');
var techController = require('./controllers/techController');

router.route('/skills').get(skillController.index);
router.route('/techs').get(techController.index);

module.exports = router;
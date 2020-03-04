let router = require('express').Router();

router.get('/', function(req, res) {
    res.json({status : 'Currently running', message: 'Welcome'})
});

var skillController = require('./controllers/skillController');
var techController = require('./controllers/techController');
var educationController = require('./controllers/educationController');
var workExperienceController = require('./controllers/workExperienceController');

router.route('/skills').get(skillController.index);
router.route('/techs').get(techController.index);
router.route('/educations').get(educationController.index);
router.route('/workexperiences').get(workExperienceController.index);

module.exports = router;
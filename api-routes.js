let router = require('express').Router();

router.get('/', function(req, res) {
    res.json({status : 'Currently running', message: 'Welcome'})
});

var skillController = require('./controllers/skillController');
var techController = require('./controllers/techController');
var educationController = require('./controllers/educationController');
var workExperienceController = require('./controllers/workExperienceController');
var projectController = require('./controllers/projectController');
var contactController = require('./controllers/contactController');
var cryptoController = require('./controllers/cryptoController')

router.route('/skills').get(skillController.index);
router.route('/techs').get(techController.index);
router.route('/educations').get(educationController.index);
router.route('/workexperiences').get(workExperienceController.index);
router.route('/projects').get(projectController.index); 
router.route('/projects/:_id').get(projectController.view);
router.route('/contact').get(contactController.index);
router.route('/crypto').post(cryptoController.postData);
router.route('/getcryptos').get(cryptoController.index);

module.exports = router;
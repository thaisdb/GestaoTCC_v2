let express = require('express');
let router = express.Router();
let db = require('../../db');

//let fullcalendar = require('fullcalendar');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res) {
    console.log(req.body);
});

router.get('/agendamento', function(req, res, next){
	res.render('agendamento');
});

module.exports = router;


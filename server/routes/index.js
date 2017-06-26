let express = require('express');
let router = express.Router();
let db = require('../../db');
//let fullcalendar = require('fullcalendar');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/agendamento', function(req, res, next){
  db.query('SELECT id, nome FROM professor',
    function(err, professor) {
      if (err) res.status(500).send('Erro ao recuperar professores.');
        res.render('agendamento', {professor: professor});
  });
});
module.exports = router;


let express = require('express');
let router = express.Router();
let db = require('../../db');

router.get('/agendamento', function(req, res, next){
  db.query('SELECT id, name' +
           'FROM professor',
    function(err, professor) {
	console.log(err);
      if (err) res.status(500).send('Erro ao recuperar professores.');
        res.render('agendamento', {professor: professor,
              success: req.flash('success'),
              error: req.flash('error')});
    });
  });
module.exports = router;

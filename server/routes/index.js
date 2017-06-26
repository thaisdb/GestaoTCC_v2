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

router.post('/', function(req, res) {
  	let now = new Date;
	let num;
	if(now.getMounth >6)
		num = '2-'+now.getFullYear;
	else num = '1-'+now.getFullYear;

  	var query = 'INSERT INTO defesa (semestre,mat,nomeAluno,tituloTrabalho,dataDefesa,'
	+'local,predio,orientador,coorientador,banca1,banca2) VALUES ('
	num','
	+db.escape(req.body.matricula)+','
	+db.escape(req.body.inputName)+','
	+db.escape(req.body.titulo)+','
	+db.escape(req.body.date)+','
	+db.escape(req.body.horario)+','
	+db.escape(req.body.local)+','
	+db.escape(req.body.predio)+','
	+db.escape(req.body.orientador)+','
	+db.escape(req.body.coorientador)+','
	+db.escape(req.body.banca1)+','
	+db.escape(req.body.banca2)+')';
  	db.query(query, function(err, result) {
    	if (err)  { 
			console.log(err);
		}
    	else { 
			console.log('success');
			res.redirect('/');
		}
  	});
});

module.exports = router;
router.post('/', function(req, res) {
  	var nome = db.escape(req.body.name);
  	var query = 'INSERT INTO person (name,alive,eatenBy) VALUES ('+nome+',1,NULL)';
  	db.query(query, function(err, result) {
    	if (err)  { 
			req.flash('error','Erro ao adicionar a pessoa!');
		}
    	else { 
			req.flash('success', 'Pessoa adicionada com sucesso!');
			res.redirect('/people');
		}
  	});
});

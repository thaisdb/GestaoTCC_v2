let express = require('express');
let router = express.Router();
let db = require('../../db');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/', function (req, res) {
    console.log(req.body);
});

router.get('/agendamento/', function (req, res, next) {
    db.query('SELECT id, nome FROM professor',
            function (err, professor) {
                if (err)
                    res.status(500).send('Erro ao recuperar professores.');
                res.render('agendamento', {professor: professor});
            });
});

router.post('/agendamento/', function (req, res) {
    let now = new Date;
    let num;
    if(req.body.matricula!==null ){
    if (now.getMonth > 6)
        num = '2-' + now.getFullYear();
    else
        num = '1-' + now.getFullYear();
    db.query("INSERT INTO `tccBD`.`defesa` (`semestre`,`mat`,`nomeAluno`,`tituloTrabalho`,`dataDefesa`,`horario`,`local`,`predio`,`orientador`,`coorientador`,`banca1`,`banca2`) VALUES ('"
            + num + "', '"
            + req.body.matricula + "', '"
            + req.body.inputName + "', '"
            + req.body.titulo + "', '"
            + req.body.date + "', '"
            + req.body.horario + "', '"
            + req.body.local + "', '"
            + req.body.predio + "', '"
            + req.body.orientador + "', '"
            + req.body.coorientador + "', '"
            + req.body.banca1 + "', '"
            + req.body.banca2 + "');",
            function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('success');
                    res.redirect('/');
                }
            });
        }
});

router.get('/agenda/', function (req, res, next) {
        db.query('SELECT dataDefesa, horario, nomeAluno, tituloTrabalho , professor.nome\n\
                    AS orientador, coorientador, banca1, banca2, local, predio FROM defesa \n\
                    INNER JOIN professor ON defesa.orientador = professor.id \n\
                    ORDER BY dataDefesa;',
            function (err, defesa) {
                if (err)
                    res.status(500).send('Erro ao recuperar professores.');
                console.log(defesa);
                res.render('agenda', {defesa: defesa});
            });
});

module.exports = router;
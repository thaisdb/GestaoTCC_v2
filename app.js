let express = require('express'),
    app = express();
let fs = require('fs');
let path = require('path');
let db = require('./db');
let routes = require('./server/routes/index');
let agendamento = require('./server/routes/agendamento');

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', 'server/views');


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/agendamento', agendamento);

let server = app.listen(3000, function () {
  console.log('Escutando em: http://localhost:3000');
});

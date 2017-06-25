let express = require('express');
let router = express.Router();
let db = require('../../db');
//let fullcalendar = require('fullcalendar');


/* GET home page. */
router.get('/', function(req, res, next) {
/*var events = [];
	var calendar = fullCalendar({
    selectable: true,
    select: function(start, end, allDay) {
        var title = prompt('New event:');
        if (title) {
            calendar.fullCalendar('renderEvent', {
                title   : title,
                start   : start,
                end     : end,
                allDay  : allDay
            },
            true);
        }
        calendar.fullCalendar('unselect');
    }
});*/
  res.render('index');
});

router.get('/agendamento', function(req, res, next){
	res.render('agendamento');
});

module.exports = router;


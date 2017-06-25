

function navSection() {
    event.target.parentNode.classList.add('active');
    document.getElementById(event.target.dataset.section).classList.add('active');
}

let nav = document.querySelectorAll('#myNavBar li');
for (let li of nav) {
    li.addEventListener('click', navSection);
}
/*let coorientador = document.getElementById('cb-coorientador');
=======

let coorientador = document.getElementById('cb-coorientador');
if(coorientador !== null){
>>>>>>> 2c3ce2ce060518feebf999df4f3872d351c2fae4
coorientador.addEventListener('click', function () {
    if (coorientador.checked) {
        document.getElementById('box-coorientador').classList.remove('hidden');
    } else
        document.getElementById('box-coorientador').classList.add('hidden');
<<<<<<< HEAD
});*/

var calendar = $('#home').fullCalendar({
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
});






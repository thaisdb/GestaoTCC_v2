

function navSection() {
    event.target.parentNode.classList.add('active');
    document.getElementById(event.target.dataset.section).classList.add('active');
}

let nav = document.querySelectorAll('#myNavBar li');
for (let li of nav) {
    li.addEventListener('click', navSection);
}
let coorientador = document.getElementById('cb-coorientador');
if(coorientador !== null){
coorientador.addEventListener('click', function () {
    if (coorientador.checked) {
        document.getElementById('box-coorientador').classList.remove('hidden');
    } else
        document.getElementById('box-coorientador').classList.add('hidden');

});
}
var calendar = $('#calendario').fullCalendar({
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
}});






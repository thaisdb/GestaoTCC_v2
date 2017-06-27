
document.querySelector('li a[href="'+window.location.pathname+'"]').parentNode.classList.add('active');


let coorientador = document.getElementById('cb-coorientador');
if(coorientador !== null){
coorientador.addEventListener('click', function () {
    if (coorientador.checked) {
        document.getElementById('box-coorientador').classList.remove('hidden');
    } else {
        document.getElementById('box-coorientador').classList.add('hidden');
}});
}

function confirmacao(){ 
   if (confirm('Tem certeza que quer enviar este formulário?')){ 
      document.seuformulario.submit() 
   } 
} 

var calendar = $('#calendar').fullCalendar({
    selectable: true,
    select: function(start, end, allDay) {
        let title = prompt('New event:');
        if (title) {
            calendar.fullCalendar('renderEvent', {
                title   : title,
                start   : start,
                end     : end
            }, true);
            console.log('title = ' + title);
            let evento = { title: title,
                            start: start,
                            end: end };
            console.log(evento)
            $.post({
                url: '/',
                method: 'POST',
                data: JSON.stringify (evento) ,
                success : function(data) {
                    console.log('AJAX POSTED');
                },
                contentType: 'application/json',
                dataType: 'json'});

        }
        calendar.fullCalendar('unselect');
}});






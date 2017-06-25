
let fullcalendar = require('fullcalendar');

function navSection() {
    let ativo = document.querySelector('#myNavBar .active');
    console.log(ativo);
    ativo.classList.remove('active');
    ativo = document.getElementById(ativo.firstChild.dataset.section);
    console.log(ativo);
    ativo.classList.add('hidden');
    ativo.classList.remove('active');
    event.target.parentNode.classList.add('active');
    document.getElementById(event.target.dataset.section).classList.add('active');
    document.getElementById(event.target.dataset.section).classList.remove('hidden');
}

let nav = document.querySelectorAll('#myNavBar li');
for (let li of nav) {
    li.addEventListener('click', navSection);
}

let coorientador = document.getElementById('cb-coorientador');
coorientador.addEventListener('click', function () {
    if (coorientador.checked) {
        document.getElementById('box-coorientador').classList.remove('hidden');
    } else
        document.getElementById('box-coorientador').classList.add('hidden');
});







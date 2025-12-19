const mobile = document.getElementById('mobile')
const btnmobile = document.getElementById('btn-mobile')

mobile.addEventListener('click', Animarmenu)

function Animarmenu() {
    mobile.classList.toggle('abrir')
    btnmobile.classList.toggle('ativo')
}



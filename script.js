const esc = document.getElementsByClassName('esc')[0]

const background = document.getElementsByClassName('background')[0]

const btn = document.getElementById('btn1')
    btn.onclick = function () {
        esc.classList.remove('invisible')
        btn.style.display = 'none'
        background.style.display = 'block'
}

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        esc.classList.add('invisible')
        btn.style.display = 'inline'
        background.style.display = 'none'
    }
})
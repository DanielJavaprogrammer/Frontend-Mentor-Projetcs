const daily = document.getElementById('daily')
const weekly =document.getElementById('weekly')
const monthly =document.getElementById('monthly')

function removeAtivo() {
    daily.classList.remove('ativo')
    weekly.classList.remove('ativo')
    monthly.classList.remove('ativo')
}

daily.addEventListener('click', ()=>{
    removeAtivo();
    daily.classList.add('ativo')   
})

weekly.addEventListener('click', ()=>{
    removeAtivo();
    weekly.classList.add('ativo')
})

monthly.addEventListener('click', ()=>{
    removeAtivo();
    monthly.classList.add('ativo')
})

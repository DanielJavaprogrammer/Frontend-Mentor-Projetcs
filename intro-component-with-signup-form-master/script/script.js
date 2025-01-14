const enviar = document.getElementById('btn-submit')

enviar.addEventListener('click', () => {
    const nome = document.getElementById('firstNome')
    const sobrenome = document.getElementById('lastName');
    const email = document.getElementById('email');
    const senha = document.getElementById('password');
    const imgError = document.querySelector('.img_erro');

    const inputFname = nome.value.trim();
    const inputLname = sobrenome.value.trim();
    const emailinput = email.value.trim();
    const inputsenha = senha.value.trim();

    function error(input) {
        input.style.borderColor = 'red'; // Adiciona uma borda vermelha ao campo
    }

    function imgErro(img){
        img.style.display = 'block';
    }


    // Valida os campos
    if (inputFname === '') {
        error(nome);
        imgErro(imgError)
    }

    if(inputLname === '') {
        error(sobrenome); 
        imgErro(imgError)
    }   

    if(emailinput === '') {
        error(email); 
        imgErro(imgError)
    }

    if(inputsenha === '') {
        error(senha); 
        imgErro(imgError)
    }
})  
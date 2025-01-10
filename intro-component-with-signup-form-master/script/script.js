const enviar = document.getElementById('btn-submit')

enviar.addEventListener('click', () => {
    const nome = document.getElementById('firstNome')
    const sobrenome = document.getElementById('lastName');
    const email = document.getElementById('email');
    const senha = document.getElementById('password');

    const inputFname = nome.value.trim();
    const inputLname = sobrenome.value.trim();
    const emailinput = email.value.trim();
    const inputsenha = senha.value.trim();

    function error() {
        input.style.borderColor = 'red'
    }

    function error(input) {
        input.style.borderColor = 'red'; // Adiciona uma borda vermelha ao campo
    }

    // Valida os campos
    if (inputFname === '') {
        error(nome); // Aplica o erro no campo 'nome'
    }
})  
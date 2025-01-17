// Validação de Formulário com Mensagens de Erro e Sucesso
const enviar = document.getElementById('btn-submit');

enviar.addEventListener('click', (event) => {
    const nome = document.getElementById('firstNome');
    const sobrenome = document.getElementById('lastName');
    const email = document.getElementById('email');
    const senha = document.getElementById('password');
    
    const spanErroNome = document.getElementById('text-erro-nome');
    const spanErroSobrenome = document.getElementById('text-erro-sobrenome');
    const spanErroEmail = document.getElementById('text-erro-email');
    const spanErroPassword = document.getElementById('text-erro-password');

    const inputFname = nome.value.trim();
    const inputLname = sobrenome.value.trim();
    const emailinput = email.value.trim();
    const inputsenha = senha.value.trim();

    let formValid = true;

    function showError(input, span, placeholderText = '') {
        input.style.borderColor = 'red';
        span.style.display = 'block';
        if (placeholderText) {
            input.value = '';
            input.placeholder = placeholderText;
        }
    }

    function removeError(input, span, defaultPlaceholder = '') {
        input.style.borderColor = '';
        span.style.display = 'none';
        if (defaultPlaceholder) {
            input.placeholder = defaultPlaceholder;
        }
    }

    if (inputFname === '') {
        showError(nome, spanErroNome);
        formValid = false;
    } else {
        removeError(nome, spanErroNome, 'First Name');
    }

    if (inputLname === '') {
        showError(sobrenome, spanErroSobrenome);
        formValid = false;
    } else {
        removeError(sobrenome, spanErroSobrenome, 'Last Name');
    }

    if (emailinput === '') {
        showError(email, spanErroEmail, 'example@email.com');
        formValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailinput)) {
        showError(email, spanErroEmail, 'example@email.com');
        formValid = false;
    } else {
        removeError(email, spanErroEmail, 'Email Address');
    }

    if (inputsenha === '') {
        showError(senha, spanErroPassword);
        formValid = false;
    } else {
        removeError(senha, spanErroPassword, 'Password');
    }

    if (formValid) {
        alert('Dados cadastrados com sucesso!');
    } else {
        event.preventDefault();
        alert('Por favor, corrija os erros antes de enviar o formulário.');
    }
});

document.querySelectorAll('.input').forEach((input) => {
    input.addEventListener('input', () => {
        const span = input.nextElementSibling;
        input.style.borderColor = '';
        if (span.tagName === 'SPAN') {
            span.style.display = 'none';
        }
    });
});

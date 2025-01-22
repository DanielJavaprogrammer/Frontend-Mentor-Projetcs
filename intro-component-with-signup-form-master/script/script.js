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

    const imgErroNome = document.getElementById('img_erro_nome');
    const imgErroSobrenome = document.getElementById('img_erro_sobrenome');
    const imgErroEmail = document.getElementById('img_erro_email');
    const imgErroPassword = document.getElementById('img_erro_password');
    
    const inputFname = nome.value.trim();
    const inputLname = sobrenome.value.trim();
    const emailinput = email.value.trim();
    const inputsenha = senha.value.trim();

    let formValid = true;

    // Função para mostrar o erro
    function showError(input, span, placeholderText, erroimg) {
        input.style.borderColor = 'red';
        span.style.display = 'block';
        erroimg.style.display = 'block'; // Certifique-se de passar a imagem aqui
        if (placeholderText) {
            input.value = ''; // Apaga o valor do campo
            input.placeholder = placeholderText;
        }
    }

    // Função para remover o erro
    function removeError(input, span, defaultPlaceholder, erroimg) {
        input.style.borderColor = ''; // Reseta a cor da borda
        span.style.display = 'none';   // Esconde o texto de erro
        erroimg.style.display = 'none'; // Esconde a imagem de erro
        if (defaultPlaceholder) {
            input.placeholder = defaultPlaceholder;
        }
    }

    // Verificando o campo nome
    if (inputFname === '') {
        showError(nome, spanErroNome, 'First Name', imgErroNome); // Passa a imagem de erro
        formValid = false;
    } else {
        removeError(nome, spanErroNome, 'First Name', imgErroNome); // Passa a imagem de erro
    }

    // Verificando o campo sobrenome
    if (inputLname === '') {
        showError(sobrenome, spanErroSobrenome, 'Last Name', imgErroSobrenome); // Passa a imagem de erro
        formValid = false;
    } else {
        removeError(sobrenome, spanErroSobrenome, 'Last Name', imgErroSobrenome); // Passa a imagem de erro
    }

    // Verificando o campo email
    if (emailinput === '') {
        showError(email, spanErroEmail, 'example@email.com', imgErroEmail); // Passa a imagem de erro
        formValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailinput)) {
        showError(email, spanErroEmail, 'example@email.com', imgErroEmail); // Passa a imagem de erro
        formValid = false;
    } else {
        removeError(email, spanErroEmail, 'Email Address', imgErroEmail); // Passa a imagem de erro
    }

    // Verificando o campo senha
    if (inputsenha === '') {
        showError(senha, spanErroPassword, 'Password', imgErroPassword); // Passa a imagem de erro
        formValid = false;
    } else {
        removeError(senha, spanErroPassword, 'Password', imgErroPassword); // Passa a imagem de erro
    }

    if (formValid) {
        alert('Dados cadastrados com sucesso!');
    } else {
        event.preventDefault(); // Impede o envio do formulário
        alert('Por favor, corrija os erros antes de enviar o formulário.');
    }
});

// Remover erros ao digitar nos campos
document.querySelectorAll('.input').forEach((input) => {
    input.addEventListener('input', () => {
        const span = input.nextElementSibling;
        const imgErro = input.nextElementSibling.nextElementSibling; // Referência à imagem
        input.style.borderColor = '';
        if (span && span.tagName === 'SPAN') {
            span.style.display = 'none';
        }
        if (imgErro && imgErro.tagName === 'IMG') {
            imgErro.style.display = 'none';
        }
    });
});

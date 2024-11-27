var tempo = new Date();
var tDia = tempo.getDate();
var tMes = tempo.getMonth() + 1; // Adiciona +1 porque os meses começam em 0
var fullAno = tempo.getFullYear();

document.querySelector(".button-submit button").addEventListener("click", function () {
    // Obter os valores dos campos de input
    let diaInput = document.getElementById("dia").value;
    let mesInput = document.getElementById("mes").value;
    let anoInput = document.getElementById("ano").value;

    // Validar se os campos estão preenchidos e são válidos
    if (!diaInput || !mesInput || !anoInput) {
        alert("Erro. Digite um valor válido.");
        return;
    }

    // Converter os valores para números
    let dia = parseInt(diaInput);
    let mes = parseInt(mesInput);
    let ano = parseInt(anoInput);

    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        alert("Erro. Certifique-se de digitar apenas números.");
        return;
    }

    // Selecionar os elementos para exibir o resultado
    let selectAnos = document.querySelector("#anos");
    let selectMes = document.querySelector("#meses");
    let selectDias = document.querySelector("#dias");

    // Cálculos de idade
    let resultAnos = fullAno - ano;
    let resultMes = tMes - mes;
    let resultDias = tDia - dia;

    // Ajustar meses se o mês de nascimento ainda não chegou
    if (resultMes < 0) {
        resultAnos--;
        resultMes += 12;
    }

    // Ajustar dias se o dia de nascimento ainda não chegou no mês atual
    if (resultDias < 0) {
        resultMes--;
        const ultimoDiaDoMesAnterior = new Date(fullAno, tMes - 1, 0).getDate();
        resultDias += ultimoDiaDoMesAnterior;

        // Caso o ajuste dos dias faça o mês ser negativo, ajustar novamente
        if (resultMes < 0) {
            resultAnos--;
            resultMes += 12;
        }
    }

    // Atualizar os elementos com os resultados
    selectAnos.textContent = resultAnos;
    selectMes.textContent = resultMes;
    selectDias.textContent = resultDias;
});

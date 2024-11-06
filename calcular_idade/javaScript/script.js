var tempo = new Date();
var tDia = tempo.getDate();
var tMes = tempo.getMonth() + 1; // Adicionei +1 para corrigir o mês, que começa de 0
var fullAno = tempo.getFullYear();

document.querySelector(".button-submit button").addEventListener("click", function () {
    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let ano = parseInt(document.getElementById("ano").value);

    let selectAnos = document.querySelector("#anos");
    let selectMes = document.querySelector("#meses");
    let selectDias = document.querySelector("#dias");

    let resultAnos = fullAno - ano;
    let resultMes = tMes - mes;
    let resultDias = tDia - dia;


    if (resultMes < 0) {
        resultAnos--;
        resultMes += 12;
    }


    if (resultDias < 0) {
        resultMes--;
        const ultimoDiaDoMesAnterior = new Date(fullAno, tMes - 1, 0).getDate();
        resultDias += ultimoDiaDoMesAnterior;

        if (resultMes < 0) {
            resultAnos--;
            resultMes += 12;
        }
    }

    // Atualizar os elementos com os resultados
    selectAnos.innerHTML = resultAnos;
    selectMes.innerHTML = resultMes;
    selectDias.innerHTML = resultDias;
});

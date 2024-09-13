const btn = document.getElementById('btn')
const pesoemKG = document.getElementById('pesoResposta')
const alturaemCM = document.getElementById('alturaResposta')



btn.addEventListener('click', function () {
    peso = Number(pesoemKG.value)
    altura = Number(alturaemCM.value)
    let resposta = peso / (altura * altura)

    if (peso === "" || isNaN) {
        document.getElementById("respostafinal").innerHTML = (`Erro`)
    }

    document.getElementById("respostafinal").innerHTML = (`${Math.floor(resposta)}`)

    if (resposta > 18.5 && resposta < 24.9) {
        document.getElementById("tabelaresultado").innerHTML = (`Peso normal`)
    }

    else if (resposta > 17 && resposta < 18.4) {
        document.getElementById("tabelaresultado").innerHTML = (`Abaixo do peso`)
    }
    else if (resposta < 16.9) {
        document.getElementById("tabelaresultado").innerHTML = (`Muito abaixo do peso`)
    }
    else if (resposta > 40) {
        document.getElementById("tabelaresultado").innerHTML = (`Obesidade grau III`)
    }
    else if (resposta > 35 && resposta < 40) {
        document.getElementById("tabelaresultado").innerHTML = (`Obesidade grau II`)
    }
    else if (resposta > 30 && resposta < 34.9) {
        document.getElementById("tabelaresultado").innerHTML = (`Obesidade grau I`)
    }
    else if (resposta > 25 && resposta < 29, 9) {
        document.getElementById("tabelaresultado").innerHTML = (`Acima do peso`)
    }
    else {
        document.getElementById("tabelaresultado").innerHTML = (`Erro`)

    }


})


// maior que 40 = obsidade grau |||
// 35 a 40 = obsedidade ||
// 30 a 34,9 = obesidade grau |
// 25 a 29,9 Acima do peso
// 18,5 a 24,9 Peso normal
// 17 a 18,4 Abaixo do peso
// Menor que 16,9 Muito abaixo do peso




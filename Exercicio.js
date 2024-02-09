const btn = document.getElementById('btn')
const pesoemKG = document.getElementById('pesoResposta')
const alturaemCM = document.getElementById('alturaResposta')


btn.addEventListener('click', function(){
     peso = Number(pesoemKG.value)
     altura = Number(alturaemCM.value)
     let resposta = peso / (altura* altura)

    document.getElementById("respostafinal").innerHTML = (`${Math.floor(resposta)}`)

 
})





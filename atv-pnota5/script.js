function verificar(){
    let comida = document.getElementById("comida").value.toLowerCase().trim();
    let resultado = document.getElementById("resultado");


    if(comida === "pão com ovo"){
        resultado.innerText = "É café da manhã"
    } else if (comida === "feijão com arroz"){
        resultado.innerText = "É almoço"
    } else{
        resultado.innerText = "É jantar"
    }
}

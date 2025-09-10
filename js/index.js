const resultado = document.getElementById("resultado");
const calcular = document.getElementById("calcular");

function limpar() {
    expressao = "";
    resultado.textContent = "0";
}

function calcular(valor) {
    if (resultado.innerText === "0") {
        resultado.innerText = valor;
    } else {
        resultado.innerText += valor;
    }
}
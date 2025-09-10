const resultado = document.getElementById("resultado");

function adicionarValor(valor) {
    if (resultado.innerText === "0") {
        resultado.innerText = valor;
    } else {
        resultado.innerText += valor;
    }
}

function limpar() {
    resultado.innerText = "0";
}

function calcular() {
    let expressao = resultado.innerText;
    let total = 0;

    // Detecta o operador
    let operador = "";
    if (expressao.includes("+")) operador = "+";
    else if (expressao.includes("-")) operador = "-";
    else if (expressao.includes("*")) operador = "*";
    else if (expressao.includes("/")) operador = "/";

    switch (true) {
        case operador === "+":
            {
                let [v1, v2] = expressao.split("+");

                // Verifica se v2 tem porcentagem
                if (v2.includes("%")) {
                    v2 = (parseFloat(v2.replace("%", "")) / 100) * parseFloat(v1);
                }
                total = parseFloat(v1) + parseFloat(v2);
                break;
            }

        case operador === "-":
            {
                let [v1, v2] = expressao.split("-");

                // Verifica se v2 tem porcentagem
                if (v2.includes("%")) {
                    v2 = (parseFloat(v2.replace("%", "")) / 100) * parseFloat(v1);
                }
                total = parseFloat(v1) - parseFloat(v2);
                break;
            }

        case operador === "*":
            {
                let [v1, v2] = expressao.split("*");
                total = parseFloat(v1) * parseFloat(v2);
                break;
            }

        case operador === "/":
            {
                let [v1, v2] = expressao.split("/");
                total = parseFloat(v1) / parseFloat(v2);
                break;
            }

        default:
            {
                // Apenas número ou porcentagem sozinho
                if (expressao.includes("%")) {
                    total = parseFloat(expressao.replace("%", "")) / 100;
                } else {
                    total = parseFloat(expressao);
                }
            }
    }

    resultado.innerText = total;
}
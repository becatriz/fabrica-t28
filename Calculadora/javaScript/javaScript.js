let numeroAntesDaOperacao = 0;
let operacao = "";
let numeroDepoisDaOperacao = 0;
let novoNumero = false;


function numeroDigitado(numero) {
    if (novoNumero == false) {
        if (numero != 0 || numero == 0) {
            numeroAntesDaOperacao = document.getElementById('resultado').value += numero;
        } else {
            numeroAntesDaOperacao = document.getElementById('resultado').value = numero;
        }
    } else {
        if (numero != 0 || numero == 0) {
            numeroDepoisDaOperacao = document.getElementById('resultado').value += numero;
        } else {
            numeroDepoisDaOperacao = document.getElementById('resultado').value = numero;
        }
    }

}

function operacaoDigitada(op) {
    operacao = op;
    if (operacao != '=')
        novoNumero = true;
    document.getElementById('resultado').value = "";

}

function realizaOperacao() {

    switch (operacao) {
        case '+':
            document.getElementById('resultado').value = parseFloat(numeroAntesDaOperacao) + parseFloat(numeroDepoisDaOperacao);
            break;
        case '-':
            document.getElementById('resultado').value = parseFloat(numeroAntesDaOperacao) - parseFloat(numeroDepoisDaOperacao);
            break;
        case 'x':
            document.getElementById('resultado').value = parseFloat(numeroAntesDaOperacao) * parseFloat(numeroDepoisDaOperacao);
            break;
        case '/':
            if (numeroDepoisDaOperacao == 0) {
                alert("Divisão por zero não permitida");
                document.getElementById('resultado').value = "";
                return;
            } else {
                document.getElementById('resultado').value = parseFloat(numeroAntesDaOperacao) / parseFloat(numeroDepoisDaOperacao);
                break;
            }
        default:
            alert("Operação não permitida");

    }

}
function reset() {
    location.reload();
}
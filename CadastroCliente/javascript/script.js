let arrayCupomFiscal = []

function salvar() {

    


    let retornoDadosCliente = verificaCamposDadosCliente()
    let retornoDadosPagamento = verificaDadosPagamento()

    let total = document.getElementById("totalCompra").value
    parcelas()
    
    if (retornoDadosCliente === false) {
        return verificaCamposDadosCliente()
    }

    if (retornoDadosCliente !== false && retornoDadosPagamento !== false) {

        let mensagem = "Salvo com Sucesso"
        document.querySelector(".alerta").style.visibility = "visible"
        document.querySelector(".alerta").style.backgroundColor = "lightgreen"
        document.querySelector(".alerta").innerHTML = `<img src=img/tick.svg><p>${mensagem}</p>`
        document.getElementById("cliente").innerHTML = arrayCupomFiscal[0]
        document.getElementById("contato").innerHTML = arrayCupomFiscal[1]
        document.getElementById("pagamento").innerHTML = arrayCupomFiscal[2]
        document.getElementById("parcela").innerHTML = arrayCupomFiscal[3]
        document.getElementById("total").innerHTML = total
        document.querySelector(".cupom-fiscal").style.visibility = "visible"



        setTimeout(() => {
            document.getElementById("nome").value = ""
            document.getElementById("email").value = ""
            document.getElementById("numero").value = ""
            document.getElementById("cpf").value = ""
            document.getElementById("dinheiro").checked = false
            document.getElementById("cartaoCredito").checked = false
            document.getElementById("cartaoDebito").checked = false
            document.getElementById("parcela").selected = false
            document.querySelector(".alerta").style.visibility = "hidden"
            //Limpa campos do cupom fiscal
            document.getElementById("cliente").innerHTML = ""
            document.getElementById("contato").innerHTML = ""
            document.getElementById("pagamento").innerHTML = ""
            document.getElementById("parcela").innerHTML = ""
            document.getElementById("total").innerHTML = ""
            
        }, 3000);
    }


}


function verificaCamposDadosCliente() {

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let numero = document.getElementById("numero").value
    let cpf = document.getElementById("cpf").value
    let mensagem = ""

    arrayCupomFiscal.push(nome, numero)

    if (nome === "" || email === "" || cpf === "" || numero === "") {
        mensagem = "Preencha todos os campos"
        document.querySelector(".alerta").style.visibility = "visible"
        document.querySelector(".alerta").style.backgroundColor = "red"
        document.querySelector(".alerta").innerHTML = `<img src=img/alert.svg><p>${mensagem}</p>`
        setTimeout(() => {
            document.querySelector(".alerta").style.visibility = "hidden"
        }, 2000);
        return false;

    } else {

        let arrayEmail = email.split('')
        let emailCorreto = arrayEmail.filter((element) => element === "@")

        if (emailCorreto[0] !== "@") {
            mensagem = "Email inválido"
            document.querySelector(".alerta").style.visibility = "visible"
            document.querySelector(".alerta").style.backgroundColor = "red"
            document.querySelector(".alerta").innerHTML = `<img src=img/alert.svg><p>${mensagem}</p>`
            setTimeout(() => {
                document.querySelector(".alerta").style.visibility = "hidden"
            }, 2000);
            return false;
        }

        if (cpf.length < 11 || cpf.length > 11) {
            mensagem = "CPF inválido"
            document.querySelector(".alerta").style.visibility = "visible"
            document.querySelector(".alerta").style.backgroundColor = "red"
            document.querySelector(".alerta").innerHTML = `<img src=img/alert.svg><p>${mensagem}</p>`
            setTimeout(() => {
                document.querySelector(".alerta").style.visibility = "hidden"
            }, 2000);
            return false;
        }

    }


}

function verificaDadosPagamento() {
   
    let dinheiro = document.getElementById("dinheiro")
    let cartaoCredito = document.getElementById("cartaoCredito")
    let cartaoDebito = document.getElementById("cartaoDebito")
    let mensagem = ""

    let array = [dinheiro, cartaoCredito, cartaoDebito]


    for (var i = 0; i < array.length; i++) {
        if (array[i].checked) {
            pagamento = array[i].value
        }

    }

    arrayCupomFiscal.push(pagamento)

    if (dinheiro.checked === false
        && cartaoCredito.checked === false
        && cartaoDebito.checked === false) {
        mensagem = "Preencha a forma de Pagamento"
        document.querySelector(".alerta").style.visibility = "visible"
        document.querySelector(".alerta").style.backgroundColor = "red"
        document.querySelector(".alerta").innerHTML = `<img src=img/alert.svg><p>${mensagem}</p>`
        setTimeout(() => {
            document.querySelector(".alerta").style.visibility = "hidden"
        }, 2000);
        return false;

    }
}

function parcelas() {
    let itens = document.getElementById("parcelamento")
    for (var i = 0; i < itens.length; i++) {
        if (itens.options[i].selected === true)
            parcela = itens.options[i].value

    }
    arrayCupomFiscal.push(parcela)

}

function cancelar() {
    location.reload();
}
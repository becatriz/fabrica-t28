let adicionarConvidado = [];

function adicionar() {
  let nomes = document.getElementById("convidado").value
  adicionarConvidado.push(nomes)
  atualizar()

}

function atualizar(){
   let lista = document.getElementById("lista")
   lista.innerHTML = ""
   lista.innerHTML = "<h1>Lista atualizada</h1>"
   for(var i = 0; i < adicionarConvidado.length; i++){
     lista.innerHTML += `<div></h1><span>${adicionarConvidado[i]}</span><div>`
     
   }
  
}
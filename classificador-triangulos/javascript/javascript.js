function resultadoTringulo(lado1, lado2, lado3) {
  lado1 = document.getElementById("lado1").value
  lado2 = document.getElementById("lado2").value
  lado3 = document.getElementById("lado3").value

  if ((lado1 === lado2 && lado3 !== lado1 && lado3 !== lado2) ||
      (lado2 === lado3 && lado1 !== lado2 && lado1 !== lado3) ||
      (lado1 ===lado3 && lado2 !== lado1 && lado2 !== lado3)) {
    document.getElementById("result").value = "Seu triângulo é Isósceles"
  } else if ((lado1 === lado2 && lado1 === lado3 && lado2 === lado3) &&
      lado1 !== "" && lado2 !== "" && lado3 !== ""){
    document.getElementById("result").value = "Seu triângulo é Equilátero"
  }
  else if(lado1 !== lado2 || lado1 !== lado3 || lado2 !== lado3){
    document.getElementById("result").value = "Seu triângulo é Escaleno"
  }else{
    alert("Por favor, digite os três lados do triângulo")
  }
}
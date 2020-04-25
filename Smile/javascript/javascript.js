function falar(id) {
    

    switch (id) {
        case "01":
            document.getElementById("textoRespostaClicar").style.visibility = "visible"
            document.getElementById("textoRespostaClicar").innerHTML = "Olá"

            setTimeout(() => {
                document.getElementById("textoRespostaCortana").style.visibility = "visible"
                document.getElementById("textoRespostaCortana").innerHTML = "Digitando..."
            }, 1000);

            setTimeout(() => {
                document.getElementById("textoRespostaCortana").style.visibility = "visible"
                document.getElementById("carinha").src = "./img/wink.svg"
                document.getElementById("textoRespostaCortana").innerHTML = "E aí!"
            }, 3000);
            break;
        case "02":
            document.getElementById("textoRespostaClicar").style.visibility = "visible"
            document.getElementById("textoRespostaClicar").innerHTML = "Não Te gosto"

            setTimeout(() => {
                document.getElementById("textoRespostaCortana").style.visibility = "visible"
                document.getElementById("textoRespostaCortana").innerHTML = "Digitando..."
            }, 1000);

            setTimeout(() => {
                document.getElementById("textoRespostaCortana").style.visibility = "visible"
                document.getElementById("carinha").src = "./img/sad.svg"
                document.getElementById("textoRespostaCortana").innerHTML = ":'("
            }, 3000);
            break;
        case "03":
            document.getElementById("textoRespostaClicar").style.visibility = "visible"
            document.getElementById("textoRespostaClicar").innerHTML = "Está elegante hoje!"

            setTimeout(() => {
                document.getElementById("textoRespostaCortana").style.visibility = "visible"
                document.getElementById("textoRespostaCortana").innerHTML = "Digitando..."
            }, 1000);

            setTimeout(() => {
                document.getElementById("textoRespostaCortana").style.visibility = "visible"
                document.getElementById("carinha").src = "./img/happy2.svg"
                document.getElementById("textoRespostaCortana").innerHTML = "Você também emh"
            }, 3000);
            break;

    }


}

function reset(){
   location.reload();
}
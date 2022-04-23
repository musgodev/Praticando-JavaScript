// FERRAMENTA 1

function receberPalpite() {

    var palpiteEnviado = parseInt(document.querySelector("#palpiteEnviado").value);
    var numeroSecreto = parseInt(Math.random() * 11);
    var imprimirPalpite = document.querySelector("#imprimirPalpite");

    console.log("palpite enviado: " + palpiteEnviado);
    console.log("numero secreto: " + numeroSecreto);

    if (palpiteEnviado == numeroSecreto) {

        imprimirPalpite.innerHTML = "Parabens! você acertou, o numero secreto era: " + numeroSecreto; 

    } else if (palpiteEnviado < 0 || palpiteEnviado > 10) {

        imprimirPalpite.innerHTML = "O valor deve ser entre 0 e 10.";
    
    } else {
        imprimirPalpite.innerHTML = "Você errou! o numero secreto era: " + numeroSecreto;
    }
}

// FERRAMENTA 2

function receberNotas() {
    
    var nota1 = parseInt(document.getElementById("NotaEnviada").value);
    var nota2 = parseInt(document.getElementById("notaEnviada2").value);
    var imprimirResultado = document.getElementById("imprimirResultado");
    var media = (nota1 + nota2) /2; 
    

    if(media >= 6) {
      imprimirResultado.innerHTML = "Voce foi Aprovado! Sua média foi: " + media;
    } else {
      imprimirResultado.innerHTML = "Voce foi reprovado! Sua média foi: " + media;
    }    
}

// FERRAMENTA 3

function receberTemp() {

    var tempEnviada = parseFloat(document.querySelector("#tempEnviada").value);
    var imprimirCelsius = document.querySelector("#imprimirCelsius");
    var celsius = ( tempEnviada - 32 ) / 1.8;
    console.log("Total em Celsius: " + celsius.toFixed(2));
    imprimirCelsius.innerHTML = "Resultado: " + celsius.toFixed(2) + " Graus Celsius.";

}
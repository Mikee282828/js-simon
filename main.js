let areaGioco = document.getElementById("areaGioco");
let numeriGiocatore = [];
//genera numeri casuali con la funzione randomNum()
let numeriCasuali = randomNum();

//stampa numeri casuali 
for (i = 0; i < 5; i++) {
    areaGioco.innerHTML += `<h2>${numeriCasuali[i]}</h2>`
}

//timer di 3 secondi
setTimeout(function () {
    //nascondi i numeri stampati 
    areaGioco.innerHTML = "";
    //mostra un prompt che chiede 5 numeri 
    setTimeout(function () {
        for (i = 0; i < 5; i++) {
            numeriGiocatore[i] = parseInt(prompt("Inserisci i numeri che hai visto prima"));
        }
    },10);

}, 3000);



function randomNum() {
    let Lista = [];
    for (let i = 0; i < 5; i++) {
        Lista[i] = Math.round(Math.random() * 100);
    }
    return Lista;
}

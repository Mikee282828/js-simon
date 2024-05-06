let areaGioco = document.getElementById("areaGioco");
let numeriGiocatore = [];
let numeriGiusti = [];
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
        let i = 0;
        while (numeriGiocatore.length < 5) {
            let num = parseInt(prompt("Inserisci i numeri che hai visto prima"));
            if(!numeriGiocatore.includes(num)){
                numeriGiocatore[i] = num;
                i++;
            }
        }
    },10);
    
    setTimeout(function(){
        for(let i = 0; i<numeriCasuali.length; i++){
            for(let j = 0; j<numeriCasuali.length; j++){
                if(numeriGiocatore[i] == numeriCasuali[j]){
                    numeriGiusti.push(numeriGiocatore[i]);
                }
            }
        }
    },10);

    setTimeout(function(){
        areaGioco.innerHTML = `<h2>I numeri giusti inseriti dall'utente sono: ${numeriGiusti}</h2>`
    },10);

}, 3000);


function randomNum() {
    let Lista = [];
    let i = 0;
    while (Lista.length < 5) {
        let num = Math.round(Math.random()*1000);
        if(!Lista.includes(num)){
            Lista[i] = num;
            i++;
        }
    }
    return Lista;
}

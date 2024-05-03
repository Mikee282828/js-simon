let areaGioco = document.getElementById("areaGioco");
//genera numeri casuali con la funzione randomNum()
let numeriCasuali = randomNum();

//stampa numeri casuali 
for(i = 0; i<5; i++){
    areaGioco.innerHTML+= `<h2>${numeriCasuali[i]}</h2>`
}

//timer di 3 secondi e nascondi i numeri stampati in pagina
setTimeout(function(){
    areaGioco.innerHTML="";
},3000);

function randomNum(){
    let Lista = [];
    for(let i = 0; i<5; i++){
        Lista[i] = Math.round(Math.random()*100);
    }
    return Lista;
}

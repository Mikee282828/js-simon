let areaGioco = document.getElementById("areaGioco");
let numeriCasuali = randomNum();

for(i = 0; i<5; i++){
    areaGioco.innerHTML+= `<span>${numeriCasuali[i]}</span><br>`
}


function randomNum(){
    let Lista = [];
    for(let i = 0; i<5; i++){
        Lista[i] = Math.round(Math.random()*100);
    }
    return Lista;
}

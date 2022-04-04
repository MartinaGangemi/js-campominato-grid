document.getElementById("play").addEventListener("click", play)

function play (){
let difficoltà = document.getElementById("difficoltà").value
console.log(difficoltà)
return difficoltà
}

// creo la funzione per generare le celle

function generateGrid(selector, tagName, className){
    const cellsElement = document.getElementById(selector)

    // ciclo per generare tot quadratini
    for (let i = 1; i<=100; i ++){
    const divTag = document.createElement(tagName)
    divTag.classList.add(className)
    cellsElement.append(divTag)
    } 
}

generateGrid("cells", "div", "cell")
// creo delle condizioni in base alla difficoltà

if (difficoltà === "facile"){

    

}
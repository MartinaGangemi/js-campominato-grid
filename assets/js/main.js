document.getElementById("play").addEventListener("click", play);

function play (){
document.getElementById("cells").innerHTML = '';
let difficoltà = document.getElementById("difficoltà").value;
console.log(difficoltà)

// creo delle condizioni in base alla difficoltà

if (difficoltà == "facile"){
    createGrid("cells", "div", "cell_easy_mode", 100)
    
    } else if(difficoltà == "media"){
        createGrid("cells", "div", "cell_normal_mode", 81)
    } else {
        createGrid("cells", "div", "cell_hard_mode", 49)
    }

    
}


// creo la funzione per generare le celle
function createGrid(selector, tagName, className, numeroDifficoltà){
    const cellsElement = document.getElementById(selector)

    // ciclo per generare tot quadratini
    for (let i = 1; i<=numeroDifficoltà; i++){
    const divTag = document.createElement(tagName)
    divTag.classList.add(className)
    cellsElement.append(divTag)
    } 
}

//funzione quando clicco sul quadrato si colora


function coloredcells (lenght){
    const allCells= document.querySelectorAll(".cells")
        for(let index=0; index < length ; index++){
            const singlecell = cells[index]
            console.log(singlecell)
                
        }

}



document.getElementById("play").addEventListener("click", play);

function play (){
document.getElementById("cells").innerHTML = '';
let difficoltà = document.getElementById("difficoltà").value;
console.log(difficoltà)

// creo delle condizioni in base alla difficoltà

if (difficoltà == "facile"){
    createGrid("cells", "div", "cell_easy_mode", 100)
    coloredcells(100, "active")
    
    } else if(difficoltà == "media"){
        createGrid("cells", "div", "cell_normal_mode", 81)
        coloredcells(81, "active")
    } else {
        createGrid("cells", "div", "cell_hard_mode", 49)
        coloredcells(49, "active")
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


function coloredcells (lunghezza, active_class){
    const allCells= document.querySelectorAll(".cells")
        for(let index=0; index < lunghezza ; index++){
            const singlecell = cells[index]
            singlecell.addEventListener("click", function() {
                this.classList.add(active_class)
            })
        }
}



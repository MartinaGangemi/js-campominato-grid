document.getElementById("play").addEventListener("click", play);

function play (){
document.getElementById("cells").innerHTML = '';
let difficoltà = document.getElementById("difficoltà").value;
console.log(difficoltà)

// creo delle condizioni in base alla difficoltà

if (difficoltà == "facile"){
    createGrid("cells", "div", "cell", "cell_easy_mode", 100)
    coloredSquare (".cell", "active")
     
    } else if(difficoltà == "media"){
        createGrid("cells", "div", "cell", "cell_normal_mode", 81)
        coloredSquare (".cell", "active")
        
    } else {
        createGrid("cells", "div", "cell", "cell_hard_mode", 49)
        coloredSquare (".cell", "active")
    }
}


// creo la funzione per generare le celle
function createGrid(selector, tagName, className, secondClassName, numeroDifficoltà){
    const cellsElement = document.getElementById(selector)

    // ciclo per generare tot quadratini
    for (let i = 1; i<=numeroDifficoltà; i++){
    const divTag = document.createElement(tagName)
    divTag.classList.add(className)
    divTag.classList.add(secondClassName)
    cellsElement.append(divTag)
    divTag.append(i)
    } 
}
  

//funzione quando clicco sul quadrato si colora
function coloredSquare (selector, activeClass){
const arrayCell = document.querySelectorAll(selector);
for (let i = 0; i<arrayCell.length;i++){
    const quadratino = arrayCell[i]
    quadratino.addEventListener("click", function (){
        console.log(this, i)
        this.classList.add(activeClass)
     })
    }     
}




    
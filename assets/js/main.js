document.getElementById("play").addEventListener("click", play);

function play (){
let difficoltà = document.getElementById("difficoltà").value;
console.log(difficoltà)

// creo delle condizioni in base alla difficoltà

if (difficoltà == "facile"){
    gridEasyMode("cells", "div", "cell_easy_mode")
    
    } else if(difficoltà == "media"){
        gridNormalMode("cells", "div", "cell_normal_mode")
    }

}



// creo la funzione per generare le celle easy mode

function gridEasyMode(selector, tagName, className){
    const cellsElement = document.getElementById(selector)

    // ciclo per generare tot quadratini
    for (let i = 1; i<=100; i ++){
    const divTag = document.createElement(tagName)
    divTag.classList.add(className)
    cellsElement.append(divTag)
    } 
}

// creo la funzione per generare le celle normal mode

function gridNormalMode(selector, tagName, className){
    const cellsElement = document.getElementById(selector)

    // ciclo per generare tot quadratini
    for (let i = 1; i<=81; i ++){
    const divTag = document.createElement(tagName)
    divTag.classList.add(className)
    cellsElement.append(divTag)
    } 
}


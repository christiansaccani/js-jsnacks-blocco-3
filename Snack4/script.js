let userChoice = prompt("Inserisci una stringa; ");
let solutionEl = document.querySelector("div");

function split (userChoice) {
    let split = userChoice.split(""); //questo comando mi restituisce un array
    return split;
}

function join (userChoice) {
    let join = userChoice.join(""); //questo comando mi restituisce un array
    return join;
}

let splittedString = split (userChoice);

const sortedWords = join (splittedString.sort()); 

solutionEl.innerText = sortedWords;
let userChoice = prompt("Inserisci una stringa; ");
let solutionEl = document.querySelector("div");

function split (userChoice) {
    let split = userChoice.split(" "); //questo comando mi restituisce un array, inserendo lo spazio tra le " ", la separazione avviene ad ogni spazio
    return split;
}

function join (userChoice) {
    let join = userChoice.join(" "); //questo comando mi restituisce un array
    return join;
}

function caps (splittedString) {
    for (i = 0; i < splittedString.length; i++) {
        splittedString[i] = splittedString[i][0].toUpperCase() + splittedString[i].substr(1);
    }
    return splittedString;
}

let splittedString = split (userChoice);
console.log(splittedString);
let capsString = join (caps (splittedString));
solutionEl.innerText = capsString;
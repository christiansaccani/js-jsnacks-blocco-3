let minUser;
let maxUser;
let numbersArray = []
let solutionEl = document.querySelector("div");

numbersArray.length = Number(prompt("Quanti valori ha la stringa: "));

for (let i=0; i<numbersArray.length; i++) {
    numbersArray[i] = i;
}

do {
    minUser = Number(prompt("Inserisci la posizione minima: "));
    maxUser = Number(prompt("Inserisci la posizione massima: "));
} while (minUser > maxUser || maxUser > numbersArray.length);

function cutArray(min, max) {
    let cuttedArray = [];
    for (let i=min; i<=max; i++) {
        cuttedArray[i - min] = i;
    }
    return cuttedArray;
}

solutionEl.innerText = cutArray (minUser, maxUser);
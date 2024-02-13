const startBtn = document.querySelector("#start-btn");
let solutionEl = document.querySelector("#solution")

function reverse (userChoice) {
    // let split = userChoice.split(""); //questo comando mi restituisce un array
    // let reverse = split.reverse();
    // let join = reverse.join(""); //questo comando unisce l'array in una stringa
    // return join;

    const result = userChoice.split("").reverse().join("");
    return result;
}

startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let userChoice = document.querySelector("#userInput").value;
    solutionEl.innerHTML = reverse (userChoice);
});
const startBtn = document.querySelector("#start-btn");
let solution = document.querySelector("#solution")

function reverse (userChoice) {
    let split = userChoice.split(""); //questo comando mi restituisce un array
    let reverse = split.reverse();
    let join = reverse.join(""); //questo comando unisce l'array in una stringa
    solution.innerHTML = join;
}

startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let userChoice = document.querySelector("#userInput").value;
    reverse (userChoice);
});
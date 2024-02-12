let firstArray = ["a", "b", "c", "d", "e"];
let secondArray = [1, 2, 3, 4, 5];
let solutionEl = document.querySelector("div");

function fusion (first, second) {

    let finalArray = [];

    for (let i=0; i<first.length; i++) {

        finalArray.push(first [i]);
        finalArray.push(second [i]);

    }

    return finalArray;
}

solutionEl.innerText = fusion (firstArray, secondArray);

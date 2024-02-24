/*
    Written by Dakota McMann
    Used video from BroCode to follow
    02/23/2024

    Counter that can be increased or decreased
    Won't decrease passed 0
    Reset sends it back to 0
 */
console.log("Newby Here")

const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
const countLabel = document.getElementById("countLabel");
let count = 0;

decreaseButton.onclick = function(){
    if(!count == 0){
        count--;
        countLabel.textContent = count;
    }
}

increaseButton.onclick = function(){
    count++;
    countLabel.textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}


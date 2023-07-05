let counterDisplayElement = document.querySelector('#counter');
let counterMinus = document.querySelector('#minus');
let counterPlus = document.querySelector('#plus');
let countStart = 0;
let counterPause = document.querySelector('#pause');

function updateCounter() {
    countStart++
    countLike = 0
    counterDisplayElement.textContent = countStart;
}
let startCounter = setInterval(updateCounter, 1000);

updateCount()

counterMinus.addEventListener("click", () => {
    countStart--;
    updateCount()
})
counterPlus.addEventListener("click", () => {
    countStart++;
    updateCount()
})
counterPause.addEventListener("click", () => {
    pauseInterval()
    updateCount()
})
function pauseInterval() {
    clearInterval(startCounter)
}


function updateCount() {
    counterDisplayElement.innerHTML = countStart;
}

let redLiker = document.querySelector('#heart');
let countLike = 0

function handleLike() {
    redLiker.addEventListener("click", () => {
        countLike++
        let resultSentence = `${countStart} has ${countLike} likes`
        let likeComments = document.querySelector('.likes')
        let newitem = document.createElement('li')
        newitem.innerText = resultSentence
        likeComments.appendChild(newitem)
    })
}
handleLike()

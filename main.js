let readyTimer = setInterval(fireTime, 1000)

const fireButton = document.querySelector(//Andy's button\\)
if (difficulty === 1){
    readyTimer = setInterval(fireTime, 1700)
}
if (difficulty === 2){
    readyTimer = setInterval(fireTime, 1000)
}
if (difficulty === 3){
    readyTimer = setInterval(fireTime, 400)
}



function fireTime(playerClick){
    if(playerClick === null){
        return "loss"
    }


}


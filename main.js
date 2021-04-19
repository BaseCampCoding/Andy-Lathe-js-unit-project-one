const fireButton = document.getElementById("myBtn");
let testThing = document.getElementById("testp"); // This was tested in another file


function goodFire(){
    testThing.innerHTML = "You did it in time"; // Will change when victory conditional is set
    clearTimeout(notQuickEnough);
    done = true;
}

function badFire(){
    testThing.innerHTML = "Better luck next time"; // Will change with loss conditional
}

let done = false;
let notQuickEnough = setTimeout(badFire, 2000)

fireButton.addEventListener("click", goodFire)



if (difficulty === 1){
    readyTimer = setInterval(badFire, 1700)
}
if (difficulty === 2){
    readyTimer = setInterval(badFire, 1000)
}
if (difficulty === 3){
    readyTimer = setInterval(badFire, 400)
}

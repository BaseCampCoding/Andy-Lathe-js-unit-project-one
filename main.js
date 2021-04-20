const fireButton = document.getElementById("myBtn");
const readyButton = document.getElementById("myBtn2");
let testThing = document.getElementById("testp");
let scoreCard = document.getElementById("score");

readyButton.addEventListener("click", fireTime)

function fireTime(){
    let score = 0
    testThing.innerHTML = "Hold"
    function goodFire(){
        testThing.innerHTML = "You did it in time"; // Will change when victory conditional is set
        clearTimeout(notQuickEnough);
        score++
        scoreCard.innerHTML = `Score: ${score}`
        done = true;
    }

    function drawTime(){
        testThing.innerHTML = "DRAW"
    }

    function badFire(){
        testThing.innerHTML = "Better luck next time. Click ready to play again."; // Will change with loss conditional
    }

    let done = false;
    let drawNow = setTimeout(drawTime, 1000)
    let notQuickEnough = setTimeout(badFire, 2000)

    fireButton.addEventListener("click", goodFire)

    if (difficulty === 1){
        notQuickEnough = setTimeout(badFire, 2000)
        drawNow = setTimeout(drawTime, 1000)

    }
    if (difficulty === 2){
        notQuickEnough = setTimeout(badFire, 1000)
        drawNow = setTimeout(drawTime, 600)
    }
    if (difficulty === 3){
        notQuickEnough = setTimeout(badFire, 400)
        drawNow = setTimeout(drawTime, 300)
    }
}
const fireButton = document.getElementById("myBtn");
const readyButton = document.getElementById("myBtn2");
let testThing = document.getElementById("testp");
let scoreCard = document.getElementById("score");

readyButton.addEventListener("click", fireTime)

function fireTime(){
    let done = false
    let score = 0
    testThing.innerHTML = "Hold"
    
    function drawTime(){
        testThing.innerHTML = "DRAW"
    }
    
    function badFire(){
        testThing.innerHTML = "Better luck next time. Click ready to play again.";
        done = true
    }

    if(! badFire || done === false){
    function goodFire(){
        testThing.innerHTML = "You did it in time";
        clearTimeout(notQuickEnough);
        score += 1
        console.log(score)
    }}
    
    let drawNow = setTimeout(drawTime, 1000);
    let notQuickEnough = setTimeout(badFire, 2000);
    scoreCard.innerHTML = `Score: ${score}`;

    
    // if (difficulty === 1){
    //     notQuickEnough = setTimeout(badFire, 2000)
    //     drawNow = setTimeout(drawTime, 1000)
        
    // }
    // if (difficulty === 2){
    //     notQuickEnough = setTimeout(badFire, 1000)
    //     drawNow = setTimeout(drawTime, 600)
    // }
    // if (difficulty === 3){
    //     notQuickEnough = setTimeout(badFire, 400)
    //     drawNow = setTimeout(drawTime, 300)
    // }
    fireButton.addEventListener("click", goodFire)
}
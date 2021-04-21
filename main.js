const fireButton = document.getElementById("myBtn");
const readyButton = document.getElementById("myBtn2");
const testThing = document.getElementById("testp");
const scoreCard = document.getElementById("thescore");
const resetScore = document.getElementById("resetButton");

readyButton.addEventListener("click", fireTime)
let scoreAmount = 0

resetScore.addEventListener("click", resetTheScore)
    function resetTheScore(){
        scoreAmount = 0
        scoreCard.innerHTML = `Score: ${scoreAmount}`
    }
function fireTime(){
    let done = false
    testThing.innerHTML = "Hold"

    function drawTime(){
        testThing.innerHTML = "DRAW"
    }
    const drawTimeout = setTimeout(drawTime, 1000); // After 1 second, users will have 1 second to draw

    function badFire(){
        testThing.innerHTML = "Better luck next time. Click ready to play again.";
        done = true
    }

    var tooLate = setTimeout(badFire, 2000); // If user doesn't hit in time, bad message, with done preventing scoring

    if(done === false){
        function goodFire(){
            clearTimeout(tooLate);
            clearTimeout(drawTimeout)
            if(testThing.innerHTML === "DRAW"){
                testThing.innerHTML = "You did it! Click ready to play again";
                scoreCard.innerHTML = `Score: ${scoreAmount}`
            }
            else if(testThing.innerHTML === "Hold"){
                testThing.innerHTML = "Too soon! Click ready to try again"
            }
            
        }
        fireButton.addEventListener("click", goodFire)
    }
    
    if(goodFire){
        scoreAmount += 1
    }

    

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
}
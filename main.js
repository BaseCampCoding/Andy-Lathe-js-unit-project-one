const fireButton = document.getElementById("myBtn");
const readyButton = document.getElementById("myBtn2");
const testThing = document.getElementById("testp");
const scoreCard = document.getElementById("thescore");

readyButton.addEventListener("click", fireTime)
let scoreAmount = 0

function fireTime(){
    let done = false
    testThing.innerHTML = "Hold"
    
    function drawTime(){
        testThing.innerHTML = "DRAW"
    }
    setTimeout(drawTime, 1000); // After 1 second, users will have 1 second to draw

    function badFire(){
        testThing.innerHTML = "Better luck next time. Click ready to play again.";
        done = true
    }

    const tooLate = setTimeout(badFire, 2000); // If user doesn't hit in time, bad message, with done preventing scoring

    if(done === false){
        function goodFire(){
            testThing.innerHTML = "You did it! Click ready to play again";
            clearTimeout(tooLate);
            scoreAmount ++
            scoreCard.textContent = `Score: ${scoreAmount}`
        }
        fireButton.addEventListener("click", goodFire)
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
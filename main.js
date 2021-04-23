const fireButton = document.getElementById("myBtn");
const readyButton = document.getElementById("myBtn2");
const testThing = document.getElementById("testp");
const scoreCard = document.getElementById("thescore");
const resetScore = document.getElementById("resetButton");
const BigIron = document.getElementById("bigIron");
const bangSound = document.getElementById("bang");
const death = document.getElementById("death")
const muteMusic = document.getElementById("mute");



//Game logic ------------
function playMusic(){
    BigIron.play()
}

muteMusic.addEventListener("click", pauseMusic)
function pauseMusic(){
    BigIron.pause()
}

readyButton.addEventListener("click", fireTime)
let scoreAmount = 0
resetScore.addEventListener("click", resetTheScore)
    function resetTheScore(){
        scoreAmount = 0
        scoreCard.innerHTML = `Score: ${scoreAmount}`
    }
function fireTime(){
    let imageC = document.getElementById('cowboy1')
    imageC.src = "cowboyStart1.png"
    let imageS = document.getElementById('samurai1')
    imageS.src = "samuraiStart.png"
    let done = false
    testThing.innerHTML = "Hold"
    function drawTime(){
        testThing.innerHTML = "DRAW"
    }
    const drawTimeout = setTimeout(drawTime, 1000); // After 1 second, users will have 1 second to draw
    function badFire(){
        testThing.innerHTML = "Better luck next time. Click ready to play again.";
        clearTimeout(drawTimeout)
        imageS.src = "samuraiSwing.png"
        death.play()
        done = true
    }
    let tooLate = setTimeout(badFire, 2000); // If user doesn't hit in time, bad message
    if(done === false){
        function goodFire(){
            imageC.src = "cowboyShoot1.png"
            bangSound.play()
            clearTimeout(tooLate);
            clearTimeout(drawTimeout);
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
}

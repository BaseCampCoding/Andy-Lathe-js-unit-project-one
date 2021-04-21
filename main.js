const fireButton = document.getElementById("myBtn");
const readyButton = document.getElementById("myBtn2");
const testThing = document.getElementById("testp");
const scoreCard = document.getElementById("thescore");
const resetScore = document.getElementById("resetButton");

   
let myGamePiece;
let myGamePiece2

function startGame() {
myGamePiece = new component(200, 120, "cowboyStart1.png", 10, 120, "image");
myGamePiece2 = new component(200,120, "samuraiStart.png",230,120,"image2")
myGameArea.start();
}

let myGameArea = {
canvas : document.createElement("canvas"),
start : function() {
    this.canvas.width = 475;
    this.canvas.height = 270;
    this.canvas.style.left = "410px";
    this.canvas.style.top = "100px";
    this.canvas.style.position = "sticky";
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
    },
clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
},
stop : function() {
    clearInterval(this.interval);
}
}

function component(width, height, color, x, y, type) {
this.type = type;
if (type == "image" || type == "image2") {
    this.image = new Image();
    this.image.src = color;
}
this.width = width;
this.height = height;
this.speedX = 0;
this.speedY = 0;    
this.x = x;
this.y = y;    
this.update = function() {
    ctx = myGameArea.context;
    if (type == "image" || type == "image2") {
        ctx.drawImage(this.image, 
            this.x, 
            this.y,
            this.width, this.height);
    } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;        
}
}

function updateGameArea() {
myGameArea.clear();
myGamePiece2.newPos();
myGamePiece2.update();
myGamePiece.newPos();
myGamePiece.update();
}


var sampleVar;

function sampleFunction(){    
sampleVar = setTimeout(alertFunc, 2000);
}

function alertFunc(){    
myGamePiece2.image.src = "samuraiStrike.png"

}


function move(dir) {
//    myGamePiece2.image.src = "samuraiStrike.png"
if (dir == "up") {
myGamePiece.image.src = "cowboyShoot1.png";
}

 

}

function clearmove(dir) {
if(dir == "ready"){
myGamePiece.image.src = "cowboyStart1.png";
myGamePiece2.image.src = "samuraiStart.png"
}



}

//Game logic ------------

readyButton.addEventListener("click", fireTime)
let scoreAmount = 0
let difficulty = 1

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
        clearTimeout(drawTimeout)
        done = true
    }

    let tooLate = setTimeout(badFire, 2000); // If user doesn't hit in time, bad message
    if(done === false){
        function goodFire(){
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
    

    //Difficulty possibilities

    // if (difficulty === 1){
    //     tooLate = setTimeout(badFire, 2000)
    //     drawTimeout = setTimeout(drawTime, 1000)
        
    // }
    // else if (difficulty === 2){
    //     tooLate = setTimeout(badFire, 1000)
    //     drawTimeout = setTimeout(drawTime, 600)
    // }
    // else if (difficulty === 3){
    //     tooLate = setTimeout(badFire, 400)
    //     drawTimeout = setTimeout(drawTime, 300)
    // }
}
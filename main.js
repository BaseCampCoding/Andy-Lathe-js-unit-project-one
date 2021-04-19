
        var space_key = 32
        var player1 = new Object();
        player1.element = "player1";
        player1.x = 400;
        player1.y = 260;

        // var controller = new Object();

        // // function createSprite(element,x,y,w,h){
        // //     var result = new Object()
        // //     result.element  = element
        // //     result.x = x
        // //     result.y = y
        // //     result.w = w
        // //     result.h = h
        // //     return result
        // // }

        // function toggleKey(keyCode, isPressed){
        //     if(keyCode == space_key){
        //         controller.space_key = isPressed
        //     }
        // }


        function setPostion(sprite){
            var e = document.getElementById(sprite.element);
            e.style.left = sprite.x + "px";
            e.style.top = sprite.y + "px";
        }
//         document.onkeydown = function(event){
//             toggleKey(event.keyCode, true)
//         }
 
//         document.onkeyup = function(event){
//             toggleKey(event.keyCode, false)
// }



    
        setPostion(player1);
    
    

        // var bullet  = createSprite("bullet", 0, -120,2,2)














































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


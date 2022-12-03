


// Detecting button click

for (let index = 0; index < 7; index++) {
    
    document.querySelectorAll("button")[index].addEventListener("click", handleClick );

}

function handleClick(){
    var btnInnerHtml=this.innerHTML;
    makeSound(btnInnerHtml);
    btnAnimation(btnInnerHtml);
}


// Detecting key press

document.addEventListener("keypress", function (e) {
    makeSound(e.key);
    btnAnimation(e.key);

})





//Makes sound according to click and key pressed
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
         
    
        default:
            console.log(btnInnerHtml);
            break;
    
}
}



function btnAnimation(currentKey) {
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    }, 100)
}
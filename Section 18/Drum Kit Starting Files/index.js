var numOfDrumSet = document.querySelectorAll(".drum").length;

//Detect Button Press
for(i=0; i<numOfDrumSet; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        this.style.color = "white";

        setTimeout(() => {
            this.style.color = "#DA0463";
        }, 100)

        var innerHTML = this.innerHTML;

        makeSound(innerHTML);
    });
}

//Detecting Keyboard Press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
});


//function 
function makeSound(key){

        switch(key){
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;

            case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;
            
            case "k":
                var kickBase = new Audio("sounds/kick-bass.mp3");
                kickBase.play();
            break;

            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;

            defaults;
        }
    };


function clickAlert()
{
    this.style.color="white";
    var sound;
    switch(this.innerHTML)
    {
        case "l":sound = "sounds/crash.mp3";break;
        case "k":sound = "sounds/kick-bass.mp3";break;
        case "s":sound = "sounds/snare.mp3";break;
        case "d":sound = "sounds/tom-1.mp3";break;
        case "j":sound = "sounds/tom-2.mp3";break;
        case "a":sound = "sounds/tom-3.mp3";break;
        case "w":sound = "sounds/tom-4.mp3";break;
    }
    var audio = new Audio(sound);
    audio.play();
}

var i=0;
var n=document.querySelectorAll(".drum").length;
for(i=0;i<n;i++)
    {   
       
        document.querySelectorAll(".drum")[i].addEventListener("click",clickAlert);

        
    }
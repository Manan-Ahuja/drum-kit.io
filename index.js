
var button=document.querySelectorAll("button");

button[0].addEventListener("click", function() { var audio= new Audio('sounds/tom-1.mp3');  audio.play(); animation(button[0]);});
button[1].addEventListener("click", function() { var audio= new Audio('sounds/tom-2.mp3');  audio.play(); animation(button[0]);});
button[2].addEventListener("click", function() { var audio= new Audio('sounds/tom-3.mp3');  audio.play(); animation(button[0]);});
button[3].addEventListener("click", function() { var audio= new Audio('sounds/tom-4.mp3');  audio.play(); animation(button[0]);});
button[4].addEventListener("click", function() { var audio= new Audio('sounds/snare.mp3');  audio.play(); animation(button[0]);});
button[5].addEventListener("click", function() { var audio= new Audio('sounds/crash.mp3');  audio.play(); animation(button[0]);});
button[6].addEventListener("click", function() { var audio= new Audio('sounds/kick-bass.mp3');  audio.play(); animation(button[0]);});

document.addEventListener("keypress", function(event) {keyboard(event.key); animation(event.key);});

function keyboard(sound) {
    if(sound==='w') { var audio= new Audio('sounds/tom-1.mp3');  audio.play(); };
    if(sound==='a') { var audio= new Audio('sounds/tom-3.mp3');  audio.play(); };
    if(sound==='s') { var audio= new Audio('sounds/tom-2.mp3');  audio.play(); };
    if(sound==='d') { var audio= new Audio('sounds/tom-4.mp3');  audio.play(); };
    if(sound==='j') { var audio= new Audio('sounds/snare.mp3');  audio.play(); };
    if(sound==='k') { var audio= new Audio('sounds/crash.mp3');  audio.play(); };
    if(sound==='l') { var audio= new Audio('sounds/kick-bass.mp3');  audio.play(); };
}

function animation(active) {
    var btn=document.querySelector("."+active);
    btn.classList.add("pressed");

    setTimeout(function() {
        btn.classList.remove("pressed");
    }, 100);
}
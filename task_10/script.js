var play = document.querySelector(".play");
var song = document.querySelector(".song");
var pause = document.querySelector(".pause");
var forward = document.querySelector(".forward");
var backward = document.querySelector(".backward");
var next = document.querySelector(".next");
var back = document.querySelector(".back");

play.addEventListener("click",function(){
    play.classList.add("hidden");
    pause.classList.remove("hidden");
    song.play();
})

pause.addEventListener("click",function(){
    play.classList.remove("hidden");
    pause.classList.add("hidden");
    song.pause();
})

forward.addEventListener("click",function(){
    song.pause();
    song.currentTime += 15;
    song.play();
})

backward.addEventListener("click",function(){
    song.pause();
    song.currentTime -= 15;
    song.play();
})

next.addEventListener("dblclick",function(){
    song.pause();
    song.currentTime = 0;
    song.play()
})

back.addEventListener("dblclick",function(){
    song.pause();
    song.currentTime = 0;
    song.play()
})
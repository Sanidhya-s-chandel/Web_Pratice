var clos = document.body.querySelector(".close");
var show = document.body.querySelector(".show");
var overlays = document.body.querySelector(".overlays");

clos.addEventListener("click",function(){
    overlays.classList.add("hidden");
    show.classList.remove("hidden")
});

show.addEventListener("click",function(){
    overlays.classList.remove("hidden");
    show.classList.add("hidden")
});
var on = document.body.querySelector(".lighton");
var off = document.body.querySelector(".lightoff");
var bulb = document.body.querySelector(".bulb");

off.addEventListener("click",function(){
    bulb.classList.remove("bg-yellow-400");
    bulb.classList.remove("shado");
});

on.addEventListener("click",function(){
    bulb.classList.add("bg-yellow-400");
    bulb.classList.add("shado");
});
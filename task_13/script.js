var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
var h1 = document.querySelector("h1");

main.addEventListener("mousemove",function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
})

h1.addEventListener("mouseenter",function(){
    cursor.style.transform = "scale(3)";
    cursor.style.transition = "transform 0.3s ease-in-out";
})

h1.addEventListener("mouseleave",function(){
    cursor.style.transform = "scale(1)";
})
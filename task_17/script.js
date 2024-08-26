var btn = document.querySelector("button");
var per = document.querySelector(".per");
var grow = document.querySelector(".grow");
var head = document.querySelector(".head")

var count = 0;

btn.addEventListener("click",function(){
    var interval = setInterval(function(){
        count++;
        btn.innerHTML = "Downloading........"
        per.innerHTML = count + "%";
        grow.style.width = count + "%";
    },50)

    setTimeout(function(){
        clearInterval(interval);
        head.innerHTML = "Thank You For downloading... Come back Soon !!";
        btn.innerHTML = `Downloaded Successfully <i class="ri-checkbox-circle-line"></i>`;
        btn.style.backgroundColor = "green";
    },5000)
})
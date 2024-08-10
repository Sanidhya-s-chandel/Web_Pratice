var x = document.body.querySelectorAll(".request");

x.forEach(function(x){

    x.addEventListener("click",function(){
        if(x.innerHTML === "Requested"){
            x.innerHTML = "Add friend";
        }
        else{
            x.innerHTML = "Requested";
        }
    });
});

var tag = document.body.querySelectorAll(".tag");

tag.forEach(function(i){
    i.addEventListener("click",function(){
        if(i.classList.contains("ri-bookmark-line")){
            i.classList.remove("ri-bookmark-line");
            i.classList.add("ri-bookmark-fill");
            i.style.color = "black";
        }
        else{
            i.classList.remove("ri-bookmark-fill");
            i.classList.add("ri-bookmark-line");
            i.style.color = "black"; 
        }
    })
});

var like = document.body.querySelectorAll(".like");

like.forEach(function(i){
    i.addEventListener("click",function(){
        if(i.classList.contains("ri-heart-line")){
            i.classList.remove("ri-heart-line");
            i.classList.add("ri-heart-fill");
            i.style.color = "white";
        }
        else{
            i.classList.remove("ri-heart-fill");
            i.classList.add("ri-heart-line");
            i.style.color = "black";
        }
    })
});
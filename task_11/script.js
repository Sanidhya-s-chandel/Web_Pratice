content = "";

for(var i = 1; i <113; i++){
    var num = Math.floor(Math.random()*100);

    var red = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);

    content += `<div style="background-color: rgb(${red},${green},${blue});" class="bubble h-24 w-24 flex justify-center items-center text-2xl rounded-full">${num}</div>`;
}

var main = document.querySelector(".main");
main.innerHTML = content;
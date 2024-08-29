var arr = [
    {
      name: "Tesla",
      rating: 4.2,
      image: "https://ymimg1.b8cdn.com/uploads/article/8831/pictures/10704690/2024-Tesla-Model-3-Facelift-2.jpg",
      price: 70000,
      popularity: 95,
      description: "Electric, innovative, futuristic, autonomous, fast"
    },
    {
      name: "BMW",
      rating: 4.8,
      image: "https://www.gearpatrol.com/wp-content/uploads/sites/2/2023/07/p90499807-highres-the-bmw-xm-label-red-64beeff2ccfab-jpg.webp",
      price: 60000,
      popularity: 85,
      description: "Luxurious, performance, stylish, premium, innovative"
    },
    {
      name: "Mercedes-Benz",
      rating: 4.9,
      image: "https://dorsiafinance.co.uk/wp-content/uploads/10-Facts-About-Mercedes-Benz.webp",
      price: 70000,
      popularity: 92,
      description: "Luxury, comfort, technology, prestige, powerful"
    },
    {
      name: "Ford",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZCUyMGNhcnN8ZW58MHx8MHx8fDA%3D",
      price: 40000,
      popularity: 80,
      description: "Dependable, versatile, rugged, American, practical"
    },
    {
      name: "Audi",
      rating: 4.7,
      image: "https://cdn.motor1.com/images/mgl/JOBB2g/s3/audi-r8-v-10-vegas-yellow.jpg",
      price: 55000,
      popularity: 88,
      description: "Sophisticated, stylish, premium, sporty, advanced"
    }
  ];

function print(){
    var container = "";
    arr.forEach(function(value){
    container += `<div class="card bg-white rounded-md w-72">
            <div class="img w-full h-56 rounded overflow-hidden">
            <img src="${value.image}" alt="" class="h-full w-full object-cover">
            </div>
            <div class="p-2 flex flex-col">
                <h1 class="text-2xl mt-2 font-semibold">Name: ${value.name}</h1>
                <h1 class="mt-2 text-xl">Price: $ ${value.price}</h1>
                <h1 class="mt-2 text-xl">Rating: ${value.rating}</h1>                               
                <p class="mt-2 text-lg">${value.description}</p>
                <button class="px-4 py-2 bg-blue-600 text-white text-lg mx-auto font-semibold mt-4">ADD TO CART</button>
            </div>
        </div>`
});

document.querySelector(".cards").innerHTML = container;
}

print();

var select = document.querySelector("select");

select.addEventListener("change",function(){
    if(select.value === "Rating"){
        let newarr = arr.sort(function(a,b){
            return b.rating - a.rating;
        });
        print();
    }
    else if(select.value === "Price"){
        newarr = arr.sort(function(a,b){
            return a.price - b.price;
        });
        print();
    }
    else{
        newarr = arr.sort(function(a,b){
            return b.popularity - a.popularity;
        });
        print();
    }
})
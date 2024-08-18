var arr = [
    {
        name: "ShinChan",
        image: "https://miro.medium.com/v2/resize:fit:540/0*vUlSsz1sMQ38o5gd.jpg",
        decription: "Hello !! I'm Shinchan Nohara, I'm 5 yrs old.",
        status: "strangers"
    },
    {
        name: "Doremon",
        image: "https://w0.peakpx.com/wallpaper/314/850/HD-wallpaper-doraemon-anime-thumbnail.jpg",
        decription: "Hello !! I'm Doremon, I came from the Future.....",
        status: "strangers"
    },
    {
        name: "Jerry",
        image: "https://clipart-library.com/new_gallery/752504_tom-and-jerry-png-images.png",
        decription: "Hello !! I'm Jerry the mouse From the famous Tom&Jerry show.",
        status: "strangers"
    },
    {
        name: "Ash Ketchum",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/ash_1-three_four.jpg?VersionId=3vR.Hgys.VQC.d20znh_Riu2onkCEeGX",
        decription: "Hello !! I'm Ash, I want to become the Pokemon Master..",
        status: "strangers"
    }
];

function print() {
    var container = "";

    arr.forEach(function(person, index) {
        container += `<div class="h-96 w-80 bg-zinc-700 p-4 rounded-md text-white flex flex-col items-center gap-4">
            <div class="h-32 w-32 rounded-full overflow-hidden border-4 border-black">
                <img src="${person.image}" alt="${person.name}" class="h-full w-full object-cover">
            </div>
            <h1 class="font-semibold text-2xl font-[gilroy] mt-4">${person.name}</h1>
            <p class="text-lg mt-4">${person.decription}</p>
            <button id="${index}" class="btn px-4 font-semibold py-2 ${person.status === 'strangers' ? 'bg-blue-600' : (person.status === 'Request sent' ? 'bg-yellow-400' : 'bg-red-500')} rounded mt-4 mx-auto">
                ${person.status === 'strangers' ? 'Add Friend' : (person.status === 'Request sent' ? 'Request Sent' : 'Remove Friends')}
            </button>
        </div>`;
    });

    document.querySelector(".main").innerHTML = container;
}

print();

var x;

document.querySelector(".main").addEventListener("click", function(e) {
    if (e.target.classList.contains("btn")) {
        var id = e.target.id;
        if (arr[id].status === "strangers") {
            arr[id].status = "Request sent";

            let num = Math.floor(Math.random()*10);
     
            x = setTimeout(function(){
                arr[id].status = "friends";
                print();
            }, num*1000);
        }
        else{
            arr[id].status = "strangers";
            clearTimeout(x);
        }
    }
    print();
});

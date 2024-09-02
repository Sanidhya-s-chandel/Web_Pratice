var arr = [
    {
      username: "Saloni_gite",
      dp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      story: "https://images.unsplash.com/photo-1588768987479-bcebeefb8a5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      username: "Sanidhya_s_chandel",
      dp: "https://images.unsplash.com/photo-1621388987304-e23cef5f36de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
      story: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGFlc3RoZXRpY3xlbnwwfDF8MHx8fDA%3D",
    },
    {
        username: "vijay_2207",
        dp: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1608113240046-4324c3d96c49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxwb3RyYWl0fGVufDB8fDB8fHww",
      },
    {
      username: "Jhon Doe",
      dp: "https://images.unsplash.com/photo-1627215635153-9a450b0e0d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
      story: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFyayUyMGFlc3RoZXRpY3xlbnwwfDF8MHx8fDA%3D",
    },
    {
      username: "Alen awake",
      dp: "https://images.unsplash.com/photo-1600364768707-1385e68a48f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
      story:"https://images.unsplash.com/photo-1599709343744-195fe3f82dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmslMjBhZXN0aGV0aWN8ZW58MHwxfDB8fHww",
    },
    {
      username: "AmaAn Jhandu",
      dp: "https://images.unsplash.com/photo-1608175602591-d1807a0850dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
      story:"https://images.unsplash.com/photo-1629553749129-2e134d40287a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRhcmslMjBhZXN0aGV0aWN8ZW58MHwxfDB8fHww",
    },
  ];

  var clutter = ""

  arr.forEach(function(elem,idx){
    clutter += `<div class="story">
              <img id=${idx} src=${elem.dp} alt="">
            </div>`
  })
  
  var storiyan = document.querySelector("#storiyan")
  var full = document.querySelector("#full")
  var username = document.querySelector("#full h5")
  var growth = document.querySelector("#growth")
  var userImage = document.querySelector(".userStory img")
  
  
  storiyan.innerHTML = clutter
  
  storiyan.addEventListener("click",function(dets){
  
    var grow = 0
  
    var currentStory =  arr[dets.target.id].story
  
    full.style.display = "initial"
    full.style.backgroundImage = `url(${currentStory})`
    username.innerHTML = arr[dets.target.id].username
    userImage.setAttribute("src",arr[dets.target.id].dp)
  
  
    var storyInterval = setInterval(function(){
      grow++
      growth.style.width = grow + "%"
      console.log(grow)
    },40)
  
    setTimeout(function(){
      full.style.display = "none"
      clearInterval(storyInterval)
    },4000)
  })
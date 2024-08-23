gsap.to(".page2 .slider",{
    transform: "translateX(-350%)",
    scrollTrigger:{
        trigger: ".page2",
        scroller: "Body",
        markers: true,
        start: "top 0",
        end: "top -150%",
        scrub: 2,
        pin: true
    }
})
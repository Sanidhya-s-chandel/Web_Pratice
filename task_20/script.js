var tl = gsap.timeline()

tl.from(".nav h1",{
    y : 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    stagger: 0.5
})

tl.from(".right1",{
    y : 50,
    width: "100%",
    duration: 1.5,
    delay: 0.5,
},"anim")

tl.from(".left1",{
    x : -400,
    width: 0,
    duration: 1.5,
    delay: 0.5,
    opacity: 0
},"anim")
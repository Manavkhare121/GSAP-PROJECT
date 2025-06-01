let tl=gsap.timeline()
tl.to(".full",{
    right:"0",
    duration:0.8,
})
tl.from(".full h4",{
    x:150,
    duration:0.5,
    stagger:0.2,
    opacity:0
    
})
tl.from(".full i" ,{
    opacity:0,
    
})
tl.pause()
let effect=document.querySelector(".nav  i")
let menu=document.querySelector(".full i")
effect.addEventListener("click",function(){
    tl.play()
})
menu.addEventListener("click", function(){
    tl.reverse()
})
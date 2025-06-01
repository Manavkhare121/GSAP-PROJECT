function breakthetext(){
    let  h1=document.querySelector("h1")
let h1text=h1.textContent
let splittedtext=h1text.split("")
let halfvalue=Math.floor(splittedtext.length/2)
let clutter=""
splittedtext.forEach(function(elem,idx){
    if(idx<halfvalue){
        clutter+=`<span class="a">${elem}</span>`
    }else{
        clutter+=`<span class="b">${elem}</span>`
    }
    
})
h1.innerHTML=clutter
}
breakthetext()
// gsap.from("h1 span",{
//     y:50,
//     opacity:0,
//     duration:0.8,
//     delay:0.5,
//     stagger:0.15
// })
gsap.from("h1 .a",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})
gsap.from("h1 .b",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0,
})


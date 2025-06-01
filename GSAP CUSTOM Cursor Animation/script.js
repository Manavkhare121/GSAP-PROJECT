let main=document.querySelector(".main")
let cursor=document.querySelector(".cursor")
let image=document.querySelector(".image")
window.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        
    })
})
image.addEventListener("mouseenter",function(){
    cursor.innerHTML="view more"
    gsap.to(".cursor",{
        scale:3,
        backgroundColor:"#ffffff5c"
    })
    
})
image.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(".cursor",{
        scale:1,
        backgroundColor:"#fff"
    })
    
})
window.lastScrollTop = { y: 0 };

    const hello = document.querySelector('.hello');

    // Optional: add smooth transition
    hello.style.transition = "transform 0.3s ease-in-out";

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop < window.lastScrollTop.y) {
            // Scrolling up — show the navbar
            hello.style.transform = "translateY(0%)";
        } else {
            // Scrolling down — hide the navbar
            hello.style.transform = "translateY(-100%)";
        }

        // Update last scroll position
        window.lastScrollTop.y = scrollTop <= 0 ? 0 : scrollTop;
    });
   
  const button = document.querySelector('.fill-follow-btn');

  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Move the fill to follow the cursor
    button.style.background = `radial-gradient(circle at ${x}% ${y}%, #00ffff 30%, transparent 31%)`;
    button.style.color = '#111';
  });

  button.addEventListener('mouseleave', () => {
    // Reset background when mouse leaves
    button.style.background = 'transparent';
    button.style.color = '#00ffff';
  });


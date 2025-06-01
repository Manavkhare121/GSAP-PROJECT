let initialpath = `M 10 100 Q 500 100 990 100`;
let string = document.querySelector('.main');
let pathElement = document.querySelector('path'); // Select the actual <path> element

string.addEventListener("mousemove", function(dets) {
    let path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
    gsap.to(pathElement, {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function() {
    gsap.to(pathElement, {
        attr: { d: initialpath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    });
});


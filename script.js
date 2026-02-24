const cursor = document.querySelector('#cursor');
const cursorBlur = document.querySelector('#cursor-blur');
window.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorBlur.style.left = e.clientX-96 + 'px';
    cursorBlur.style.top = e.clientY-96 + 'px';
})

let navs = document.querySelectorAll('#nav a');
console.log(navs);
navs.forEach(elem =>{
        elem.addEventListener('mouseenter',function(elem){
            cursor.classList.add('elemHover');
        })
        elem.addEventListener('mouseleave',function(elem){
            cursor.classList.remove('elemHover');
        })
    } 
);

gsap.from('#aboutMid, #about img',{
    y: 100,
    opacity: 0,
    scrollTrigger:{
        scroller: 'body',
        trigger: '#about',
        // markers: true,
        start: 'top 50%',
        end: 'top 40%',
        scrub: 3
    }
})

gsap.from('.card',{
    scale: 0.9,
    opacity: 0,
    scrollTrigger:{
        scroller: 'body',
        trigger: '#cards',
        // markers: true,
        start: 'top 50%',
        end: 'top 35%',
        scrub: 1
    }
})


gsap.to('#experience #expImg1',{
    xPercent: 30,
    yPercent: 30,
    scrollTrigger:{
        scroller: 'body',
        trigger: '#expImg1',
        // markers: true,
        start: 'top 40%',
        end: 'top 30%',
        scrub: 2
    }
})
gsap.to('#experience #expImg2',{
    xPercent: -30,
    yPercent: -30,
    scrollTrigger:{
        scroller: 'body',
        trigger: '#expImg2',
        // markers: true,
        start: 'top 90%',
        end: 'top 80%',
        scrub: 2
    }
})

gsap.to('#packages p',{
    y: -100,
    scrollTrigger:{
        scroller:'body',
        trigger:'#packages',
        markers: true,
        start: 'top 90%',
        end: 'top 70%',
        scrub: 3
    }
});



// Tilt on card
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 10,          // maximum tilt rotation (degrees)
    speed: 100,       // speed of the transition
    glare: true,      // enable glare effect
    "max-glare": 0.5, // intensity of the glare
});
VanillaTilt.init(document.querySelector("#experience p"), {
    max: 5,          // maximum tilt rotation (degrees)
    speed: 100,       // speed of the transition
    // glare: true,      // enable glare effect
    // "max-glare": 0.5, // intensity of the glare
});


gsap.to('#nav',{
    backgroundColor: '#000',
    height:'6.25rem',
    scrollTrigger:{
        // markers: true,
        trigger: '#nav',
        scroller: 'body',
        start: 'top -2%',
        end: 'top -5%',
        scrub: 2
    }
});

gsap.to('#main',{
    backgroundColor: '#000',
    scrollTrigger:{
        // markers: true,
        trigger: '#main',
        scroller: 'body',
        start: 'top -50%',
        end: 'top -90%',
        scrub: 2
    }
})
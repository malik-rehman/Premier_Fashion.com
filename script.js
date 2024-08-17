var tl=gsap.timeline()


function animation() {

    tl.from("nav .logo, nav div a, nav div h3",{
        y:-90,
        opacity:0,
        duration:.6,
        stagger:.2
    })
    tl.from(".center", {
    
        transform:"scale(0)",
        duration:.6,
       
        
    })
    tl.from(".alphabet h2, .alphabet h6",{
        x:-150,
        opacity:0,
        duration:.85,
        scrollTrigger:{
            trigger:".alphabet",
            scroller:"body",
            //markers:true,
            start:"top 70%",
            end:"end 70%",
            scrub:2
        }
    
    })
    tl.from("#box1",{
        x:-100,
        opacity:0,
        duration:.5,
        scrollTrigger:{
            trigger:".con2-part1",
            scroller:"body",
            //markers:true,
            start:"top 50%",
            end:"end 50%",
            scrub:2
        }
    })
    tl.from("#box2",{
        x:100,
        opacity:0,
        duration:.5,
        scrollTrigger:{
            trigger:".con2-part1",
            scroller:"body",
           // markers:true,
            start:"top 50%",
            end:"end 50%",
            scrub:2
        }
    })
    tl.from("#box3",{
        x:-100,
        opacity:0,
        duration:.5,
        scrollTrigger:{
            trigger:".con2-part2",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"end 0%",
            scrub:2
        }
    })
    tl.from("#box4",{
        x:100,
        opacity:0,
        duration:.5,
        scrollTrigger:{
            trigger:".con2-part2",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"end 0%",
            scrub:2
        }
    })
    tl.from(".con2-part3",{
        transform:"scale(0)",
        duration:.5,
        scrollTrigger:{
            trigger:".con2-part3",
            scroller:"body",
            //  markers:true,
            start:"top 80%",
            end:"end 80%",
            scrub:2
        }
    })
    tl.from(".container3 h1, .container3 .con3-box",{
        y:100,
        opacity:0,
        duration:1,
        stagger:.2,
        scrollTrigger:{
            trigger:".container3",
            scroller:"body",
           // markers:true,
            start:"top 50%",
            end:"end 50%",
            scrub:4
        }
    })
    tl.from(".container4",{
        transform:"scale(0)",
        duration:.7,
        scrollTrigger:{
            trigger:".container4",
            scroller:"body",
           // markers:true,
            start:"top 100%",
            end:"end 100%",
            scrub:2
        }
    })
    tl.from(".container5",{
        opacity:0,
        duration:.5
    })


}

animation()


var menu=document.querySelector("#menu i");

menu.addEventListener("click",function () {
  // Get all <a> elements inside <nav>
let nav = document.querySelector("nav");
nav.classList.toggle("block");

});


    

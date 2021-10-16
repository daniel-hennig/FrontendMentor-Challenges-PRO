'use strict'

// hamburger + overlay
const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("nav-bar");
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");

let active = false;

hamburger.addEventListener("click", (e) => {
    wrapper.classList.toggle("pointer-events-none");
    hamburger.classList.toggle("pointer-events-all");

    // toggle aria-expanded attribute of hamburger
    if(hamburger.getAttribute('aria-expanded') === 'false') {
        hamburger.setAttribute('aria-expanded', true);
    } else {
        hamburger.setAttribute('aria-expanded', false);        
    }

    if(active) { // close menu
        e.preventDefault();

        navBar.classList.remove("slide-left");
        navBar.classList.add("slide-right");
        
        hamburger.children[0].classList.remove("first-span-anima");
        hamburger.children[2].classList.remove("third-span-anima");
        
        hamburger.children[0].classList.add("reverse-first-span-anima");
        hamburger.children[2].classList.add("reverse-third-span-anima");
        hamburger.children[1].style.opacity = 1;
        
        body.style.overflow = "initial";

        active = false;
    } else { // open menu
        e.preventDefault();

        if(!navBar.classList.contains("overlay")) {
            navBar.classList.add("overlay");
            navBar.classList.add("slide-left");
        } else {
            navBar.classList.add("slide-left");
            navBar.classList.remove("slide-right");
        }

        if(hamburger.children[0].classList.contains("reverse-first-span-anima") && hamburger.children[2].classList.contains("reverse-third-span-anima")) {
            hamburger.children[0].classList.remove("reverse-first-span-anima");            
            hamburger.children[2].classList.remove("reverse-third-span-anima");            
        }

        hamburger.children[1].style.opacity = 0;
        hamburger.children[0].classList.add("first-span-anima");
        hamburger.children[2].classList.add("third-span-anima");

        body.style.overflow = "hidden";

        active = true;
    }
});
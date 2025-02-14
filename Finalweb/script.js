const ownc1="#EEEEEE"; /* body bg */
const ownc11="#e4e4e4"; /* body bg */
const ownc2="#00ADB5";  
const ownc3="#393E46"; 
const ownc4="#222831"; /*text */

const flotingElements = document.getElementById("floting-elements");
const nav = flotingElements.children[0].classList;
const arrow = flotingElements.children[1].classList;
let isHidden = false; // Track visibility state

// Scroll Event
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 700 && !isHidden) {
        show(nav, arrow);
    } else if (window.pageYOffset <= 700) {
        hide(nav, arrow);
    }
});

// Wheel Event - Toggles visibility based on scroll direction
window.addEventListener("wheel", (event) => {
    if (window.pageYOffset > 700) {
        if (event.deltaY > 0 && !isHidden) {
            hide(nav, arrow);
            isHidden = true; // Mark as hidden
        } else if (event.deltaY < 0 && isHidden) {
            show(nav, arrow);
            isHidden = false; // Mark as shown
        }
    }
});

// Show function
function show(nav, arrow) {
    nav.replace("opacity-0", "opacity-100");
    nav.replace("-translate-y-20", "translate-y-0");
    arrow.replace("opacity-0", "opacity-100");
    arrow.replace("translate-y-20", "translate-y-0");
}

// Hide function
function hide(nav, arrow) {
    nav.replace("opacity-100", "opacity-0");
    nav.replace("translate-y-0", "-translate-y-20");
    arrow.replace("opacity-100", "opacity-0");
    arrow.replace("translate-y-0", "translate-y-20");
}


const gototopbtn=document.querySelector(".go-to-top");

const homeBody=document.getElementById("home-body");
const aboutSec=document.getElementById("about-sec");
const mySkillSec=document.getElementById("my-skill-sec");
const uiUxSkillSec=document.getElementById("ui-ux-skill-sec");
const contactSec=document.getElementById("contact-sec");

const contactMeBtn=document.getElementById("contect-me-btn");

const flotingNav=document.querySelectorAll(".floting-nav-a");
const homeNav=document.querySelectorAll(".home-nav-a");


gototopbtn.addEventListener('click', function() {
    homeBody.scrollIntoView({ behavior: 'smooth' });
  });

for (const element of flotingNav) {
    element.addEventListener('click',function(eve){
       goto(element.innerText);
    })
}
for (const element of homeNav) {
    element.addEventListener('click',function(eve){
        goto(element.innerText);
    })
}
contactMeBtn.addEventListener('click',function(){
    contactSec.scrollIntoView({behavior: 'smooth'});
})




function goto(element){
        element=="Home"?homeBody.scrollIntoView({ behavior: 'smooth' }):"";
        element=="About"?aboutSec.scrollIntoView({ behavior: 'smooth' }):"";
        element=="Skill"?mySkillSec.scrollIntoView({ behavior: 'smooth' }):"";
        element=="Other"?uiUxSkillSec.scrollIntoView({ behavior: 'smooth' }):"";
        element=="Contact"?contactSec.scrollIntoView({ behavior: 'smooth' }):"";
}
const ownc1="#EEEEEE"; /* body bg */
const ownc11="#e4e4e4"; /* body bg */
const ownc2="#00ADB5";  
const ownc3="#393E46"; 
const ownc4="#222831"; /*text */

const homemMore=document.querySelector("#home-more-icon");
const linkMore=document.querySelector(".link-more");





hideIconMore=()=>{
    linkMore.classList.remove("hidden");
    homemMore.classList.replace("fa-caret-down","fa-caret-up")
    homemMore.style.color="gray";
    setTimeout(()=>{
        linkMore.classList.add("hidden");
        homemMore.classList.replace("fa-caret-up","fa-caret-down")
        homemMore.style.color=ownc2;
        
    },4000);
}

homemMore.addEventListener("click",()=>{
    hideIconMore();
})
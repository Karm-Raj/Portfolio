const devData=[
    {   
        href:"",
        title:"Currency Converter",
        src:"assets/dev-project/currency-converter.png",
        alt:"currency converter imgage",
        about:"This is a simple currency converter Web App Using HTML, CSS, Tailwind & Js."
    },
    {   
        href:"",
        title:"Tic Tac Toe",
        src:"assets/dev-project/currency-converter.png",
        alt:"currency converter imgage",
        about:"This is a simple currency converter Web App Using HTML, CSS, Tailwind & Js."
    },
    {
        href:"#",
        title:"",
        src:"",
        alt:"",
        about:""
    }
]
const uiUxData=[
    {   
        href:"",
        title:"Currency Converter",
        src:"assets/dev-project/currency-converter.png",
        alt:"currency converter imgage",
        about:"This is a simple currency converter Web App Using HTML, CSS, Tailwind & Js."
    },
    {   
        href:"",
        title:"Tic Tac Toe",
        src:"assets/dev-project/currency-converter.png",
        alt:"currency converter imgage",
        about:"This is a simple currency converter Web App Using HTML, CSS, Tailwind & Js."
    },
    {
        href:"#",
        title:"",
        src:"",
        alt:"",
        about:""
    }
]


const devProjectTemp=document.getElementById("dev-project-temp");
const devProjectCont=document.getElementById("dev-project-cont");

for (const index of devData) {
    let copyOfTemp=devProjectTemp.content.cloneNode(true);
    let copyA=copyOfTemp.querySelector("a");
    copyA.href=index["href"];
    copyA.querySelector("p").innerText=index["title"];
    copyA.querySelector("img").src=index["src"] ;
    copyA.querySelector("img").alt=index["alt"] ;
    copyA.querySelectorAll("p")[2].innerText=index["about"] ;
    if(index["title"]===""){
        copyA.removeAttribute("href");
        copyA.querySelector("p").innerText="Up Comming";
    }
    devProjectCont.appendChild(copyA);
}







// for (const index of devData) {
//     let copyOfTemp=devProjectTemp.content.cloneNode(true);
//     let copyDiv=copyOfTemp.querySelector("div");
//     copyDiv.querySelector("p").innerText=index["title"];
//     copyDiv.querySelector("img").src=index["src"] ;
//     copyDiv.querySelector("img").alt=index["alt"] ;
//     copyDiv.querySelectorAll("p")[2].innerText=index["about"] ;
//     if(index["title"]===""){
//         copyDiv.children[0].children[0].children[1].innerText="Up Comming";
//     }
//     devProjectCont.appendChild(copyDiv);
// }

// devProjectCont.addEventListener("click",(eve)=>{
//    console.log(eve.target);
// })
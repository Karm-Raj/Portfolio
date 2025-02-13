// ui-ux
const uiUxIconUrl=[ "assets/skill-icons/ai.png",
                    "assets/skill-icons/ps.png",
                    "assets/skill-icons/pr.png",
                    "assets/skill-icons/ae.png",
                    "assets/skill-icons/figma.png",
                    "assets/skill-icons/3dmax.png",
]
const uiUxName1=[ "Illustrator",
                 "Photoshop",
                 "Premiere Pro",
                 "After Effect",
                 "Figma",
                 "3D Max"   

]
const uiUxName=[ "Adobe",
                 "Adobe",
                 "Adobe",
                 "Adobe",
                 "",
                 "AutoCAD"   

]
const uiUxExp=[
                    4,
                    3.5,
                    3,
                    2,
                    4,
                    2
]

// Access of cont
const uiUxCont=document.querySelector("#ui-ux-skill-cont");
const uiUxtemplet=document.querySelector("#ui-ux-skill-temp");


for (const key in uiUxExp) {
        const copyOfTemp=uiUxtemplet.content.cloneNode(true);
        const copyDiv=copyOfTemp.querySelector("div");
        copyDiv.children[0].src=uiUxIconUrl[key];
        copyDiv.children[1].innerText=uiUxName[key];
        copyDiv.children[2].innerText=uiUxName1[key];
        uiUxCont.appendChild(copyDiv);
        
        let rating;
        for(let i=0;i<5;i++){
                let exp=uiUxExp[key]-1;
                let half=exp==i-0.5;
            rating=copyDiv.children[3].children[i];
            rating.classList="";
            if(exp>=i){
                    rating.classList.add("fa-solid", "fa-star") ;
            } 
            if(half){
                    rating.classList.add("fa-solid", "fa-star-half-stroke"); 
                  half=false;
            }else{
                rating.classList.add("fa-regular", "fa-star") ;
            }       
    }
}




//maxium width
const width_height= window.matchMedia("(max-width: 932px)")
// animation for main title 
let title= document.querySelector("h1")
let span_1= title.childNodes[1]
let span_2= title.childNodes[3]
let span_3= title.childNodes[5]


if(width_height.matches){
    let func=()=>{
        let time1=setTimeout(()=>{
            span_1.style.transform="translateX(-20px)"
            span_3.style.transform="translateX(30px)"
            span_2.style.visibility="visible"
            console.log("you are in low width height")
        },2000)

        let time2=setTimeout(()=>{
            span_2.style.visibility="hidden"
            span_1.style.transform="translateX(0)"
            span_3.style.transform="translateX(0)"},4000)
    
        return [time1, time2]
    }

   func()
}
else{
let func_1=()=>{
    let time_1=setTimeout(()=>{
        span_1.style.transform="translateX(-98px)"
        span_3.style.transform="translateX(110px)"
        span_2.style.visibility="visible"
    },2000)
    let time_2=setTimeout(()=>{
        span_2.style.visibility="hidden"
        span_1.style.transform="translateX(0)"
        span_3.style.transform="translateX(0)"},4000)

    return [time_1, time_2]
}
func_1()}

let func_2=()=>{

    title.addEventListener('touchstart',()=>{
        span_1.style.transform= "translateX(-20px)"
        span_3.style.transform= "translateX(30px)"
        span_2.style.visibility="visible"
    })
    
    title.addEventListener('touchend',()=>{
        span_2.style.visibility="hidden"
        span_1.style.transform="translateX(0)"
        span_3.style.transform="translateX(0)"
       
    })
}

let func_3=()=>{

    title.addEventListener('mouseover',()=>{
        span_1.style.transform= "translateX(-98px)"
        span_3.style.transform= "translateX(110px)"
        span_2.style.visibility="visible"
    })
    
    title.addEventListener('mouseout',()=>{
        span_2.style.visibility="hidden"
        span_1.style.transform="translateX(0)"
        span_3.style.transform="translateX(0)"
       
    })
}


if(width_height.matches){
    func_2()
}
else{
    func_3()
}


//animation for achivement heading
let achivement= document.querySelector("#achivement-h2-tag")

let achivement_span_1= achivement.childNodes[1]
let achivement_span_2= achivement.childNodes[3]
let achivement_span_3= achivement.childNodes[5]

achivement.addEventListener('mouseover',()=>{
    achivement_span_1.style.transform="translateX(-250px)"
    achivement_span_3.style.transform="translateX(250px)"
    achivement_span_1.style.visibility="hidden"
    achivement_span_3.style.visibility="hidden"
    achivement_span_2.style.visibility="visible"
    achivement_span_2.style.font_size="6em"
    
})

//animation for awards heading
let awards= document.querySelector("#awards-h2-tag")
let awards_span_1 = awards.childNodes[1]
let awards_span_2= awards.childNodes[3]
let awards_span_3= awards.childNodes[5]

awards.addEventListener('mouseover',()=>{
    awards_span_1.style.transform="translateX(-250px)"
    awards_span_2.style.transform="translateX(250px)"
    awards_span_1.style.visibility='hidden'
    awards_span_2.style.visibility="hidden"
    awards_span_3.style.visibility="visible"
    awards_span_3.style.font_size="6em"
})

//animation for page selector
let selector_1=document.querySelector("#tag-0")
let selector_2=document.querySelector("#tag-2")
let selector_3=document.querySelector("#tag-3")

// Wrapper's
let wrapper_1=document.querySelector("#wrapper-1")
let wrapper_2=document.querySelector("#wrapper-2")
let wrapper_3=document.querySelector("#wrapper-3")



selector_1.addEventListener('click',()=>{
    selector_3.classList.remove("selector-animation-3")
    selector_2.classList.remove("selector-animation-2")
    selector_1.classList.add("selector-animation-1")
    wrapper_2.style.visibility="hidden"
    wrapper_3.style.visibility="hidden"
    wrapper_1.style.visibility="visible"
    


})

selector_2.addEventListener('click',()=>{
    selector_3.classList.remove("selector-animation-3")
    selector_1.classList.remove("selector-animation-1")
    selector_2.classList.add("selector-animation-2")
    wrapper_1.style.visibility="hidden"
    wrapper_3.style.visibility="hidden"
    wrapper_2.style.visibility="visible"
    
})

selector_3.addEventListener('click',()=>{
    selector_1.classList.remove("selector-animation-1")
    selector_2.classList.remove("selector-animation-2")
    selector_3.classList.add("selector-animation-3")
    wrapper_2.style.visibility="hidden"
    wrapper_1.style.visibility="hidden"
    wrapper_3.style.visibility="visible"
    
})

 
// Making slider function

 let unorder_list=document.querySelector("#awards-section >ul") 
let lists= document.querySelector("#awards-section> ul li img")
let nxtBtn= document.querySelector("#nxtBtn")
let awardContent= document.querySelector(".paragraph-award")
let counter=0
let image=["../jpg_folder/award-1.jpg","../jpg_folder/award-2.jpg", "../jpg_folder/award-3.jpg" ,"../jpg_folder/award-4.jpg"]
let content= ["Getting an compliment from vice president for my services.","On the cover page of Russian Magazine","Five year of best employ award","appreciation for my service's in Kolkata"]
// next button//


nxtBtn.addEventListener("click",()=>{
    counter++
    if(counter >= image.length){
        counter=0
        
    }
    console.log(counter)
    lists.src=image[counter];
    awardContent.innerHTML=`${content[counter].toUpperCase()}`
})













document.getElementById('skills').addEventListener('click', function (event) {
   event.preventDefault()
    let link = document.createElement('a');
    link.href = '../jpg_folder/portfolio.pdf';

    // Check if the download attribute is supported
    if (typeof link.download !== 'undefined') {
        link.download = 'Raj Portfolio';
    } else {
        // If not supported, open the file in a new tab
        window.open('../jpg_folder/Raj 2024.pdf', '_blank');
    }

    link.click();
});



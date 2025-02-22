/*making an function if width of window is smaller or eqaul to 932px then insiate new javascript file or if window width is larger then 932px then current javascript insiate*/
const window_width=window.matchMedia("(max-width: 932px)")


// Making an function for hiding and showing alert message



let scroll_message= document.getElementById("alertMessage")
let func_1=()=>{
    setTimeout(()=>{
        scroll_message.classList="show"
    },2000)
} // setting timeout for display alert message with an delay of 2 second



window.addEventListener("scroll",()=>{
    
    if(window.scrollY <=10){
        scroll_message.className="show"

    }
    else{
        scroll_message.className="hide"
    }
   }
) 


func_1() // calling an async function


// Making about animation //

let about = document.querySelector("h2");
let span_1 = about.childNodes[1]; //About-1
let span_2 = about.childNodes[3]; // About-2
let span_3 = about.childNodes[5]; // Me

// Function to perform the animation

    let func_2 = () => {
        let timeout1 = setTimeout(() => { 
            span_1.style.transform = "translateY(-85px)";
            span_2.style.transform = "translateY(85px)";
            span_3.style.color= "#1E90FF";
            span_3.style.fontSize="0.5em"
            span_3.style.visibility='visible'
        }, 2000);
    
        let timeout2 = setTimeout(() => {
            span_1.style.transform = "translateY(0)";
            span_2.style.transform = "translateY(0)";
            span_3.style.visibility = "hidden";
        }, 4000);
    
        return [timeout1, timeout2];  // Return the timeout IDs
    };


func_2()

// Cancel the auto animation when the timeouts are completed

if(window_width.matches){
    about.addEventListener('touchstart', ()=>{
        span_1.style.transform = "translateY(-85px)";
        span_2.style.transform = "translateY(85px)";
        span_3.style.fontSize="0.5em"
        span_3.style.color = "#1E90FF";
        span_3.style.visibility="visible"
    })

    about.addEventListener('touchend',()=>{
        span_1.style.transform = "translateY(0)";
        span_2.style.transform = "translateY(0)";
        span_3.style.visibility = "hidden";
    })
}
else{
    about.addEventListener('mouseover',()=>{
        span_1.style.transform = "translateY(-85px)";
        span_2.style.transform = "translateY(85px)";
        span_3.style.fontSize="0.5em"
        span_3.style.color = "#1E90FF";
        span_3.style.visibility="visible"
    })
    
    about.addEventListener('mouseout',()=>{
        span_1.style.transform = "translateY(0)";
        span_2.style.transform = "translateY(0)";
        span_3.style.visibility = "hidden";
    })
}



// Making an function that reduce the of about text when we scroll

let aboutContainer= document.getElementById("about-heading")
 

if(window_width.matches){
    window.addEventListener("scroll",()=>{
        
        let window_h=40-window.scrollY
        let window_em=11-window.scrollY
        console.log(window_h)
        if(window_h<=20){
          window_h=20
          console.log("height matched")
        }
        if(window_em<=5 ){
            window_em=5
            console.log("font-size matched")
        }
        
        about.style.fontSize=`${window_em}em`
        aboutContainer.style.height=`${window_h}vh`
    })
}
else{
window.addEventListener("scroll",()=>{
    
    let window_h_2=70-window.scrollY
    let window_em_2=21-window.scrollY
    if(window_h_2<=50){
    
      window_h_2=50}
    if(window_em_2<=11 ){
        window_em_2=11
    }
    
    about.style.fontSize=`${window_em_2}em`
    aboutContainer.style.height=`${window_h_2}vh`
})
}

 






// download button animation
let downbtn=document.querySelector("#buttons")
let dSpan_1= downbtn.childNodes[1]
let dSpan_2= downbtn.childNodes[3]
let dSpan_3= downbtn.childNodes[5]
let dAnchor= document.querySelector("#d2")

if(window_width.matches){
    downbtn.addEventListener('touchstart',()=>{
        // animation for half container of download
        dSpan_1.style.transform="translateX(-2px)";
        dSpan_1.style.rotate="60deg";
        dSpan_1.style.right="11%";
        
        // animation for other half container of download
        dSpan_2.style.transform="translateX(10px)";
        dSpan_2.style.rotate="120deg";
        dSpan_2.style.right="50%";
        // animation for cv container of download
        dSpan_3.style.visibility="visible"
    })}

else{
    downbtn.addEventListener("click",()=>{
    // animation for half container of download
    dSpan_1.style.transform="translateX(-10px)";
    dSpan_1.style.rotate="60deg";
    dSpan_1.style.right="30%";
    // animation for other half container of download
    dSpan_2.style.transform="translateX(10px)";
    dSpan_2.style.rotate="140deg";
    dSpan_2.style.right="50%";
    // animation for cv container of download
    dSpan_3.style.visibility="visible"

})}

// animation for making content container visible 

let content= document.querySelector("#main-wrapper")
let content_1= content.childNodes[1]
let content_2= content.childNodes[3]
let content_3= content.childNodes[5]


if( window_width.matches){
    window.addEventListener('scroll',()=>{
           console.log(window.scrollY)
        if(window.scrollY <=140){
            console.log("we are at the heading ")
            content_1.style.visibility="hidden"
            content_2.style.visibility="hidden"
            content_3.style.visibility="hidden"
            document.body.style.background="#FFFFF0"
        }

        if (window.scrollY >= 171){
            console.log("we are at the first container")
            content_1.style.visibility="visible"
        }
      
        
    
        if(window.scrollY >= 560){
            console.log("we are at the second container")
            content_1.style.visibility="hidden"
            content_2.style.visibility="visible"
        }
        
        
        if (window.scrollY >=1500){
            content_3.style.visibility="visible"
            content_2.style.visibility="hidden"
        }
        
    })
}
window.addEventListener('scroll',()=>{
     console.log(window.scrollY)
    if (window.scrollY >= 160){
        content_1.style.visibility="visible"
    }
    if(window.scrollY <=160){
        content_1.style.visibility="hidden"
        content_2.style.visibility="hidden"
        content_3.style.visibility="hidden"
        document.body.style.background="#FFFFF0"
    }
    

    if(window.scrollY >= 1200){
        content_2.style.visibility="visible"
        content_1.style.visibility='hidden'
    }
    
    
    if (window.scrollY >=2200){
        content_3.style.visibility="visible"
        content_2.style.visibility="hidden"
    }
    
})


let images= document.querySelectorAll(".image")


let contents = document.querySelectorAll(".content");

let  container= document.querySelectorAll(".image-content")
console.log(container)
if (window_width.matches) {
    let contents = document.querySelectorAll(".content");
    
    contents.forEach(item => {
        let isTouched = false; // Flag to track touch state

        item.addEventListener('touchstart', () => {
            if (!isTouched) {
                item.classList.add("touchIn");
                item.classList.remove("touchOut");
                item.style.background='linear-gradient(131deg, rgba(250,12,245,1) 9%, rgba(51,63,223,0.9585084033613446) 59%, rgba(1,18,236,0.7876400560224089) 75%, rgba(227,236,1,0.6839985994397759) 98%)';
                container.forEach(element=> {
                    element.style.background='linear-gradient(145deg, rgba(255, 250, 205, 1) 10%, rgba(173, 216, 230, 0.85) 50%, rgba(144, 238, 144, 0.7) 90%)';
                });
                

            } else {
                item.classList.remove("touchIn");
                item.classList.add("touchOut");
                item.style.background="none"
                item.style.background="none"
                container.forEach(element=> {
                    element.style.background="none"
                });

            
            }
               
            isTouched = !isTouched; // Toggle the touch state
        });
    });
}



contents.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add("touchIn");
        item.classList.remove("touchOut");
        item.style.background='linear-gradient(131deg, rgba(250,12,245,1) 9%, rgba(51,63,223,0.9585084033613446) 59%, rgba(1,18,236,0.7876400560224089) 75%, rgba(227,236,1,0.6839985994397759) 98%)';
        container.forEach(element=> {
            element.style.background='linear-gradient(145deg, rgba(255, 250, 205, 1) 10%, rgba(173, 216, 230, 0.85) 50%, rgba(144, 238, 144, 0.7) 90%)';
        });

    });

    item.addEventListener('mouseout', () => {
        item.classList.add("touchOut");
        item.classList.remove("touchIn");
        item.style.background='none'
        container.forEach(element=> {
            element.style.background="none"
        });
    });
});


let link= document.querySelector("#d2")
let href= '/jpg_folder/Raj 2024.pdf'
console.log(link)
link.addEventListener("click", (event)=>{
    event.preventDefault()
    
    if(link.href.download != undefined){
        link.download="Raj 2024.pdf"
    }
    else{
        window.open( '/jpg_folder/Raj 2024.pdf',"_blank")
    }

link.click()
})
    
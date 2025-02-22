// all images
let image1= document.querySelector("#about-image")
let image2= document.querySelector("#achivement-image")
let image3= document.querySelector("#awards-image")
const width_height= window.matchMedia("(max-width:932px)")
// scroll effects
let scroll= ()=>{
   window.addEventListener('scroll',()=>{
    let scroll_width= window.scrollY
    if(scroll_width <=700){
        image1.style.right=`0`;
        image1.style.bottom='0'
        image2.style.left='0'
        image2.style.bottom='0'
        image3.style.left='0'
        image3.style.bottom='0'
    }
    if(scroll_width >=700 ){
        image1.style.right=`${10}%`
        image1.style.bottom=`${10}%`
    }
    if(scroll_width >=1700){
        image2.style.left=`${10}%`; 
        image2.style.bottom=`${50}px`;
        
    }
    if(scroll_width >2550){
        image3.style.bottom=`${50}px`
        image3.style.right=`${50}px`
    }

   })
}

let scroll2=()=>{
    window.addEventListener('scroll',()=>{
        let scroll_width=window.scrollY
        console.log(scroll_width)
    })
}

if(width_height.matches){
    window.addEventListener("scroll",()=>{
        let scroll_width= window.scrollY
        if(scroll_width <=470){
            image1.style.right=`0`;
            image1.style.bottom='0'
            image2.style.left='0'
            image2.style.bottom='0'
            image3.style.left='0'
            image3.style.bottom='0'
        }
        if(scroll_width >=470 ){
            image1.style.right=`${10}%`
            image1.style.bottom=`${10}%`
        }
        if(scroll_width >=1300){
            image2.style.left=`${10}%`; 
            image2.style.bottom=`${50}px`;
            
        }
        if(scroll_width >1850){
            image3.style.bottom=`${50}px`
            image3.style.right=`${50}px`
        }
    })
}

scroll()

// Icons function

let facebook = document.querySelectorAll(".facebook")
let linkedin = document.querySelectorAll(".linkedin")
let mail = document.querySelectorAll(".mail")

facebook.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        item.style.color="blue"
    })
    
    item.addEventListener('mouseout',()=>{
        item.style.color="grey"
    })
});


linkedin.forEach(item=> {
    item.addEventListener('mouseover', ()=>{
        item.style.color="#0077B5 "
    })
    
    item.addEventListener('mouseout',()=>{
        item.style.color="grey"
    })
});


mail.forEach(item=>{

    item.addEventListener('mouseover', ()=>{
        item.style.color="red"
    })
    
    item.addEventListener('mouseout',()=>{
       item.style.color="grey"
    })
})





// sending mail for user who wanted to contact


let mailto= document.querySelectorAll(".mail")
mailto.forEach(item => {
    item.addEventListener("click",()=>{
    
        let href_link= 'mailto:gj75345@gmail.com' +
        '?subject= User Message' +
        '&body=' +  
         "I have recently visited your website and wanted to connect with you for some work. I was particularly impressed by the culinary skills you have, and I am eagerly waiting to connect with you." + '%0D%0A'+
         "Best Regards"
        
    
    window.location.href = href_link;
    })  
});



let submitBtn= document.querySelector("#submitbtn")


 let link_func=()=>{
    let name= document.getElementById("label-1").value.toUpperCase()
    let contact= document.getElementById("label-2").value
    let message = document.getElementById("label-4").value
    
    let href_link= 'mailto:gj75345@gmail.com' +
        '?subject=Message by user' +
        '&body=' +  
         "Dear Raj," + '%0D%0A'+
         `${message}`+ '%0D%0A' +
         name + '%0D%0A' +  contact + '%0D%0A' + 
         "Best Regards"
    window.location.href=href_link
}

submitBtn.addEventListener("click",link_func ) 

let input= document.querySelectorAll("input")
// clearing text when click

input.forEach(item =>{
    item.addEventListener("click",()=>{
        let name= document.getElementById("label-1").value
        let contact= document.getElementById("label-2").value
        let mail= document.getElementById("label-3").value
        let message = document.getElementById("label-4").value
        
        if(item.value==="Name" || item.value==="Contact Number" || item.value=="Mail Address" ||item.value=="Message" ){
            item.value=""
        }
      
    })
}) 
      
    
        

    


  
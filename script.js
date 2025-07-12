const hamburgerIcon = document.querySelector(".fa-bars") ; 
const crossIcon = document.querySelector(".fa-xmark") ;
const sideBar = document.querySelector(".sidebar") ;
const accordianContainer = document.getElementById("accordian-container") ;
const redirectButton = Array.from(document.getElementsByClassName("redirect")) ;  

//Window Resize Logic
window.addEventListener("resize" , ()=>{

    if(window.innerWidth >= 1000) {
        sideBar.classList.remove("visible") ;
        crossIcon.classList.remove("visible") ;
        hamburgerIcon.classList.remove("visible"); 
        
    } 
})

hamburgerIcon.addEventListener("click" , ()=>{
    sideBar.classList.add("visible") ; 
    crossIcon.classList.add("visible") ; 
    hamburgerIcon.classList.remove("visible");
})
crossIcon.addEventListener("click" , ()=>{
    sideBar.classList.toggle("visible") ; 
    crossIcon.classList.toggle("visible") ; 
    hamburgerIcon.classList.add("visible");
})

//Accordian Logic 

accordianContainer.addEventListener("click" , (event)=>{

    const element = event.target ; 
    const parent = element.closest(".accordian") ; 
    const accordianTextBox = parent.lastElementChild ; 
    const accordianArrows = Array.from(document.getElementsByClassName("fa-angle-down")) ;
    let sameClicked = false ; 

    //Getting list of arrow elements 

    //if- when the accordian already visible & again clicked
    if(!accordianTextBox.classList.contains("accordian-hide")) {
        sameClicked = true ;  
        accordianTextBox.classList.add("accordian-hide") ; 
        parent.classList.remove("accordian-open-style") ; 
        parent.classList.add("accordian-close-style") ; 
        accordianTextBox.classList.remove("accordian-animation")
    }else{
        accordianTextBox.classList.remove("accordian-hide") ;
        parent.classList.add("accordian-open-style") ;  
        accordianTextBox.classList.add("accordian-animation")

        //add this class to other elemnts but remove from current 
        const accordianTextBoxElements = Array.from(document.getElementsByClassName("acc-body")) ; 

        accordianTextBoxElements.forEach((textBox)=>{
            if(textBox != accordianTextBox){
                textBox.classList.remove("accordian-animation")
                textBox.closest(".accordian").classList.remove("accordian-open-style") ;  
                textBox.closest(".accordian").classList.add("accordian-close-style") ; 
                textBox.classList.add("accordian-hide") ; 
               
            }
        })

    }
    accordianArrows.forEach((arrowElement)=>{
        console.log(arrowElement) ; 

        if(arrowElement.closest(".accordian") == parent) { 
            arrowElement.classList.toggle("rotate-angle") ; 
        }else{
            arrowElement.classList.remove("rotate-angle") ;
        }
    })
})

//Button Redirect Logic
console.log(redirectButton) ;
redirectButton.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        console.log(button)
        const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });

    })
})

//Form Logic 

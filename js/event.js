/* FILTER EVENT */

const buttons=document.querySelectorAll(".filter-btn")
const cards=document.querySelectorAll(".event-card")

buttons.forEach(btn=>{
btn.onclick=()=>{

document.querySelector(".filter-btn.active").classList.remove("active")
btn.classList.add("active")

let filter=btn.dataset.filter

cards.forEach(card=>{

if(filter==="all"){
card.style.display="block"
}
else if(card.classList.contains(filter)){
card.style.display="block"
}
else{
card.style.display="none"
}

})

}
})



/* LIGHTBOX */

const lightbox=document.getElementById("lightbox")
const lightboxImg=document.getElementById("lightbox-img")

document.querySelectorAll(".event-card img").forEach(img=>{

img.onclick=()=>{
lightbox.style.display="flex"
lightboxImg.src=img.src
}

})

lightbox.onclick=()=>{
lightbox.style.display="none"
}



/* SCROLL ANIMATION */

function reveal(){

let reveals=document.querySelectorAll(".reveal")

reveals.forEach(el=>{

let windowHeight=window.innerHeight
let elementTop=el.getBoundingClientRect().top
let visible=100

if(elementTop<windowHeight-visible){
el.classList.add("active")
}

})

}

window.addEventListener("scroll",reveal)



/* COUNTER */

const counters=document.querySelectorAll(".counter")

counters.forEach(counter=>{

let update=()=>{

let target=+counter.dataset.target
let count=+counter.innerText

let inc=target/100

if(count<target){
counter.innerText=Math.ceil(count+inc)
setTimeout(update,30)
}else{
counter.innerText=target+"+"
}

}

update()

})


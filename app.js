let holder1 = document.getElementById("holder-1")
let content = document.querySelectorAll('content')
let boxProp = document.querySelector("box-prop")
let boxImg = document.querySelector("box-img")
let LPT = document.querySelector("landing-page-txt")
let nextBtn = document.querySelector("next-btn")

holder1.addEventListener('click', () => {

    window.open("checkout.html", "_self")
})

holder1.addEventListener('mouseover', () => {
    console.log("worked")
    holder1.classList.add("show")
})
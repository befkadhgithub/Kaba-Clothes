const content = document.querySelector('.content')
const container = document.querySelector(".container")
const nextBtn = document.querySelector("next-btn")
const navBtn = document.getElementById("Nav-btn")
const nav = document.getElementById("nav")
const navItems = Array.from(nav.children)
const loader = document.querySelector(".circle")
const carousel = document.querySelector(".carousel")
const track = document.querySelector(".carousel-track")
const slides = Array.from(track.children)
const leftBtn = document.querySelector(".left-btn")
const rightBtn = document.querySelector(".right-btn")
const dotsNav = document.querySelector(".carousel-nav")
const dots = Array.from(dotsNav.children)
const currentSlide = track.querySelector(".current-slide")
const menuIconBox = document.querySelector(".menu-icon-box")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")
const hiddenElements = document.querySelector(".hidden")
const content2 = document.querySelector(".content-2")

// Calculate and set the amount to slide the images

const slideWidth = slides[0].getBoundingClientRect().width

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)

// Show/ Hide previous and next buttons when at the beginning and when reaching the end, respectively

const amountToSlide = (track, currentSlide, currentDot, targetSlide, targetDot) => {
    track.style.transform = 'translateX( -'+ targetSlide.style.left +' )'
    currentSlide.classList.remove("current-slide")
    currentDot.classList.remove("current-slide")
    targetSlide.classList.add("current-slide")
    targetDot.classList.add("current-slide")
    leftBtn.classList.remove("is-hidden")
}

const ShowHideArrows = (targetIndex, slides) => {
    if(targetIndex === 0) {
        leftBtn.classList.add("is-hidden")
        rightBtn.classList.remove("is-hidden")
    }

    else if(targetIndex === slides.length - 1) {
        rightBtn.classList.add("is-hidden")
        leftBtn.classList.remove("is-hidden")
    }

    else {
        leftBtn.classList.remove("is-hidden")
        rightBtn.classList.remove("is-hidden")
    }
}

// right button slide

rightBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide")
    const nextSlide = currentSlide.nextElementSibling
    const currentDot = dotsNav.querySelector(".current-slide")
    const nextDot = currentDot.nextElementSibling
    const targetIndex = slides.findIndex(slide => slide === currentSlide) + 1
    
    amountToSlide(track, currentSlide, currentDot, nextSlide, nextDot)
    ShowHideArrows(targetIndex, slides)
})

// left button slide

leftBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide")
    const prevSlide = currentSlide.previousElementSibling
    const currentDot = dotsNav.querySelector(".current-slide")
    const prevDot = currentDot.previousElementSibling
    const targetIndex = slides.findIndex(slide => slide === currentSlide) - 1

    amountToSlide(track, currentSlide, currentDot, prevSlide, prevDot)
    ShowHideArrows(targetIndex, slides)
})

// slide the dots along with the image slides

dotsNav.addEventListener('click', e => {
    targetDot = e.target.closest('button')

    if(!targetDot) return

    const currentSlide = track.querySelector(".current-slide")
    const currentDot = dotsNav.querySelector(".current-slide")
    const targetIndex = dots.findIndex(dot => dot === targetDot)

    const targetSlide = slides[targetIndex]

    amountToSlide(track, currentSlide, currentDot, targetSlide, targetDot)
    ShowHideArrows(targetIndex, slides)
})

// Hover animation for the slides that works only once

track.addEventListener('mouseover', () => {

    track.classList.add("carousel-track-anim")

    return
})

// Make menu icons open and close navigations tab

menuIconBox.onclick = () => {
    menuIconBox.classList.toggle("active")
    nav.classList.toggle("active")


    colorChange(line1, line2, line3)

}

// Change the menu icons color to white when navigations tab is visible 

const colorChange = (line1, line2, line3) => {
    if(!line1.classList.contains("color-change") 
    && !line2.classList.contains("color-change") 
    && !line3.classList.contains("color-change")) {

        line1.classList.add("color-change")
        line2.classList.add("color-change")
        line3.classList.add("color-change")
    }

    else {
        line1.classList.remove("color-change")
        line2.classList.remove("color-change")
        line3.classList.remove("color-change")
    }
}

// Close the navigations tab upon clicking the document excluding ther navigations tab and the x-icon
    
document.onclick = (e) => {
    if (!menuIconBox.contains(e.target) && !nav.contains(e.target)) {
        menuIconBox.classList.remove("active")
        nav.classList.remove("active")

        if(line1.classList.contains("color-change") 
        && line2.classList.contains("color-change") 
        && line3.classList.contains("color-change")) {

            line1.classList.remove("color-change")
            line2.classList.remove("color-change")
            line3.classList.remove("color-change")
        }
    }
}

const dragging = (e) => {
    carousel.scrollLeft = e.pageX
}

carousel.addEventListener("mousemove", dragging)

// remove header when scrolling down



// add header when scrolling up

// Activating load animation

window.addEventListener("load", () => {
    loader.style.display = "none"
})
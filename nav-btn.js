const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")
const menuIconBox = document.querySelector(".menu-icon-box")
const nav = document.getElementById("nav")
const loader = document.querySelector(".circle")

const colorChange = (line1, line2, line3) => {
    if(!line1.classList.contains("color-change") && !line2.classList.contains("color-change") && !line3.classList.contains("color-change")) {
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

menuIconBox.onclick = () => {
    menuIconBox.classList.toggle("active")
    nav.classList.toggle("active")

    colorChange(line1, line2, line3)

}
    
document.onclick = (e) => {
    if (!menuIconBox.contains(e.target) && !nav.contains(e.target)) {
        menuIconBox.classList.remove("active")
        nav.classList.remove("active")

        if(line1.classList.contains("color-change") && line2.classList.contains("color-change") && line3.classList.contains("color-change")) {
            line1.classList.remove("color-change")
            line2.classList.remove("color-change")
            line3.classList.remove("color-change")
        }
    }
}

// Activating load animation

window.addEventListener("load", () => {
    loader.style.display = "none"
})
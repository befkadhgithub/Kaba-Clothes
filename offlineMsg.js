const offlineMessage = document.querySelector(".offlineMessage")
const offlineXBtn = document.querySelector(".menu-icon-box2")

offlineXBtn.addEventListener('click', () => {
    offlineMessage.style.display = "none"
    offlineXBtn.style.display = "none"
})

window.addEventListener("offline", () => {
    offlineMessage.style.display = "block"
    offlineXBtn.style.display = "block"
})

window.addEventListener("online", () => {
    offlineMessage.style.display = "none"
    offlineXBtn.style.display = "none"
})
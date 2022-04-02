const closeMessage = document.getElementById("close")
const message = document.getElementById("message")

closeMessage.addEventListener("click", function (){
    message.style.display = "none"
})
setTimeout(() => {
    message.style.display = "none"
}, 3000)
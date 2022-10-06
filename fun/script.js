let redbtn = document.querySelector(".red")
let bluebtn = document.querySelector(".blue")
let yellowbtn = document.querySelector(".yellow")
let greenbtn = document.querySelector(".green")
let orangebtn = document.querySelector(".orange")
let body = document.querySelector(".body")
let colourName = document.querySelector(".colourName")


redbtn.addEventListener("click", function () {
    colourName.style.color = "red";
    colourName.innerText = "RED"
})
yellowbtn.addEventListener("click", function () {
    colourName.style.color = "yellow";
    colourName.innerText = "YELLOW"
})
greenbtn.addEventListener("click", function () {
    colourName.style.color = "green";
    colourName.innerText = "GREEN"
})
bluebtn.addEventListener("click", function () {
    colourName.style.color = "blue";
    colourName.innerText = "BLUE"
})
orangebtn.addEventListener("click", function () {
    colourName.style.color = "orange";
    colourName.innerText = "ORANGE"
})
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient () {
    var linearGradient = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    body.style.background = linearGradient;
    button.style.background = linearGradient;
    css.textContent = body.style.background + ";";
}

function generateRandomColor() {
    var n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

function randomGradient () {
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    setGradient();
}

body.onload = function () {setGradient()};
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);
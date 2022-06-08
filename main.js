const box = document.getElementById("mainBox");


// box dimensions

const boxWidth = document.getElementById("width");
const boxHeight = document.getElementById("height");

// box border 

const topLeftBorder = document.getElementById("top-left");
const topRightBorder = document.getElementById("top-right");
const bottomLeftBorder = document.getElementById("bottom-left");
const bottomRightBorder = document.getElementById("bottom-right");

// Default box values

let boxWidthValue = 60;
let boxHeightValue = 60;

let topLeft = 0;
let topRight = 0;
let bottomLeft = 0;
let bottomRight = 0;

// functions

function updateBoxDimentions() {
    box.style.width = boxWidthValue + "px";
    box.style.height = boxHeightValue + "px";
}

function updateBoxBorder() {
    box.style.borderTopLeftRadius = topLeft + "px";
    box.style.borderTopRightRadius = topRight + "px";
    box.style.borderBottomLeftRadius = bottomLeft + "px";
    box.style.borderBottomRightRadius = bottomRight + "px";
}

//

boxWidth.addEventListener("change", (event) => {
    boxWidthValue = boxWidth.value;
    updateBoxDimentions();
    
})

boxHeight.addEventListener("change", (event) => {
    boxHeightValue = boxHeight.value;
    updateBoxDimentions();
})


topLeftBorder.addEventListener("change", (event) => {
    topLeft = topLeftBorder.value;
    updateBoxBorder();
})

topRightBorder.addEventListener("change", (event) => {
    topRight = topRightBorder.value;
    updateBoxBorder();
})

bottomRightBorder.addEventListener("change", (event) => {
    bottomRight = bottomRightBorder.value;
    updateBoxBorder();
})

bottomLeftBorder.addEventListener("change", (event) => {
    bottomLeft = bottomLeftBorder.value;
    updateBoxBorder();
})

// styling

const normal = document.querySelector(".normal");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const currentStyle = document.getElementById("style");  

window.onload = function(){
    storedTheme = localStorage.getItem("theme");
    currentStyle.setAttribute("href", storedTheme);
}

function updateTheme(){
    localStorage.setItem("theme", currentStyle.getAttribute("href"))
}

normal.onclick = function(){
    currentStyle.setAttribute("href", "css/main.css");
    updateTheme();
}

yellow.onclick = function(){
    currentStyle.setAttribute("href", "css/yellow.css")
    updateTheme();
}

blue.onclick = function(){
    currentStyle.setAttribute("href", "css/blue.css");
    updateTheme();
}

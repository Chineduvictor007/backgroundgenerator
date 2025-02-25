// from 2 to 5 is  smply the getting the html Dom element
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector("body");
const header3 = document.querySelector("h3");
// end of getting the html Dom  element

const setGradient = () =>{
    body.style.background = "linear-gradient(to right,"+ color1.value +", "+ color2.value +")";
    header3.textContent = body.style.background + ";";
};

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
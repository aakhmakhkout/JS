let maindiv = document.querySelector("#main");
let navbar = document.querySelector("#nav")
let links = document.querySelectorAll(".links");

navbar.addEventListener("click", () => {
    alert("clicked");
})

//? Bubbling Phase
let list = document.querySelector("#list");
let fruitList = document.querySelector("ul");

fruitList.addEventListener("click", (targetVal) => {
    let element = targetVal.target;
    // element.style.textDecoration = "line-through";
    element.classList.toggle("linethrough");
    console.log("Fruit list item clicked");
})

list.addEventListener("click", () => {
    list.style.backgroundColor = "purple";
    console.log("Fruit main div clicked")
})

//? Capturing Phase

let vegelist = document.querySelector("#vegetable-list");
let vegList = document.querySelector(".veglist");

 vegList.addEventListener("click", (targetVal) => {
    targetVal.target.classList.toggle("linethrough");
    console.log("Vegetable list item clicked");
 })

 vegelist.addEventListener("click", () => {
    vegelist.style.backgroundColor = "green";
    console.log("veg main div clicked")
 }, true)

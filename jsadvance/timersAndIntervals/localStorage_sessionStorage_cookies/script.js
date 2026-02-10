//! Local Storage: {stores only strings}

//? Store Data
localStorage.setItem("whoami", "Kaneki"); //* also overwrites new entry
localStorage.setItem("age", 22);
localStorage.setItem("ID", 3201);
//todo:  add other items in local storage (using JSON.stringfy - converts anything into string)
localStorage.setItem("skills", JSON.stringify(["Front-end web dev", "Robotics", "Git and github", "C++", "Python"]));


//? Fetch/Get data
let myName = localStorage.getItem("whoami");
console.log(myName);
console.log(localStorage.getItem("age"));
console.log(JSON.parse(localStorage.getItem("skills"))); //todo: JSON.parse reverses the effect of JSON.stringfy

//? Remove one item.
localStorage.removeItem("ID");

//? Remove all items
// localStorage.clear();

//! Session Storage:

//? Store Data
sessionStorage.setItem("whoami", "Kaneki"); //* also overwrites new entry
sessionStorage.setItem("age", "22");
sessionStorage.setItem("ID", "3201");

//? Fetch/Get data
let myName2 = sessionStorage.getItem("whoami");
console.log(myName);
console.log(sessionStorage.getItem("age"));

//? Remove one item.
sessionStorage.removeItem("ID");

//? Remove all items
// sessionStorage.clear();

//! Cookies:

//? Create a cookie
document.cookie = "user=kaneki";

//? Read cookies
console.log(document.cookie);

//? Delete a cookie
document.cookie = "user=";
console.log(document.cookie);

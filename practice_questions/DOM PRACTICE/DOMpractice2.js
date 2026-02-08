//? question 1: Create a new button element. give it a text click me, background color of red and text color of white and also insert the button as the first element inside the body tag.

let mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "main-div");

let ourbody = document.querySelector("body");

ourbody.style.backgroundColor = "black";

ourbody.append(mainDiv);

let ourheading = document.createElement("h1");
ourheading.innerText = "hello this is dom manipulation practice";
ourheading.style.color = "purple";

let ourquestion = document.createElement("p");
ourquestion.innerText = "Create a new button element. give it a text click me, background color of red and text color of white and also insert the button as the first element inside the body tag";
ourquestion.style.color = "white";

let ourbtn = document.createElement("button");
ourbtn.innerText = "click me";
ourbtn.style.backgroundColor = "red";
ourbtn.style.color = "white";
ourbtn.style.padding = "5px";
ourbtn.style.border = "none";
ourbtn.style.borderRadius = "10px";

mainDiv.append(ourheading, ourquestion);
ourbody.prepend(ourbtn);

//? question 2: create a <p> tag in html, give it a class and some styling. now create a new class in css and try to append this class to the <p> element, did you notice, how you overwrite the class name when you add a new one, solve this problem using classList.

let ourpara = document.querySelector(".ques-2");
console.log(ourpara);

// ourpara.setAttribute("class", "ques-2-new"); //* it removes the ist class and adds new one

//* so to solve this we can use classList.
//* classList = built-in object that tells us:
//* which classs the element currently has and lets us change them easily

ourpara.classList.add("ques-2-new");
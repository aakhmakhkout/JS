//! EVENTS IN JS: the change in the state of an object is known as an event. Events are fired to notify code of "interesting changes" thta may affect code execution.

//? Event types: mouse events (click, double click or hover etc), keyboard events (typing, keyup, keydown), form events (submit, reset etc), print events and more

//? Event handling: it is the process of detecting when something happens on a webpage (like a click, key press, scroll, input) and running a function in response.

//* inline event handling = handling events inside html tag. -> not got, makes html code complex and bulky, instead of which we handle events as functions inside js file. 

//* node.event = () => { // handle here};
 
//? mouse events
//* onclick = creates event when element is clicked and we can make any changes. eg button
//* ondblclick = create event when we double click on the element. eg button
//* onmouseover = creates event when mouse is hovered on the element. eg any div or paragraph

//todo: make a event handling function, when button is clicked, it should increment by 1.

let ourElement = document.querySelector("#btn1");
let count = 0;
console.log(ourElement);

ourElement.onclick = () => {
    count+=1;
    console.log(count);
}

let ourDiv = document.querySelector("#div-hover");

ourDiv.onmouseover = () => {
    ourDiv.innerText = "gotchaa";    
}
 
//* NOTE: 1: if we have handled event both inside html tag (inline) and in js file (external) for the same element, then js has more priority than inline.

//* 2. if we use the same event handler 2 times for same element, the last written code will overwrite the previous code.

//! EVENT OBJECT : it is a special object that has details about the event. Event object is a tiny report the browser hands to the event handler every time something happens.A click, a key press, a mouse move — each one creates a little “file” full of details. and the event handler receives that file as a parameter. all event handlers have access to the event object's properties and methods.

//? why do we need event object: Without the event object, our function knows that something happened……but not anything about the event.

//? With the event object, your function can answer questions like: Which button was clicked?What key was pressed? What is the mouse X/Y position? What element triggered the event? Did the user hold Shift/Ctrl? and what was the event type (click, hover, double click etc) etc.

//todo: some imp event objects

let ourdetails = document.querySelector("#evtobj");

evtobj.onclick = (evt) => {  //* event object passed as a variable to the handler.

    console.log(evt); //* full event file
    
    console.log(evt.target); //* 1: event.target: the element that the user interacted with (our the element on which the event happened)
    
    console.log(evt.type); //* 2: event type: The event name (click, dblclick, mouseonover)
    
    console.log(evt.clientX); //* 3: Mouse event properties: event.clientX = x axis cordinates of the event, if event is from mouse
    
    console.log(evt.clientY); //* y axis cordinates.
    
    console.log(evt.button); //* which mouse button.
}

//! Event listeners:  it is another way of event handling in js, An event listener in JavaScript is a function that waits for a specific event, and when the event occurs, it runs your code. 

//todo 1: We can add multiple listeners to the same event, which we cannot do in external event handling as we learned perviously.

//* node.addEventListener(event, callback). $ Event = anything happens on a webpagem, clicking, keypress, scrolling, loading, hovering, $ Callback = a function that is passed as an argument to the another function. and the callback is called handler -- which handles the event.

//? Accessing Elements.
let ourevtlisdiv = document.querySelector("#evtlisdiv");
console.log(ourevtlisdiv);

let ourimg = document.querySelector("#imgs");
console.log(ourimg);

let ourbtn1 = document.querySelector("#evtlisBtn1");
console.log(ourbtn1);

let ourbtn2 = document.querySelector("#evtlisBtn2");
console.log(ourbtn2);

//? changing picture and console.log -> text + event object.
ourbtn1.addEventListener("click", (evt) => {
    ourimg.src = "./picture2.jpg"
    console.log(evt.target);
});

ourbtn1.addEventListener("click", () => {
    console.log("the picture has been changed...!");
});

//* ourbtn1.addEventListener("click", () => {
//*     console.log("img changed");
//* });

const event3 = () => {
    console.log("img changed");
}

ourbtn1.addEventListener("click", event3);

ourbtn1.addEventListener("click", () => {
    ourevtlisdiv.style.backgroundColor = " rgb(40, 97, 80)";
});

//? resetting picture and console.log -> text + event object.
ourbtn2.addEventListener("click", (evt) => {
    ourimg.src = "./picture1.jpg";
    console.log(evt.type);
});
ourbtn2.addEventListener("click", () => {
    console.log("the picture has been resetted...!");
});

//* ourbtn2.addEventListener("click", () => {
//*     console.log("img resetted");
//* });

const event4 = () => {
    console.log("img resetted");
}

ourbtn2.addEventListener("click", event4);

ourbtn2.addEventListener("click", () => {
    ourevtlisdiv.style.backgroundColor = " rgb(48, 46, 46)";
});

//todo: We can remove specific listeners. -> node.removeEventListener(event, callback);
//* Note: the callback reference should be same to remove.

//* ourbtn1.removeEventListener("click", () => {
//*     console.log("img changed");
//* });
//? this will not work, cause they are different functions with seperate memory locations..... therefore we should make a seperate function.

ourbtn1.removeEventListener("click", event3);
ourbtn2.removeEventListener("click", event4);

//! QUESTION: Create a toggle button that changes the screen to dark-mode when clicked and light mode when clicked again.
//* toggle = changing from one state to another and another state to ist again.

let tglbtn = document.querySelector("#tglbtn");
let body = document.querySelector("body");

let crmode = "light";

let modechange = () => {
    if(crmode === "light") {
        crmode = "dark";
        body.classList.add("darkmode");
        body.classList.remove("lightmode");
        tglbtn.classList.add("toggle-dark-btn");
        tglbtn.classList.remove("toggle");
        tglbtn.innerText = "Dark mode";
    }
    else{
        crmode = "light";
        body.classList.add("lightmode");
        body.classList.remove("darkmode");
        tglbtn.classList.add("toggle");
        tglbtn.classList.remove("toggle-dark-btn");
        tglbtn.innerText = "Light mode";
    }
};

tglbtn.addEventListener("click", modechange);

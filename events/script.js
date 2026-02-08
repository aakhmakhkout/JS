//todo: double click: dblclick -> on double click the text becomes bigger and on next double click the text becomes small...

let para = document.querySelector("#para");

para.addEventListener("dblclick", () => {
    para.classList.toggle("para-dblclick");
});


//* Mouseover/mouseenter using addEventListeners -> triggers whenever the pointer enters an element or any of its children...

//* mouseout/mouseleave -> triggers when the mouse leaves an element, great for undoing the hover effect.

//todo: changes the text, background and other properties on hover and when not hovering, changes back to normal.

let ourdiv = document.querySelector("#box1");

ourdiv.addEventListener("mouseover", () => {
    ourdiv.classList.remove("div1");
    ourdiv.classList.add("hoverondiv"); 
    ourdiv.innerText = "gotchaaaaaa";
})

ourdiv.addEventListener("mouseout", () => {
    // ourdiv.classList.add("div1");
    // ourdiv.classList.remove("hoverondiv"); 
    ourdiv.classList.replace("hoverondiv", "div1");
    ourdiv.innerText = "Hover again";
})

//* keydown -> triggers the instant a key is pressed down;
//* keyup -> when key is released
//todo: when a character is pressed, increment the count, excluding control character.

let inputtext = document.querySelector("#keydownevent");
let outputtext = document.querySelector("#output");
let count = 0;

inputtext.addEventListener("keydown", (evt) => {
    // outputtext.value = count;
    console.log(evt.key);
    // if(evt.key === 'Backspace') {
    //     if(count === 0) {
    //         outputtext.value = 0;
    //     }
    //     else {
    //         count-=1;
    //         outputtext.value = count;
    //     }
    // }
    // else{
    //     count+=1;
    //     outputtext.value = count;
    // }
    if(evt.key === "Backspace") {
        if(count > 0) count--;
    }
    else if (evt.key.length === 1) { //* works for characters not for control characters (ctrl, shift, tab, cause there length is long)
        count++;
    }
    outputtext.value = count;
});

//* input event: triggers whenever the content inside an input box changes.

//todo: whatever we write as input gives us paragraph as output, and if the character lenth is greater than 100, then it warns us.

let ourInputText = document.querySelector("#inpevt");
let ourpara = document.querySelector("#inputevtoutput");

ourInputText.addEventListener("input", (evt) => {
    ourpara.innerText = evt.target.value;
    if(evt.target.value.length > 100) {
        // alert("character limit is 100");
        evt.target.value = evt.target.value.slice(0,100);
    }
})







let emailInp = document.querySelector("#emailInp");

let passInp = document.querySelector("#passInp");

let showpass = document.querySelector("#showpass");

let validateBtn = document.querySelector("#validatebtn");

let emailErrormsg = document.querySelector("#emailErrorMsg");

let passErrormsg = document.querySelector("#passErrorMsg");

let successmsg = document.querySelector("#successmsg p");

showpass.addEventListener("click", (event) => {
    event.preventDefault();
    if(passInp.type === "text") {
        passInp.type = "password";
    }
    else {
        passInp.type = "text";
    }
});

validateBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

emailErrormsg.style.visibility = "hidden";
passErrormsg.style.visibility = "hidden";
successmsg.style.visibility = "hidden";


let isEmailValid = emailRegex.test(emailInp.value);

let isPassValid = passRegex.test(passInp.value);

if(!isEmailValid) {
    emailErrormsg.style.visibility = "initial";
}

if(!isPassValid) {
    passErrormsg.style.visibility = "initial";
}

if(isEmailValid && isPassValid) {
    successmsg.style.visibility = "initial";
}
})
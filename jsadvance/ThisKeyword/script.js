//! this keyword: special keyword, because unlike all other keywords (whose value and nature doesn't change) this keywords value or nature changes according to where we are using it.

//? this refers to the object that is currently calling the function.

//todo: in the global scope: this refers to the window object(in browser), and undefined in strict mode(nodejs)
console.log(this); //* in browser it logs to window object, cause in that environment, the global object is window.

//todo: inside a function: 

function greeting() {
    console.log(this);
}

greeting(); //* this is the global object here in non-strict mode and undefined in strict mode, because no object called it, it was just called normally.

//todo: inside an object method: 

let user = {
    username: "kaneki",
    password: "kaneki6677",

    getInfo: function() {
        console.log(this, this.username, this.password);
    }
}

user.getInfo(); //* here this refers to user. because user is calling getInfo, so this becomes user, and this.name means user.name, the object before the dot becomes this.

//todo: this in event handlers 

// document.querySelector("#btn").addEventListener("click", ()=> {
// console.log(this);
// }) //* this doesn't refer to the btn here, it refers to the window object, because arrow functions do not create their own this, they copy this from where they are written, and if the code is in global scope, then this becomes the global object

//? normal function = this - element
//? arrow funtion = this - outer scope (not the element)

document.querySelector("#btn").addEventListener("click", function() {
console.log(this);
this.style.backgroundColor = "red";
}) //* here this refers to the btn element. because btn is triggering (calling) the function when the event happens.

//todo: this in classes.


class users {
    constructor(name, email, id) {
        this.username = name;
        this.email = email;
        this.id = id;
    }

    getDetails() {
        console.log(`Username = ${this.username}\nEmail = ${this.email}\nId = ${this.id}`);
    }
}

let user1 = new users("kaneki", "kaneki@gmail.com", 320157); //* js creates a new empty object and sets this to that object.
let user2 = new users("touka", "touka@gmail.com", 320155);
let user3 = new users("isagi", "isagi@gmail.com", 320151); 

user1.getDetails();
user3.getDetails();
 

//! Manual Binding: call(), bind(), apply(): these are the tools that lets us manually control what this should be. (this is decided by how a function is called)

//? call() : runs the function immediately and lets us choose what this is. (arguments are passed by seperated commas)

function sayMyName(age) {
    console.log("Hello " + this.myName + "\nage : " + age);
}

let me = {
    myName: "kaneki"
}

sayMyName(); //* this will be hello undefined because the funtion is being called normally.

//todo: now if we do this.

sayMyName.call(me, 22); //* now this refers to the object "me".


//? apply(): is almost same as call but the arguments are passed as an array.

sayMyName.apply(me, [22]);

//? bind(): bind doesn't run the function immediately, it creates a new function where this is permanently fixed. we can also prefill arguments

let bounded = sayMyName.bind(me, 22);

bounded();
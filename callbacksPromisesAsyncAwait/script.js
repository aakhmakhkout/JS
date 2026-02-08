//! Sync = Synchronous :- it means the code runs in a perticular sequence of instructions give in the program. Each instruction waits for the previous instruction to complete its execution.

console.log("one"); 
console.log("two");
console.log("three"); //* instructions

//! Asynch = Asynchronous :- Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

//* Js delegates slow tasks.
//* continues executing other code
//* comes back when the slow task is done

//* like: timers, network requests (API calls), file reading, Database operations.


//? setTimeout() :- lets us decide when our function or instruction should execute.

console.log("start");
 setTimeout(() => {  //* Runs parallely, while executing the next instructions.
    console.log("In Progress")
}, 2000); //todo: 2 sec = 2000ms

console.log("stop");

//* Async code always waits for synchronous code to finish (even the timer is 0);

console.log("1");
setTimeout(() => {
    console.log("2")    
}, 0);

console.log("3");

//! Callbacks: A callback is a function passed as an argument to another function.

//? Eg, (synchronous)

function sum(a, b) {
    return a+b;
}

function sub(a, b) {
    return a-b;
}

function mul(a, b) {
    return a*b;
}

function div(a, b) {
    return a/b;
}



function calculator(value1, value2, operation) {
   let result = operation(value1, value2);
   return result;
}

console.log(calculator(10, 5, sum));
console.log(calculator(10, 5, sub));
console.log(calculator(10, 5, mul));
console.log(calculator(10, 5, div)); //* we are not using (), cause then it will execute immediately, but we want to pass it as an argument to another function so we let the calculator function call to decide when to call the sum() or other functions.


//? Asynchronous callback.

const hello = () => {
    console.log("Hello");
}

setTimeout(hello, 2000); //* Hello is the callback function here

//todo: setTimeout itself is a callback function, cause it calls itself back when the other instructions are executed.

//? eg 2: load user data

//* Data on server.
class usersData{
    constructor(username, emailid, password, contactno) {
        this.username = username;
        this.email = emailid;
        this.password = password;
        this.contactno = contactno;
    }
}

let user1 = new usersData("root.kaneki", "kaneki@gmail.com", "catchme", "88******77");

function user1data() {
    console.log(`Username : ${user1.username}`);
    console.log(`Email ID: ${user1.email}`);
    console.log(`Password : ${user1.password}`);
    console.log(`Contact Info : ${user1.contactno}`);
}


function fetchData(datafun) {
   setTimeout(() => {
    console.log(`user data is loaded :`)
    datafun();
   }, 2000);
}


//? accessing data

//* let data = fetchData();
//* console.log(data);    this approach is not asynchronous callback


console.log("start loading user1 data");

fetchData(user1data);

console.log("In Progress, user1 data will be visible below after loading completely");

//! Callback Hell: Nested callbacks stacked below one another forming a pyramid structure (pyramid of doom). This style of programming becomes difficult to understand and manage.

//?it happens when we have many async operations, each one depends on the previous  one, and we nest callbacks inside callbacks. so it becomes like a pyramid of doom. E.g if we are getting an user on facebook, then user's posts, then user's comments, then comment replies, each step depends on the previous one.

//* The callback hell is not wrong, but it scales terribly.


//? eg

//* lets say this is our database on server side

class dataBase {
    constructor(user, userEmail, userPosts, userComments, commentReplies) {
        this.usrname = user;
        this.userEmail = userEmail;
        this.userPosts = userPosts;
        this.userComments = userComments;
        this.commentReplies = commentReplies;
    }
}


let userkaneki = new dataBase("kaneki", "kaneki@gmail.com", "post1", "amazing", "thanks");
let usertouka = new dataBase("touka", "touka@gmail.com", "post1", "great video", "arigato");
let useryoichi = new dataBase("yoichi", "yoichi@gmail.com", "post1", "keep it up", "sure bro");

function userlist() {
    let usernames = ["kaneki", "touka", "yoichi"];
    return usernames;
}

function fetchUserData(dataFunc) {
    setTimeout(() => {
        dataFunc();
    }, 2000);
}


//* and now we are requesting for some users data (which takes time to fetch)
let user = "kaneki"; //* like searching someones name
let isUserExist = false;

// fetchUserData((userinfo)
// console.log(userlist());
let people = userlist();

// for (val of people) {
//     if(user === val) {
//         isUserExist = true;
//     };
    
    if(people.includes(user)) {
        fetchUserData(() => {
            console.log("user :", userkaneki.usrname);
            fetchUserData(()=> {
                console.log("user posts : ", userkaneki.userPosts);
                fetchUserData(()=> {
                    console.log("user post comments : ", userkaneki.userComments);
                    fetchUserData(()=> {
                        console.log("user post comment Replies : ", userkaneki.commentReplies);
                    })
                })
            })
        })
    }


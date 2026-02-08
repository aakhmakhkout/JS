//! Promises: Promise is for "eventual" completion of task. It is an object in js. It is a solution to callback hell. promises are not asynchronous

//? It is an object that represents a value that is not available yet, but will be available in the future, or will fail. A promise is not the value but a guarantee for the future.

//todo: Promise states: a promise can be in exactly one of these:
//* pending -- still working
//* fulfilled -- success, value is ready --> resolved
//* rejected -- failed, error occurred.

//* and once settled (fulfilled/rejected), it never changes.

let promise = new Promise((resolve, reject) => { //? resolve/reject are callback functions created by js automatically. and promise starts with pending.
    console.log("hello world");
    resolve("data has been received");
    // reject("data not present");
})

// console.log(promise); //* before adding resolve/reject in the promise, the state will be pending.
console.log(promise); //* after adding resolve/reject in the promise, the state will be fulfilled or rejected(error).

//! To use promises, we use .then() and .catch() : when we request any api for data (promise) and we get promise, which will be fulfilled or rejected, so if promise is fulfilled we use .then() and if rejected we use .catch

//? Note: promises are created by other people and we use api's to get data.

class users {
    constructor(username, email, phoneNo, security_code, secret_data) {
        this.username = username;
        this.email = email;
        this.phoneNo = phoneNo;
        this.security_code = security_code;
        this.secret_data = secret_data;
    }
}

let user1 = new users("user@1", "user1@gmail.com", "91*****47", 10, "whoamiisthecodeforyourmachine");
let user2 = new users("user@2", "user2@gmail.com", "91*****42", 12, "youarenotauthorisedtoaccessthemachine");
let user3 = new users("user@3", "user3@gmail.com", "91*****35", 14, "root.kanekiisyourmachinecode");
let user4 = new users("user@4", "user4@gmail.com", "91*****24", 15, "root.isagiisyourmachinecode");

function userList(searchedUser, userSecurityCode){
        let ourUsers = [user1, user2, user3, user4];
        for(users of ourUsers) {
            if(users.username === searchedUser && users.security_code === userSecurityCode) {
                // userExists = true;
                return users;
            }
        }
return false;
    }

function details(userData) {
    console.log(`username = ${userData.username}\nemail = ${userData.email}\nphone no = ${userData.phoneNo}\nsecurity code = ${userData.security_code}\nSecret Data ${userData.secret_data}`);
}

function getData(searchUser, userSecCode) {
    // console.log(userList(searchUser, userSecCode));
    // console.log(userExists);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let checkUser = userList(searchUser, userSecCode);
            if(checkUser) {
                // details(checkUser);
                resolve(checkUser);
            }
            else {
                reject("Username or passkey mismatch");
            }
        }, 3000);
    })
}

let searchUsername = "user@2";
let security_code = 12;
console.log("Loading....")
let ourData = getData(searchUsername, security_code);
ourData.then((user) => {
    details(user);
})
.catch((error) => {
    console.log(error)
})









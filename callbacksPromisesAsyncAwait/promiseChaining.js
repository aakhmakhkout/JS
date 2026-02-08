//! Promise chain - Running async tasks one after another, where each step starts after the previous one finishes. using .then() -- each .then() waits for the previous promise, receives its result, and can return a new promise. the returned promise becomes the next link in the chain..

class database {
    constructor(username1, posts, post_likes,  postcomments) {
        this.username1 = username1;
        this.posts = posts;
        this.post_likes = post_likes;
        this.postcomments = postcomments;
    }
}
let user01 = new database("kaneki", "post1", 10, ["good content", "nice", "keep it up"]);
let user02 = new database("touka", "post2", 15, ["good", "wow", "amazing"]);
let user03 = new database("isagi", "post3", 101, ["fire", "damn bro"]);
let user04 = new database("yoichi", "post4", 234, ["well explained", "good job", "now i get it"]);

function data(userName) {
    let userlist = [user01, user02, user03, user04];
    for(let users of userlist) {
        if(userName === users.username1) {
            return users;
        }
    }
return false;
}


// function getPosts(userPosts) {
//     let userP = data(userPosts)
//     return new Promise((resolve) => { 
//         setTimeout(() => {
//             if(userP) {
//                 resolve(userP.posts);
//             }
//         }, 2000);
//     })
// }
// function getLikes(userLikes) {
//     let userL = data(userLikes)
//     return new Promise((resolve) => { 
//         setTimeout(() => {
//             if(userL) {
//                 resolve(userL.post_likes);
//             }
//         }, 2000);
//     })
// }
// function getComments(userComments) {
//     let userC = data(userComments)
//     return new Promise((resolve) => { 
//         setTimeout(() => {
//             if(userC) {
//                 resolve(userC.postcomments);
//             }
//         }, 2000);
//     })
// }


function getData(userName){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let checkUser = data(userName);
            if(checkUser) {
                resolve(checkUser)
            }
            else {
                reject("user not found");
            }
        }, 2000)
    })
}

let userName = "isagi";


console.log("Fetching username: ")
getData(userName).then((user) => {
    console.log(user.username1);
    console.log("fetching posts");
    return user;
}).then((user) => {
    console.log(user.posts);
    console.log("fetching likes");
    return user;
}).then((user) => {
    console.log(user.post_likes);
    console.log("fetching comments");
    return user;
}).then((user) => {
    console.log(user.postcomments);
}).catch((err) => {
    console.log(err);
})
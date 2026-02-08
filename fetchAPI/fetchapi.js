//! Fetch Api: Application Programming Interface.
//? API: An API is a way for one program to talk to another program and ask for data or services. (just communication rules).

//* Why apis exist? Programs cannot directly access each other's database, internal logic, servers (for security reasons), so programs expose APIs to control what can be accessed and how.

//? The fetch API provides an interface for fetching(sending/receiving) resources. uses ajax technique
//? it uses request and response objects.
//? The fetch() method/function is used to fetch a resource(data). it works cleanly with promises, fit perfectly with async/await, make API calls readable and predictable.

//* fetch() is asynchronous, means it does not run data immediately, it returns a promise.
//* eg, let data = fetch(url).
    //* console.log(data)  ||= Promise, not our data.

const URL = "https://jsonplaceholder.typicode.com/users";
// let promiseVar = fetch(URL);
// console.log(promiseVar);  //todo: here we will get a pending promise as an output and a few seconds later the promise will be fullfilled.

async function getAPIdata() {
    let promiseVar = await fetch(URL); //* this will not return anything until the promise will be fullfilled, hence this function will be paused here and console.log(promiseVar) will be only executed after the fetch(url) promise is settled.
    console.log(promiseVar); //todo: here we will get the response of the api. {json format = ajaj/ajax}
    console.log(promiseVar.status); //todo: status of the response.
}

getAPIdata();

//? Requests: CRUD (HTTP verbs are words that tell the server what action you want to perform on a resource.)
//? GET -- give me something, this request is used when we only want data, nothing changes on the server. opening a website, searching products, viewing profile.

//? POST -- used when we want to send new data to the server. like signing up, logging in, posting a comment. (creates new data, data is sent secretly in the body(not in the url))

//? PUT -- Replaces the data completely, used to update the existing data fully. eg editing our profile and replacing all details. (updates everything, if something is missing, it may be overwritten)

//? PATCH -- change just this part, used to update only a small piece of data. eg changing our username, not the whole profile.

//? DELETE -- Removes data, used to delete data, eg delete a post, delete user, removes permanently (until server supports backup)

//? HEAD -- it is like GET, but without the actual data. eg checking if a file exists before downloading.

//* When we use fetch(url) without any options added, we are using GET request.

//! Understanding some Terms:

//! AJAX: is asynchronous JS and XML -- OLD (it is a technique that lets a webpage talk to server and get data without(with in old) reloading the page) in XML format. (A data format is the shape in which data is written, sent, or stored.). fetch() uses ajax but with json, only the term is common. 

//! JSON -- javascript object notation -- json is a lightweight data format used to send and receive data between programs. NO CODE, NO LOGIC , JUST DATA... JSON is simple, language independent, lightweight, and it looks like JS objects.

//todo: Difference between JS objects and JSON

//* JSON keys must be in double quotes like "name" : "kaneki", "age" : 31
//* JSON has no functions
//* JSON is pure data

//! json()method: It returns a second promise that resolves with the result of parsing the response body text as JSON. (INPUT AS JSON, OUTPUT IS JS OBJECT)

//? when we fetch(url), we get a response (a promise) in return, which is not our actual data, is but a api response(JSON) which contains status code, headers, body(raw data stream) and the body is still unread, json() converts the JSON into js object by returning a promise. 

//todo: eg, let response = await fetch(url); -> let data = await response.json() => fetch() gives us JSON format data, which is stored in response variable and then we give it to json() method as input, and it reads the response(API) body and convert the JSON text into a javascript object.

//* imp -> .json() reads the body once, and returns a promise, that is why we use await. therefore, response.json() is promise and await response.json() is data.

async function getActualData() {
    try{
    console.log("getting data from api");
    let result = await fetch("https://api.data.gov.sg/v1/environment/air-temperature");
    let data = await result.json();
        console.log(`Our data`, data);
        console.log(data.items);
        console.log(data.api_info);
        console.log("End");
    } catch(error) {
        console.log(error);
    }
}

getActualData();

function getDataByPromiseChaining() {
    fetch("https://api.data.gov.sg/v1/environment/air-temperature").then((response) => {
        return response.json();
    }).then((actData) => {
        console.log(actData);
    }).catch((err) => {
        console.log(err);
    })
}

getDataByPromiseChaining();

//! http verbs = crud

//! Response status codes: Response status codes are numbers sent by the server to tell you what happened with your request. These codes are server messages.

//? status codes are grouped by the first digit:

//todo: 100 - 199 = informational responses -- server got the request, and is still processing it
//? 100 -- continue -> server received headers, continue sending body.
//* 101 -- Server agrees to change protocols, Used in Websockets

//todo: 200-299 = successfull responses -- request was successfull (received, understood and handled)
//? 200 - Success -> Request succesfull, data returned
//? 201 - Created -> New resources created successfully, common after POST.
//* 202 - Accepted -> Request accepted, but processing later, async jobs, background tasks.
//? 204 - No content -> success but no response body, common in delete.
//* 206 - Partial content -> partial data returned, used in video streaming, downloads.

//todo: 300-399 = Redirection messages -- Go somewhere else -> means that the requested resource is available at a different location or can be reused from cache.
//? 301 - Moved Permanently -> URL changes
//* 302 - Found -> Temporary redirect.
//? 304 - Not modified -> cached data is still valid, improves performance.
//* 307 - Temporary redirect -> same as 302 but strict rules.

//todo: 400-499 = client error responses -- To tell the client that the request cannot be processed because of a problem in the request itself.
//? 400 - Bad request -> Invalid input, missing or malformed data.
//? 401 - unauthorized -> Not authorized, token missing/expired. (not login)
//? 403 - Forbidden -> Authenticated but no permission
//? 404 - Not found -> Resources does not exist.
//? 405 - Method not allowed -> wrong http verb.
//? 409 - Conflict -> data conflict, duplicate entries (eg, email already exists)
//* 415 - unsupported media type -> wrong content-type
//? 422 - Unprocessable Entity -> data format is correct, but validation failed (eg, password too short)
//? 429 - Too many requests -> Rate limited exceeded, slow down 

//todo: 500-599 = server error responses -- To tell the client that the server failed to process a valid request due to an internal problem.
//? 500 - internal server error -> server crashed, generic failure
//? 502 - Bad gateway -> server got bad response from another server.
//? 503 - service unavailable -> server down, overloaded, try again later.
//* 504 - Gateway timeout -> server took too long to respond

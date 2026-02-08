//! async- await ; a cleaner way to write Promise-based code, that looks synchronous but is not blocking. it helps us to read the asynchronous code like it is synchronous using try and catch methods.

//? async - makes a function always return a promise. it only changes what the function is returning

//? await - pauses(execution of its surrounding async function) inside that function until promise is settled. pauses only that function, not javascript itself. it can be used only inside async function not outside.

//* NOTE: Stil promises, still .then(), still the event loop, only the syntax changes.

async function add(a, b) {
    return a+b;
}

console.log(add(1,3)); //? even though it is synchronous , but the function is returning a promise, return = resolve


function randomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
           let ranNo = Math.random() * 10;
            resolve(parseInt(ranNo));

        }, 2000);
    })
}

// console.log("Rolling random number");
// let ran_Num = randomNumber();
// console.log(ran_Num);
// console.log(`Your random number is ${ran_Num}`); //? this is async function with returning promise , but the execution is not correct and logicall, so to make it more logical we can use async and await

async function ourRanNum() {
console.log("Rolling random number");
let ran_Num = await randomNumber(); //* this will pause the ourRanNum function only not the whole js file, and once the randomNumber function is called and the function returns promise, then the next line of code will be executed in ourRanNum
console.log(`Your random number is ${ran_Num}`);
}

ourRanNum();

//? Lets understand how it makes our async code simpler (compared to callback and promise chaining)

class employeeLogin {
    constructor(empUserName, empPass) {
        this.empUserName = empUserName;
        this.empPass = empPass;
      
    }

}
class employeeDetails {
    constructor(empName, empEmail, empRole, empSalary, empAttendance) {
        this.empName = empName;
        this.empEmail = empEmail;
        this.empRole = empRole;
        this.empSalary = empSalary;
        this.empAttendance = empAttendance;
    }

}

let emp1login = new employeeLogin("kaneki123", "kaneki@123");
let emp2login = new employeeLogin("touka123", "touka@123");
let emp3login = new employeeLogin("isagi123", "isagi@123");
let emp4login = new employeeLogin("rin123", "rin@123");
let emp5login = new employeeLogin("bachira123", "bachira@123");


let emp1details = new employeeDetails("Kaneki", "kaneki123@gmail.com", "front end web designer", `${40000}rs`, 23)
let emp2details = new employeeDetails("Touka", "touka123@gmail.com","front end web designer", `${43000}rs`, 27)
let emp3details = new employeeDetails("Isagi", "isagi123@gmail.com", "back end web developer", `${60000}rs`, 25)
let emp4details = new employeeDetails("Rin", "rin123@gmail.com", "Data analyist", `${70000}rs`, 28);
let emp5details = new employeeDetails("Bachira","bachira123@gmail.com","Cyber analyst", `${50000}rs`,26);


async function empLogin(username, password) {
        let employeeList = [emp1login, emp2login, emp3login, emp4login, emp5login];
        let empDetailsList = [emp1details, emp2details,emp3details,emp4details,emp5details];
        
        let empNo = 0;
        for(let emps of employeeList) {
            if(username === emps.empUserName && password === emps.empPass) {
                let empdetails = (empDetailsList[empNo]);
                return empdetails;
            }
            else {
                empNo+=1;
            }
        }
    return false;
}

function empShowDetails(emp) {
    console.log("Employee Details: ")
    console.log(`Name : ${emp.empName}\nEmail : ${emp.empEmail}\nRole : ${emp.empRole}\nSalary : ${emp.empSalary}\nAttendance : ${emp.empAttendance}`);
}

async function fetchData(username, password) {
    let checkUser = await empLogin(username, password)
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    })

            if(checkUser) {
                return checkUser;
            }
            else {
                throw "Invalid Credentials";
            }
}

async function getData() {
    try {
        let username = "kaneki123";
        let password = "kaneki@123";
        
        
        let username2 = "isagi123";
        let password2 = "isagi@123";
        
        let username3 = "bachira123";
        let password3 = "bachira@123";
        
        let username4 = "invalid123";
        let password4 = "invalid@123";
        
        
        let ourData = await fetchData(username, password);
        empShowDetails(ourData);
        
        let ourData2 = await fetchData(username2, password2);
        empShowDetails(ourData2);
        
        let ourData3 = await fetchData(username3, password3);
        empShowDetails(ourData3);
        
        let ourData4 = await fetchData(username4, password4);
        empShowDetails(ourData4);
    } catch (error) {
        console.log(error);
    }
}

getData();
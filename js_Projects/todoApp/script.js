//? getting items.
let ourinp = document.querySelector("#additem");
let addbtn = document.querySelector("#addtask button");
let taskdiv = document.querySelector("#tasklist")
let completedtask = document.querySelector("#completedTasksection");


//? getting userdata from local storage (task data) (page reload);
function getData() {
    let lsdata = (JSON.parse(localStorage.getItem("userdata")));
    if(lsdata === null) {
        lsdata = [];
    }    
    return lsdata;
}

//? getting completeduserdata from local storage (completed data) (page reload);
function getCompletedData() {
    let completeddata = (JSON.parse(localStorage.getItem("completeduserdata")));
    if(completeddata === null) {
        completeddata = [];
    }
    return completeddata;
}

//? adding eventlistener on add task button.
addbtn.addEventListener("click", ()=> {
    if(ourinp.value !== "") {
//? create an object that contains unique id Date.now() and user inp value;
    const task = {
        id: Date.now(),
        text: ourinp.value
    }
    let ourelement = document.createElement("div");
    ourelement.classList.add("eachTask");
    ourelement.dataset.id = task.id;
    ourelement.innerHTML = `<div class="checkbox">
    <input type="checkbox" name="done" class="taskDone">
    </div>
    <div class="maintask">
    <p>${ourinp.value}</p>
    </div>
    <div class="deletetask"><button>x</button></div>`
    
    //* prepend the newdiv in task menu.
    taskdiv.prepend(ourelement);

        //* update local storage
        let data = getData();
        data.push(task);
        localStorage.setItem("userdata", JSON.stringify(data));   
        ourinp.value = "";
    }
})

//? adding data in task menu which is stored in local storage
function storedData() {
let ourdata = getData();
console.log(ourdata);
for(let values of ourdata) {
    if(values.text !== "") {
        let ourelement = document.createElement("div");
        ourelement.dataset.id = values.id;
        ourelement.classList.add("eachTask");
        ourelement.innerHTML = `<div class="checkbox">
        <input type="checkbox" name="done" class="taskDone">
        </div>
        <div class="maintask">
        <p>${values.text}</p>
        </div>
        <div class="deletetask"><button>x</button></div>`   
        taskdiv.prepend(ourelement);
    }
}
}
function CompletedstoredData() {
let ourCompletedData = getCompletedData();
for(let values of ourCompletedData) {
    if(values.text !== "") {
        let ourelement = document.createElement("div");
        ourelement.dataset.id = values.id;
        ourelement.classList.add("completedtaskdiv");
        ourelement.innerHTML = `<p>${values.text}</p>
                            <button>x</button>`
        completedtask.prepend(ourelement);
    }
}
}

storedData();
CompletedstoredData();

//? adding deleting and done events
let dBtn = document.querySelector("#tasklist");

dBtn.addEventListener("click", (targetVal)=> {
    let targetbtn = targetVal.target;
    
    console.log(targetbtn);
    let ourdata = getData();
    let parentelement = targetbtn.closest(".eachTask");
    let id = parentelement.dataset.id;
    let newdata = parentelement.querySelector(".maintask p");
    if(targetbtn.innerText === "x") {
        // deletebtn = targetbtn;
        parentelement.remove();
        for(let i=0; i<ourdata.length; i++) {
            if(ourdata[i].id === Number(id)) {
                ourdata.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("userdata", JSON.stringify(ourdata));
    }

    if(targetbtn.name === "done") {
        let storeData = undefined;
        for(let i=0; i<ourdata.length; i++) {
         if(ourdata[i].id === Number(id)) {
             storeData = ourdata[i];
             ourdata.splice(i, 1);
             break;
         }
     }
        if(storeData === undefined) {
            return;
        }
        else {

            let newelement = document.createElement("div");
            newelement.dataset.id = storeData.id;
            newelement.classList.add("completedtaskdiv");
            newelement.innerHTML = `<p>${newdata.innerText}</p>
            <button>x</button>`         
            completedtask.prepend(newelement);
            
            let completedData = getCompletedData();
            
            
            completedData.push(storeData);
            localStorage.setItem("completeduserdata", JSON.stringify(completedData));
            
            parentelement.remove();
            localStorage.setItem("userdata", JSON.stringify(ourdata));
        } 
    }




});


let ctdBtn = document.querySelector("#completedTasksection");

ctdBtn.addEventListener("click", (targetVal)=> {
    let targetbtn = targetVal.target;
    let cmpdata = getCompletedData();
    let parentelement = targetbtn.closest(".completedtaskdiv");
    let id = parentelement.dataset.id;
        if(targetbtn.innerText === "x") {
            for(let i=0; i<(cmpdata.length); i++) {
                if(cmpdata[i].id === Number(id)) {
                    cmpdata.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("completeduserdata", JSON.stringify(cmpdata));
            parentelement.remove();
        }
})



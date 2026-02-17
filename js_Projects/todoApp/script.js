let ourinp = document.querySelector("#additem");
console.log(ourinp);

let addbtn = document.querySelector("#addtask button");
console.log(addbtn);

let taskdiv = document.querySelector("#tasklist")
let data = (JSON.parse(localStorage.getItem("userdata")));
let completeddata = (JSON.parse(localStorage.getItem("completeduserdata")));

let completedtask = document.querySelector("#completedTasksection");

addbtn.addEventListener("click", ()=> {
    if(ourinp.value !== "") {
    let ourelement = document.createElement("div");
    ourelement.classList.add("eachTask");
    ourelement.innerHTML = `<div id="checkbox">
    <input type="checkbox" name="done" id="taskDone">
    </div>
    <div id="maintask">
    <p>${ourinp.value}</p>
    </div>
    <div id="deletetask"><button>x</button></div>`
    
    taskdiv.prepend(ourelement);

        data.push(ourinp.value);
        console.log(data);
        localStorage.setItem("userdata", JSON.stringify(data));   
        ourinp.value = "";
    }
})

function storedData() {
// let datalength = (JSON.parse(localStorage.getItem("userdata")).length);
// console.log(datalength)
let ourdata = (JSON.parse(localStorage.getItem("userdata")));
console.log(ourdata);
for(values of ourdata) {
    if(values !== "") {
        // console.log(values);
        let ourelement = document.createElement("div");
        ourelement.classList.add("eachTask");
        ourelement.innerHTML = `<div id="checkbox">
        <input type="checkbox" name="done" id="taskDone">
        </div>
        <div id="maintask">
        <p>${values}</p>
        </div>
        <div id="deletetask"><button>x</button></div>`   
        taskdiv.prepend(ourelement);
    }
}
}

storedData();

let dBtn = document.querySelector("#tasklist");

dBtn.addEventListener("click", (targetVal)=> {
    let targetbtn = targetVal.target;
    console.log(targetbtn);
    let ourdata = (JSON.parse(localStorage.getItem("userdata")));
    let parentelement = targetbtn.closest(".eachTask");
    let newdata = parentelement.querySelector("#maintask p");
    if(targetbtn.name === "done") {
        // console.log("done");
        let newelement = document.createElement("div");
        newelement.classList.add("completedtaskdiv");
        
        newelement.innerHTML = `<p>${newdata.innerText}</p>
        <button>x</button>`
        
        console.log("this is new data", newelement);
        
        completedtask.prepend(newelement);
        // completeddata.push(newdata.innerText);
        localStorage.setItem("completeduserdata", JSON.stringify(completeddata))
        // console.log(completedtask);
        parentelement.remove();
           for(let i=0; i<ourdata.length; i++) {
            if(ourdata[i] === newdata.innerText) {
                ourdata.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("userdata", JSON.stringify(ourdata));
    }



    if(targetbtn.innerText === "x") {
        // deletebtn = targetbtn;
        parentelement.remove();
        for(let i=0; i<ourdata.length; i++) {
            if(ourdata[i] === newdata.innerText) {
                ourdata.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("userdata", JSON.stringify(ourdata));
    }

});


let ctdBtn = document.querySelector("#completedTasksection");

ctdBtn.addEventListener("click", (targetVal)=> {
    let targetbtn = targetVal.target;
    let ourdata = (JSON.parse(localStorage.getItem("userdata")));
    let parentelement = targetbtn.closest(".completedtaskdiv");
    // let newdata = parentelement.querySelector("#maintask p");
        if(targetbtn.innerText === "x") {
        // deletebtn = targetbtn;
        parentelement.remove();
        // for(let i=0; i<ourdata.length; i++) {
        //     if(ourdata[i] === newdata.innerText) {
        //         ourdata.splice(i, 1);
        //         break;
        //     }
        // }
        // localStorage.setItem("userdata", JSON.stringify(ourdata));
    }
})



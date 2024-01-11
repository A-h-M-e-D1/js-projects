//----------To -Do List------//
const inputbox = document.getElementById("input-box");
const list_co = document.getElementById("u");

function AddTask(){
    if(inputbox.value == ''){
        alert("You must Write a Task To Add");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list_co.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value ="";
    saveData();
}

list_co.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("click");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);

function saveData(){
   localStorage.setItem("data",u.innerHTML);
}

function showTask(){
    u.innerHTML =localStorage .getItem("data");
}
showTask();
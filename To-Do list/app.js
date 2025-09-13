const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask() {
    if (inputBox.value === '') {
        alert("you must be add your task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    storeData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeData();
    }
    else if (e.target.tagName === "SPAN") {
        if (e.target.parentElement) {
            e.target.parentElement.remove();
            storeData();
        }
    }
}, false);


function storeData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showtask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();
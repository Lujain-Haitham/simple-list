let data = document.getElementById("input");
let add = document.getElementById("button");
let list = document.getElementById("list");

function addItem(){
    let item = document.createElement("li");
    list.appendChild(item);
    item.innerText = data.value;
    data.value = "";
}

add.addEventListener("click", addItem);
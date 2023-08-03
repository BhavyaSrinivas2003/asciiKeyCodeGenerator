let inputElement = document.getElementById("userInput");
let listElement = document.getElementById("keyCodeList");

function keydownFun(event) {
    let listitem = document.createElement("li");
    listitem.textContent = event.keyCode;
    listElement.appendChild(listitem);
}
inputElement.addEventListener("keydown", keydownFun);
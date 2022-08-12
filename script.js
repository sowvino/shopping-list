let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let checkbox = document.querySelectorAll("input[type=checkbox]");
let trashBin = document.querySelectorAll('.bi-trash-fill');
//Adding the todo list
function createListElement() {
	let li = document.createElement("li");
	let inputCheckBox = document.createElement('input');
	let deleteBtn = document.createElement('i');
	inputCheckBox.type = 'checkbox';
	inputCheckBox.value = input.value;
	inputCheckBox.classList.add('check');
	deleteBtn.classList.add('bi', 'bi-trash-fill');
	console.log(inputCheckBox.value);
	li.appendChild(inputCheckBox,);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteBtn);
	ul.appendChild(li);
	input.value = "";
	deleteBtn.addEventListener('click', deleteList);
	inputCheckBox.addEventListener('click', strikeOut);
}
function inputLength() {
	return input.value.length;
}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
//removing the parentelement
const deleteList = function () {
	this.parentElement.remove();
};
function deleteItem() {
	for (let i = 0; i < trashBin.length; i++)
		trashBin[i].addEventListener('click', deleteList);
};
//checkbox strike is done
const strikeOut = function () {
	this.parentElement.classList.toggle('done');
}
function lineThrough() {
	for (let i = 0; i < checkbox.length; i++)
		checkbox[i].addEventListener('change', strikeOut);
};
deleteItem();
lineThrough();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

















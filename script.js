let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let main = document.getElementById('main')
let list = document.getElementById('list');
let ul = document.getElementsByTagName('ul');
let item = list.getElementsByClassName('item');

let popup = document.getElementsByClassName('popup')[0];
let close = document.querySelector('.close');

var name = 'Иван';
var age = prompt('Укажите ваш возраст', '');
var subscribe = true;

function addItem() {
	let newLi = document.createElement('li');
	newLi.innerHTML = 'Новая задача!';
	newLi.className = 'item';
	list.appendChild(newLi);
	popup.style.display = 'none';
}

function delItem() {
	list.removeChild(item[0]);

	if(item.length == 0) {
		popup.style.display = 'block';
	}

}

function closePopup() {
	popup.style.display = 'none';
}

function getAttentionYes() {
	alert('Вы можете войти на сайт!');
	console.log('Пользователь вошел');
}

function checkUser() {
	if(age >= 18 && subscribe == true) {
		getAttentionYes();
	} else {
		alert('Вы не можете войти на сайт!');
	}
}

btn1.addEventListener('click', addItem);
btn2.addEventListener('click', delItem);
close.addEventListener('click', closePopup);
checkUser();
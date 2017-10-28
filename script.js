var addbutton = document.getElementById('addButton')
var list = document.querySelector('#todoList')
var typedText = document.getElementById('newTodoInput')

addbutton.addEventListener('click', function(event) {
	var newTodoItem = document.createElement('li');
	newTodoItem.innerHTML = typedText.value;
	list.appendChild(newTodoItem);
	typedText.value = ''	
});


window.onload = function() {
 var listItems = document.getElementsByTagName('li');
 for (var i = 0; i < list.length; i++) {
 	list[i].onclick = function() {
 		this.remove();
 	}
 }
}

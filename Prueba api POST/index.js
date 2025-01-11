let variable = document.getElementById('insertar')
console.log(variable);
variable.addEventListener('submit', function (event){


event.preventDefault();

alert('You submitted');

});





/*
fetch('http://192.168.1.155/v4/Portal/insertUserPruebas')
.then(response => response.json())
.then(data => {


})
*/
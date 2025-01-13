let variable = document.getElementById('insertar')
console.log(variable);


variable.addEventListener('submit', function (event){


    event.preventDefault();

    //Asignacion de valores y creacion del payload
    const data = {
        nombre: document.getElementById("nombre").value,
        apellidoMat: document.getElementById("apellidomat").value,
        apellidoPat: document.getElementById("apellidopat").value,
        correo: document.getElementById("correo").value,
        celular: document.getElementById("celular").value
    }    

    console.log(JSON.stringify(data));
    
    //Coneccion a la API y envio del payload
    fetch("http://192.168.1.155/v4/Portal/insertUserPruebas", {
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
   
    .then((response) => {
        //Condicion que revisa si la entrega del payload se entrego o no
        if (response.ok) {
            alert("Informacion enviada correctamente, Estado: "+ response.status);
            return
        }
        else{
            alert("Informacion no enviada, Estado: "+ response.status); 
        }
        
    })
    
    .then((json) => console.log(json));

});





/*
fetch('http://192.168.1.155/v4/Portal/insertUserPruebas')
.then(response => response.json())
.then(data => {


})
*/
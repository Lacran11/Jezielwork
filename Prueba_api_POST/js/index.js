let variable = document.getElementById('insertar')
console.log(variable);


variable.addEventListener('submit', function (event){

    event.preventDefault();
    const entradas = [
        {
            id:"nombre",
            label:"Nombre",
            regex: "[a-zA-ZáéíóúÁÉÍÓÚ]{0,255}",
            error: "El nombre debe contener solo letras de a-z y A-Z Y acentos "
        },
        {
            id:"apellidomat",
            label:"Apellido Materno",
            regex: "[a-zA-ZáéíóúÁÉÍÓÚ]{0,255}",
            error: "El apellido materno debe contener solo letras de a-z y A-Z Y acentos"
        },
        {
            id:"apellidopat",
            label:"Apellido Paterno",
            regex: "[a-zA-ZáéíóúÁÉÍÓÚ]{0,255}",
            error: "El apellido paterno debe contener solo letras de a-z y A-Z Y acentos"
        },
        {
            id:"correo",
            label:"Correo Electronico",
            regex: "[a-zA-Z0-9._@-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}",
            error: "El correo debe contener el elemento '@' y '.'"
        },
        {
            id:"celular",
            label:"Numero de Celular",
            regex: "[0-9]{10}",
            error: "El correo debe contener el elemento '@' y '.'"
        },
    ];

    let esverdadero = true;
    //Restaura el estilo
    entradas.forEach(({id}) => {
        const entrada = document.getElementById(id);
        entrada.style.border = "";
        console.log(id);
    });


    console.log(JSON.stringify(entradas));
    console.log(`ID: ${id} with regex:`, regex);


    entradas.forEach(({id, regex, error}) => {
        const entrada = document.getElementById(id);
        if (!regex.test(entrada.value.trim())) {
            entradas.style.border = "3px solid red";//Le da color rojo al borde del input
            const errormsg = document.createElement("small");  
            errormsg.style.color = "red";
            errormsg.innerText = error;
            entrada.insertAdjacentElement("afterend",errormsg);
        }
        if (!esverdadero) {
            alert("Corrige todos los campos en rojo");
            return;
        }
        
    });
    /*
    let name = document.getElementById("nombre").value;
    let apm = document.getElementById("apellidomat").value;
    let app = document.getElementById("apellidopat").value;
    let email = document.getElementById("correo").value;
    let phone = document.getElementById("celular").value;
    
        if (!/^[a-zA-Z]{5,}$/.test(name)) {
            alert('Porfavor inserta un nombre con al menos 5 letras ');
            event.preventDefault(); // Prevent form submission
            alert(JSON.stringify(name));
        }        
        */

    
    /*
    const entradas = [
        {id: "nombre"},
        {id: "apellidomat"},
        {id: "apellidopat"},
        {id: "correo"},
        {id: "celular"}
    ];

    let esverdadero = true;

    entradas.forEach(({id}) =>{
        const entradas = document.getElementById("id");
        entradas.style.border = " ";
    });
    
    entradas.forEach(({id}) =>{
        if (!ientradas.value.trim()) {
            entradas.style.border = "3px solid red";//Le da color rojo al borde del input
            esverdadero = false;            
        }
    });

    if (!esverdadero) {
        alert("Porfavor llena todo los campos resaltados en rojo.");
    }
    */


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
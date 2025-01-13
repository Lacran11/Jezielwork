let variable = document.getElementById('insertar')
console.log(variable);
const entradas = [
    {
        id:"nombre",
        label:"Nombre",
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚÑñ]{1,255}$/,
        error: "El nombre debe contener solo letras de a-z y A-Z Y acentos "
    },
    {
        id:"apellidomat",
        label:"Apellido Materno",
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚÑñ]{1,255}$/,
        error: "El apellido materno debe contener solo letras de a-z y A-Z Y acentos"
    },
    {
        id:"apellidopat",
        label:"Apellido Paterno",
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{1,255}$/,
        error: "El apellido paterno debe contener solo letras de a-z y A-Z Y acentos"
    },
    {
        id:"correo",
        label:"Correo Electronico",
        regex: /^[a-zA-Z0-9._@-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
        error: "El correo debe contener el elemento '@' y '.'"
    },
    {
        id:"celular",
        label:"Numero de Celular",
        regex: /^[0-9]{10}&/,
        error: "Favor de ingresar 10 numeros"
    },
];
/*
entradas.forEach(({id, regex}) => {
    const inpelement = document.getElementById(id);
    if (inpelement) {
        inpelement.addEventListener("input",(e)=>{
            let value = e.target.value;
            console.log(e.target.value);
            e.target.value = value.replace(regex,"");//Reemplaza caracteres invalidos
        })
    }
});
*/

variable.addEventListener('submit', function (event){

    event.preventDefault();

    let esverdadero = true;
    //Restaura el estilo
    entradas.forEach((entradadata) => {
        const entrada = document.getElementById(entradadata.id);
        entrada.style.border = "";
        console.log(entradadata.id);
        entrada.nextElementSibling?.remove();//Quita el mensaje de error si hay uno
    });

    console.log(JSON.stringify(entradas));
    //console.log(`ID: ${entradas.id[2]} with regex:`, entradas.regex[2]);


    entradas.forEach((entradadata) => {

        const entrada = document.getElementById(entradadata.id);
        if (entrada) {

            console.log(entradadata.id + entradadata.regex);

            if (!entradadata.regex.test(entrada.value.trim())) {
    
                entrada.style.border = "3px solid red";//Le da color rojo al borde del input
                const errormsg = document.createElement("small");  
                errormsg.style.color = "red";
                errormsg.innerText = entradadata.error;
                entrada.insertAdjacentElement("afterend",errormsg);
    
            }
        }
        if (!esverdadero) {
            alert("Corrige todos los campos en rojo");
            return;
        }
        
    });

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

let variable = document.getElementById('insertar');

const entradas = [
    {
        id: "nombre",
        label: "Nombre",
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚÑñ]{1,255}$/,
        inputRegex: /[^a-zA-ZáéíóúÁÉÍÓÚÑñ]/g,
        error: "El nombre debe contener solo letras de a-z y A-Z Y acentos"
    },
    {
        id: "apellidomat",
        label: "Apellido Materno",
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚÑñ]{1,255}$/,
        inputRegex: /[^a-zA-ZáéíóúÁÉÍÓÚÑñ]/g,
        error: "El apellido materno debe contener solo letras de a-z y A-Z Y acentos"
    },
    {
        id: "apellidopat",
        label: "Apellido Paterno",
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚÑñ]{1,255}$/,
        inputRegex: /[^a-zA-ZáéíóúÁÉÍÓÚÑñ]/g,
        error: "El apellido paterno debe contener solo letras de a-z y A-Z Y acentos"
    },
    {
        id: "correo",
        label: "Correo Electronico",
        regex: /^[a-zA-Z0-9._@-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        inputRegex: /[^a-zA-Z0-9._@-]/g,
        error: "El correo debe contener el elemento '@' y '.'"
    },
    {
        id: "celular",
        label: "Numero de Celular",
        regex: /^[0-9]{10}$/,
        inputRegex: /[^0-9]/g,
        error: "Favor de ingresar 10 numeros"
    }
];

// Validación en tiempo real mientras se escribe
entradas.forEach(element => {
    const inputElement = document.getElementById(element.id);
    const errorElement = document.getElementById('error' + element.id.charAt(0).toUpperCase() + element.id.slice(1));
    
    if (inputElement) {
        inputElement.addEventListener("input", (e) => {
            let value = e.target.value;
            // Reemplaza caracteres inválidos en tiempo real
            let newValue = value.replace(element.inputRegex, '');
            
            if (value !== newValue) {
                e.target.value = newValue;
                errorElement.style.display = 'block';
            } else {
                errorElement.style.display = 'none';
            }
        });
    }
});

variable.addEventListener('submit', function(event) {
    event.preventDefault();

    let esValido = true;

    // Restaura el estilo
    entradas.forEach((entradaData) => {
        const entrada = document.getElementById(entradaData.id);
        entrada.style.border = "";
        entrada.nextElementSibling?.remove(); // Quita el mensaje de error si hay uno
    });

    // Validación al enviar
    entradas.forEach((entradaData) => {
        const entrada = document.getElementById(entradaData.id);
        if (entrada) {
            if (!entradaData.regex.test(entrada.value.trim())) {
                entrada.style.border = "3px solid red";
                const errorMsg = document.createElement("small");
                errorMsg.style.color = "red";
                errorMsg.innerText = entradaData.error;
                entrada.insertAdjacentElement("afterend", errorMsg);
                esValido = false;
            }
        }
    });

    if (!esValido) {
        alert("Corrige todos los campos en rojo");
        return;
    }

    // Asignacion de valores y creacion del payload
    const data = {
        nombre: document.getElementById("nombre").value,
        apellidoMat: document.getElementById("apellidomat").value,
        apellidoPat: document.getElementById("apellidopat").value,
        correo: document.getElementById("correo").value,
        celular: document.getElementById("celular").value
    };

    console.log(JSON.stringify(data));

    /*Asignacion de valores y creacion del payload v2
    const info = {};
    entradas.forEach((entradaData)=>{
        const input = document.getElementById(entradaData.id);
        if (input) {
            info[entradaData.id] = input.value.trim()          
        }
    });
        */

    // Conexión a la API y envío del payload
    fetch("http://192.168.1.155/v4/Portal/insertUserPruebas", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if (response.ok) {
            alert("Informacion enviada correctamente, Estado: " + response.status);
            return;
        } else {
            alert("Informacion no enviada, Estado: " + response.status);
        }
    })
    .then((json) => console.log(json));
});
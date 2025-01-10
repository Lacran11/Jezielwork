//const botonapi = document.getElementById('apiboton');
const contenedor = document.getElementById('contenedor');
let contenidohtml;
let nombre;
let power;
let raza;
let genero;
let desc;;
let imagen;

    //Llamada a la api
    fetch('https://dragonball-api.com/api/characters')
    .then(response => response.json())
    .then(data => {


      //  console.log(data.items[5]);

        data.items.forEach(element => {
        
            nombre = JSON.stringify(element.name).replaceAll('"','');
            power = JSON.stringify(element.ki).replaceAll('"','');
            raza = JSON.stringify(element.race).replaceAll('"','');            
            desc = JSON.stringify(element.description).replaceAll('"','');
            imagen = JSON.stringify(element.image).replaceAll('"','');


            //Se guarda cada linea de la consulta al api para despues enviarla todas las
            // lineas a html
            contenedor.innerHTML +=
            `
            <div class="card">
                <img src=${imagen}>
                <h1>${nombre}</h1>
                <h2 class="title">${raza}</h2>
                <h3 class="power">Ki: ${power}</h3>
                <p class="desc">${desc}</p>   
            </div>            

            `;
        });
    })
    .catch(e => console.error(new Error(e)));
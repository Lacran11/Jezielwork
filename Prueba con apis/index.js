let imagen = document.getElementById('imagen');
let imgurl; //= document.getElementById('imgurl');
let idimg;
const contenedor = document.getElementById('contenedor');
const botonapi = document.getElementById('apiboton');

const llamarapi = () => {

    //El comando fetch Recupera con La API por metodo get y se incluye el url de la API
    fetch('http://192.168.1.155/v4/Portal/ListaCarrusel')
    .then(response => response.json())
    .then(data => {
        
        //Se recupera el valor del arreglo y se convierte en string
        
        imgurl = JSON.stringify(data.imagen_url);
        idimg = JSON.stringify(data.id_carrusel);
        
        //contenedor.innerHTML = `<p>Numero de Id:${idimg}</p> <img width="150px" height="150px" src=${imgurl}>`;
        //console.log(imgurl);
        //console.log(idimg);


        data.forEach(item => {

            imgurl = JSON.stringify(item.imagen_url);
            idimg = JSON.stringify(item.id_carrusel);

            contenedor.innerHTML += `<p>Numero de Id:${idimg}</p> <img width="150px" height="150px" src=${imgurl}>`
            
        });
    })
    .catch(e => console.error(new Error(e)));
}


botonapi.addEventListener('click',llamarapi);
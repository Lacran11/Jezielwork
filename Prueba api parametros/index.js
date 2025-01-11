const contenedor = document.getElementById('contenedor');
const opciones = document.getElementById('options');

/* En un ciclo se introducen las etiquetas option al interior 
de la etiqueta  select en el HTML con un autoincrmento para numerarlos
 */
for (let index = 0; index <= 44; index++) {
    opciones.innerHTML += `echo("<option value='${index}'>${index}</option>");`;

}

//Se RecuperaEl valor del select de HTML y se crea una funcion
document.getElementById("options").addEventListener("change", function(){
    
    /*
    Se recupera la API y se le asigna a data
    Al final de la url se le agrega el valor escogido en el select de HTML
    para recuperar los datos de esa instancia especifica
    */
    fetch(`https://dragonball-api.com/api/transformations/${this.value}`)
    .then(response => response.json())
    .then(data => {


        /* console.log(data.id);
        console.log(data.image); */

        /* Se introduce el siguiente fragmento HTML al 
        interior del div contenedor */
        contenedor.innerHTML =
        `
            <div class="card">
                <img src=${data.image.replaceAll(' ','_')}>
                
                <h1>Transformacio: ${data.name.replaceAll('"','')}</h1>
                <h2>Ki: ${data.ki}</h2>
            </div>
        `;

    }).catch(e => console.error(new Error(e)));


})
/*

*/
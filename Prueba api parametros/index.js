let variable = "name";
const contenedor = document.getElementById('contenedor');
const opciones = document.getElementById('options');

for (let index = 0; index <= 44; index++) {
    opciones.innerHTML += `echo("<option value='${index}'>${index}</option>");`;

}

document.getElementById("options").addEventListener("change", function(){
    

    fetch(`https://dragonball-api.com/api/transformations/${this.value}`)
    .then(response => response.json())
    .then(data => {

        /*
        imagen  = JSON.stringify(data.image).replaceAll('"','');
        nombre  = JSON.stringify(data.name).replaceAll('"','');
        power   = JSON.stringify(data.ki).replaceAll('"','');

        <h1>${data.character.name.replaceAll('"','')}</h1>

        */
        //alert("you selected: " +  this.data.name);
        //alert(data.character.name);
        console.log(data.id);
        console.log(data.image);
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
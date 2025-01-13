let variable = document.getElementById('insertar')
console.log(variable);
variable.addEventListener('submit', function (event){


event.preventDefault();

alert('You submitted');
/* Ejemplo 1
fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: "Fix my bugs",
      completed: false
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
    */


    /* Ejemplo 2
// Get form values
            const name = document.getElementById('name').value;
            const surname = document.getElementById('surname').value;
            const phoneNumber = document.getElementById('phone_number').value;

            // Create payload
            const data = {
                name: name,
                surname: surname,
                phone_number: phoneNumber
            };

            try {
                // Send data to the API
                const response = await fetch('https://api.example.com/endpoint', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data) // Convert JS object to JSON string
                });

                if (response.ok) {
                    const result = await response.json();
                    alert('Data sent successfully: ' + JSON.stringify(result));
                } else {
                    alert('Failed to send data: ' + response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error sending data: ' + error.message);
            }

*/

});





/*
fetch('http://192.168.1.155/v4/Portal/insertUserPruebas')
.then(response => response.json())
.then(data => {


})
*/
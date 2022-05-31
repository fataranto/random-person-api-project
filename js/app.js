// Tu código aquí
let btnNewPerson = document.querySelector("#btn");

async function fetchNewPerson() {
    // usar el fetch para traernos info sobre una nueva persona de la random user api
    let url = "https://randomuser.me/api/";


    // en response tenemos si ha ido bien o no la llamada. (ok, statusCode). 
    let response = await fetch(url);
    console.log(response);


    let person = await response.json();

    let personInfo = person.results[0];
    console.log(personInfo);

    updateCardInfo(personInfo.name.first, personInfo.name.last, personInfo.location.country, personInfo.phone, personInfo.email, personInfo.picture.large);
};

// ejecútame la función fetchNewPerson cada 10 segundos
setInterval(fetchNewPerson, 10000);

btnNewPerson.addEventListener("click", fetchNewPerson);

// función para actualizar la información de la tarjeta
function updateCardInfo(name, lastName, location, phone, email, urlPhoto) {
    document.querySelector("#first").textContent = name;
    document.querySelector("#last").textContent = lastName;
    document.querySelector("#country").textContent = location;
    document.querySelector("#phone").textContent = phone;
    document.querySelector("#email").textContent = email;

    document.querySelector("#photo").src = urlPhoto;

}
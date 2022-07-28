class Humano {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

let humanos = []

//Tenemos que veriicar si ya ingreso alguna vez, o si es su primera vez. dependiendo cual ejecutamos if o else

if(localStorage.getItem("humanos")) {
    humanos = JSON.parse(localStorage.getItem("humanos"))
} else {
    localStorage.setItem("humanos", JSON.stringify(humanos))
}

//Unimos html con js mediante ids y pedimos los datos de los "humanos" mediante un formulario

const form = document.getElementById("idForm")

const divHumanos = document.getElementById("divHumanos")
const botonMostrar = document.getElementById("botonMostrar")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let datosHumanos = new FormData(event.target)

    let humano = new Humano(datosHumanos.get("Nombre"), datosHumanos.get("Apellido"), datosHumanos.get("Edad"))
    humanos.push(humano)

    console.log(humanos)

    localStorage.setItem("humanos", JSON.stringify(humanos))

    form.reset()
})

//Creamos un boton que toma los datos previamente ingresados y mediante innerhtml y cards de bootstrap los mostramos en pantalla

botonMostrar.addEventListener("click", () => {
    let arrayStorage = JSON.parse(localStorage.getItem("humanos"))
    divHumanos.innerHTML = ""
    arrayStorage.forEach((humano, indice) => {
        
        divHumanos.innerHTML += `
        <div class="card mb-3" id="humano${indice}" style="max-width: 20rem; margin:4px;">
            <div class="card-header"><h2>Nombre: ${humano.nombre}</h2></div>
            <div class="card-body">
                <p class="card-title">Apellido: ${humano.apellido}</p>
                <p class="card-title">Edad: ${humano.edad}</p>
                <button class="btn btn-danger">Eliminar humano</button>
            </div>
        </div>
        
        `
    });

    //Creamos un boton que mediante el indice detecta cada uno de los "humanos" y los elimina

    arrayStorage.forEach((humano, indice) => {
        let botonEliminar = document.getElementById(`humano${indice}`).lastElementChild.lastElementChild
        botonEliminar.addEventListener('click', () => {
            document.getElementById(`humano${indice}`).remove()
            humanos.splice(indice,1)
            localStorage.setItem('humanos', JSON.stringify(humanos))
            console.log(`${humano.nombre} Eliminado`)
        })
    })
})





















    
//     arrayStorage.forEach((humano, indice) => {
//         divHumanos.innerHTML += `
//         <div class="card" style="width: 18rem; margin:3px id="humano${indice}">
//             <div class="card-header"><h2 class="card-title">Nombre: ${humano.nombre}</h2></div>
//             <div class="card-body">
//                 <h5 class="card-title">Apellido: ${humano.apellido}<h5>
//                 <h5 class="card-title">Edad: ${humano.edad}</h5>
//                 <button class="btn btn-danger">Eliminar Humano</button>
//             </div>
//         </div>
//         `
//     });

//     arrayStorage.forEach((humano, indice) => {
//         let botonEliminar = document.getElementById(`humano${indice}`).lastElementChild.lastElementChild
//         botonEliminar.addEventListener("click", () => {
//             document.getElementById(`humano${indice}`).remove()
//             humanos.splice(indice,1)
//             localStorage.setItem("humanos", JSON.stringify(humanos))
//         })
//     });
// })




    // let nombre = document.getElementById("idNombre").value
    // let apellido = document.getElementById("idApellido").value
    // let edad = document.getElementById("idEdad").value

    // const humanoCreado = new Humano(nombre, apellido, edad)
    // humanos.push(humanoCreado)


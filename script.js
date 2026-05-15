const boton =
    document.getElementById("boton");

const imagen =
    document.getElementById("imagenPerro");


boton.addEventListener(
    "click",
    obtenerPerro
);


async function obtenerPerro(){

    try{

        const respuesta =
            await fetch(
                "https://dog.ceo/api/breeds/image/random"
            );

        const datos =
            await respuesta.json();

        console.log(datos);

        imagen.src =
            datos.message;

    }
    catch(error){

        console.log(
            "Error:",
            error
        );
    }
}
const {estudiante,obtenerPromedio} = require ("./calculos")
//fs es file system
const fs = require("fs");

console.log("el nombre del estudiante es", estudiante.nombre)
console.log("el promedio del estudiante es", obtenerPromedio( estudiante.notas.matematicas, estudiante.notas.ingles,estudiante.notas.programacion))

let {nombre,edad,notas: {matematicas,ingles,programacion}} = estudiante
console.log("El nombre del estudiante es:",nombre)
console.log("El promedio es:", obtenerPromedio(ingles, matematicas, programacion))
console.log("La edad del estudiante es:", edad)

let crearArchivo = (estudiante) =>
{
    texto = "el nombre del estudiante es " + nombre + "\n"+ 
            "ha obtenido un promedio de " + obtenerPromedio(ingles,matematicas,programacion)

    fs.writeFile("promedio.txt",texto, (err) => {
        if (err) throw (err);
        console.log("se ha creado el archivo")
    });
}

crearArchivo(estudiante)
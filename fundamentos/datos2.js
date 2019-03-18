//Require exporta archivos o modulos al archivo actual
const {estudiante,obtenerPromedio} = require ("./calculos")

console.log("el nombre del estudiante es", estudiante.nombre)
console.log("el promedio del estudiante es", obtenerPromedio( estudiante.notas.matematicas, estudiante.notas.ingles,estudiante.notas.programacion))

let {nombre,edad,notas: {matematicas,ingles,programacion}} = estudiante
console.log("El nombre del estudiante es:",nombre)
console.log("El promedio es:", obtenerPromedio(ingles, matematicas, programacion))
console.log("La edad del estudiante es:", edad)
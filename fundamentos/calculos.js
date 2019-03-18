let estudiante =
{
    nombre: 'Juan',
    edad: 25,
    notas: 
    {
        matematicas: 3,
        ingles: 4,
        programacion:5
    }
}
obtenerPromedio = (nota1,nota2,nota3) => (nota1+nota2+nota3)/3;


module.exports = 
{
    estudiante,
    obtenerPromedio
}
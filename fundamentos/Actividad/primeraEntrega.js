const fs = require("fs");
const cursos =
{
    curso1:
    {
        nombre: "NODE.JS",
        id: 0,
        duracion: 32,
        valor: 0
    },
    curso2:
    {
        nombre: "ingles",
        id: 1,
        duracion: 64,
        valor: 200000
    },
    curso3: 
    {
        nombre: "bolsa de valores",
        id: 2,
        duracion: 32,
        valor: 150000
    }
}

const opciones =
{
    nombre:
    {
        demand: true,
        alias: "n"
        
    },
    cedula:
    {
        demand:true,
        alias: "c"
    },
    id:
    {
        demand:true,
        alias: "i"
    }
}

function encontarCurso(id)
{
    if (id > 2)
    {
        return -1
    }
    for (const curso in cursos) 
    {
        if (id == cursos[curso].id){
            return cursos[curso]
        }
    }
}

const argv = require("yargs")
            .usage("\nPara ver los cursos usa principal y para inscribirse usa inscribr")
            .help()
            .command("principal", "muestra los cursos disponibles",
            function(){
                i = 0
                for (const curso in cursos) 
                {
                    setTimeout(function imprimirCursos ()
                    {
                        nombre = cursos[curso].nombre
                        tiempo = cursos[curso].duracion
                        valor = cursos[curso].valor
                        id = cursos[curso].id
                        console.log(`El curso se llama ${nombre}, el id es ${id}, tiene una duracion de ${tiempo} horas y un valor de ${valor} pesos`)
                        
                    },2000 * i)
                    i ++ 
                }})
            .command("inscribir", "te inscribe en un curso disponible", opciones, 
            function(argv){
                nombre = argv.n
                cedula = argv.c
                id = argv.i
                curso = encontarCurso(parseInt(id))
                if (curso == -1){
                    console.log("Ha ingresado un ID que no corresponde a ningun curso")
                    for (const curso in cursos) 
                    {
                        nombre = cursos[curso].nombre
                        tiempo = cursos[curso].duracion
                        valor = cursos[curso].valor
                        id = cursos[curso].id
                        console.log(`El curso se llama ${nombre}, el id es ${id}, tiene una duracion de ${tiempo} horas y un valor de ${valor} pesos`)
                    }
                }
                else
                {
                    texto = `El estudiante ${nombre}\nCon cedula ${cedula}\nSe ha matriculado en ${curso.nombre}, ${curso.nombre} tiene una duracion de ${curso.duracion} y un valor de ${curso.valor}`
                    fs.writeFile("matricula.txt",texto, (err) => {
                        if (err) throw (err);
                        console.log("se ha creado el archivo")
                    });
                }
            }
            )
            .argv

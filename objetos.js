// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const adrian = {
    nombre: "Adrián",
    apellido: "Fernández Rosa",
    edad: 30,
    altura: 185,
    isDeveloper: true
}
// - Una variable que obtenga tu edad a partir del objeto anterior
const { edad } = adrian;

console.log(edad);

// - Una lista que contenga el objeto con tus datos personales
//  y un nuevo objeto con los datos personales de tus dos mejores amig@s

const lista = [adrian,
{
    nombre: "alemai",
    apellido: "Chopa",
    edad: 33,
    altura: 165,
    isDeveloper: true
},
{
    nombre: "Julian",
    apellido: "Iturraspe",
    edad: 39,
    altura: 181,
    isDeveloper: false
}
]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaOrder = lista.sort((a , b) => b.edad - a.edad);

lista.forEach((e) => console.log(e.nombre +" " +e.edad));
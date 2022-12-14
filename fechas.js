// - La fecha de hoy

let fechaActual = new Date();

// - La fecha de tu nacimiento

let fechaNac = new Date(1992, 01, 28); 

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

let isTarde = fechaActual > fechaNac;

console.log(isTarde);

// - Una variable que contenga el día de tu nacimiento

let dia= fechaNac.getDate();


// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

let mes= fechaNac.getMonth();


// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let anyo = fechaNac.getFullYear();
console.log(anyo);
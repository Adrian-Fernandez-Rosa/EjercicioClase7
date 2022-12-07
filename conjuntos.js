// - Un nuevo Set con los nombres de tu familia
const array = ["Claudia", "Ailen","Marcos" ,"Adrian"]
let set = new Set(array);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

set.add("Adrian");
set.forEach((e)=> console.log(e));

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)


set.add("Javascripts");
console.log("***********")
set.forEach((e)=> console.log(e));


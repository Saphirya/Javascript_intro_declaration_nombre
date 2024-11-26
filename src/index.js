//déclarer un nombre
const monnombre = 45; //litéral

console.log(monnombre);
console.log(Number(85)); //fonction
console.log(new Number(85)); // instanciation objet number

//equivalent de 1 en version objet ! permet d'acceder aux méthodes de l'objet number
const a = 1.555555;
const b = new Number(1);
console.log(a);
console.log(b);

// a est une primitive et est automatique transformer en objet pour utiliser les méthodes
console.log(a.toFixed(2)); //tofix specifier le nombre de décimales
// 1.5555 => new Number(1.5555)
// Number{}
//tofix retroune une chaine de caractère
//on peux utiliser parseFloat pour transformer en nombre
console.log(parseFloat(a.toFixed(2)));

//toString
console.log(a.toString());

const f = Number("155jfgffsd");
console.log(Number.isNaN(f));
console.log(Number.isInteger(22.55));

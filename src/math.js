const a = Math.pow(2, 3);
console.log(a);

const b = Math.PI;
console.log(b);

//arrondi au nombre entier supérieur
const c = Math.ceil(2.55);
console.log(c);
//arrondi au nombre entier inférieur
const d = Math.floor(2.55);
console.log(d);
//sort le nombre le plus grand
const e = Math.max(10, 55, 88, 66, 77);
console.log(e);
//sort le nombre le plus petit
const g = Math.min(10, 55, 88, 66, 77);
console.log(g);
// retourne un nombre décimal aléatoire entre 0 et 1
const h = Math.random();
console.log(h);
//retourne un nombre aléatoire entre 0 et 100 et arrondi au nombre entier
const i = Math.round(Math.random() * 100);
console.log(i);

//retourne un nombre arrondi entre 0 et 5 grace au modulo
const x = Math.round((Math.random() * 10) % 5);
console.log(x);

console.log(2 ** 3);

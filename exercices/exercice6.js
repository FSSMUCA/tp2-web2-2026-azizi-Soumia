let nom = null ;
let age = 0;
let ville = "" ;
let score = undefined ;
let actif = false ;

/* Partie A */
let result1 = nom ?? "valeur par défaut" ;
console.log(`nom ?? "valeur par défaut -> ${result1}`);
let result2 = age ?? "valeur par défaut" ;
console.log(`age ?? "valeur par défaut -> ${result2}` );
let result3 = ville ?? "valeur par défaut" ;
console.log(`ville ?? "valeur par défaut -> ${result3}` );
let result4 = score ?? "valeur par défaut" ;
console.log(`score ?? "valeur par défaut -> ${result4}` );
let result5 = actif ?? "valeur par défaut" ;
console.log(`actif ?? "valeur par défaut -> ${result5}` );

/* Partie B */
let result6 = nom || "valeur par défaut" ;
console.log(`nom || "valeur par défaut -> ${result6}`);
let result7 = age || "valeur par défaut" ;
console.log(`age || "valeur par défaut -> ${result7}` );
let result8 = ville || "valeur par défaut" ;
console.log(`ville || "valeur par défaut -> ${result8}` );
let result9 = score || "valeur par défaut" ;
console.log(`score || "valeur par défaut -> ${result9}` );
let result10 = actif || "valeur par défaut" ;
console.log(`actif || "valeur par défaut -> ${result10}` );

/*Partie C*/
const nomsVariables = ["nom", "age", "ville", "score", "actif"];
let tab = [ [result1,result6], [result2,result7], [result3,result8], [result4,result9], [result5,result10]];
let i;

for(i=0; i<tab.length; i++){
    let comparaison = (tab[i][0] === tab[i][1]) ? "même résultat" : "résultat différent";
    console.log(`${nomsVariables[i]} : ?? et || -> ${comparaison}`);
}
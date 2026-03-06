let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
let i;

for (i=0; i<=valeurs.length; i++) {
    if(valeurs[i]){
        console.log(`${valeurs[i]} -> truthy`);
    }else{
        console.log(`${valeurs[i]} -> falsy`);
    }
}
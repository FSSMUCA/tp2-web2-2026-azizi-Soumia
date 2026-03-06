let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

let i;
for(i = 0; i<nombres.length; i++){
    let a = nombres[i];
    
    if (Number.isNaN(a)){
        console.log(`${a} -> INVALIDE`);
    }else if (a === Infinity ||  a === -Infinity){
        console.log(`${a} -> INFINIE`);
    }else if (1 / a === -Infinity) {
        console.log(`${a} -> ZERO NEGATIF`);
    }else if (Number.isSafeInteger(a)){
        console.log(`${a} -> ENTIER SUR`);
    }else if (!Number.isSafeInteger(a)){
        console.log (`${a} -> ENTIER HORS LIMITE`);
    }else {
        console.log(`${a} -> DECIMALE`);
    }
    
}
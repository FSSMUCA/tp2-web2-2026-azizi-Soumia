let tab = [[0 , ""], [0 , "0" ], [0 , false ], ["", false ],
          [null , undefined ], [null , false ], [NaN, NaN], 
          [1,"1"], [" \t\n ", 0 ] ] ;

let i;
let c =0;
for (i=0; i<tab.length; i++){
    if (tab[i][0] == tab[i][1] && tab[i][0] !== tab[i][1]) {
        c++;
    }
    let a = (typeof tab[i][0] === "string") ? `"${tab[i][0]}"` : tab[i][0];
    let b = (typeof tab[i][1] === "string") ? `"${tab[i][1]}"` : tab[i][1];

     console.log(`${a} == ${b} -> ${tab[i][0]==tab[i][1]} | ${a} === ${b} -> ${tab[i][0]===tab[i][1]} `);
     console.log(`${c} paire(s) où == et === donnent des résultats différents`) ;
}

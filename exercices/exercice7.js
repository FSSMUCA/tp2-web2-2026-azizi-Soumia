let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

/* Q1 */
let sousTotal = prix * quantite;
console.log(`Sous total est : ${sousTotal.toFixed(2)}`);

/* Q2 */
let reduction = (codePromo !== null && estMembre) ? sousTotal * (reductionPourcentage / 100) : 0;
console.log(`Réduction : ${reduction}`);

/* Q3 */
let totalFinal = sousTotal - reduction;
console.log(`Total final : ${totalFinal.toFixed(2)}`);

/* Q4 */
let paiementAccepte = soldeCompte >= totalFinal;
let paiementSuff = paiementAccepte ? `Paiement accepté` : `Solde insuffisant`;
console.log(`Status : ${paiementSuff}`);

/* Q5 */
let nouveauSolde = paiementAccepte ? soldeCompte - totalFinal : soldeCompte;
console.log(`Solde : ${nouveauSolde}`);

/* Récapitulatif */
console.log(`=======Récapitulatif=====`);
console.log(`Produit : ${nomProduit}`);
console.log(`Quantité : ${quantite}`);
console.log(`Prix Unit. : ${prix} MAD`);
console.log(`Sous-Total : ${sousTotal.toFixed(2)} MAD`);
console.log(`Réduction : ${reduction} MAD`);
console.log(`Total : ${totalFinal.toFixed(2)} MAD`);
console.log(`Status : ${paiementSuff}`);
console.log(`Solde : ${nouveauSolde} MAD`);
console.log(`===========================`);

let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";


let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";


let ageCorrige = parseInt(age);
let ageValide = (!isNaN(ageCorrige) && ageCorrige > 0) ? ageCorrige : "Valeur invalide";


let emailValide = email.includes("@") && email.indexOf(".", email.indexOf("@")) > -1;
let emailStatut = emailValide ? "valide" : "invalide : pas de point après @";


let scoreCorrige = parseInt(scoreJeu);
if (isNaN(scoreCorrige)) scoreCorrige = 0;


let estAdminCorrige = (estAdmin === "true");


let derniereConnexionCorrige = derniereConnexion ?? "Jamais connecté";


let nombreConnexionsNum = parseInt(nombreConnexions);
let nombreConnexionsCorrige = (nombreConnexionsNum === 0) ? "Aucune connexion" : nombreConnexionsNum;


console.log("\n===== RAPPORT UTILISATEUR =====");
console.log(`nom               : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age               : ${ageValide} (${ageValide === "Valeur invalide" ? "invalide" : "valide"})`);
console.log(`email             : "${email}" (${emailStatut})`);
console.log(`scoreJeu          : ${scoreCorrige} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin          : ${estAdminCorrige} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion : "${derniereConnexionCorrige}" (valeur par défaut via ??)`);
console.log(`nombreConnexions  : "${nombreConnexionsCorrige}" (${nombreConnexionsNum === 0 ? "0 après conversion" : nombreConnexionsNum})`);
console.log("================================");
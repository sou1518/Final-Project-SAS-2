
// 1. Add a new candidate
const candidats = [];
console.log("[1]. Ajouter un nouveau candidat: ");
console.log("[2]. Ajouter plusieurs candidats a la fois: ");
console.log("[3]. Afficher la liste des candidats: ");
console.log("[4]. Voter pour un candidats: ");
console.log("[5]. Modifier les infos: ");
console.log("[6]. Supprimer un candidats: ");
console.log("[7]. Recherche des candidats: ");
console.log("[8]. Statistiques de l'election: ");
console.log("[0]. Quitter: ");

function Addanewcandidat(){
 let CIN = prompt("What's your CIN : ");
let lastName = prompt("What's your last name: ");
let firstName = prompt("What's your first name: ");
let politicalParty = prompt("What's your political party : ")
let age = Number(prompt("How old are you : "))
if(politicalParty===""){
    politicalParty="Independent";
}

}
let candidat = {
    cin: CIN,
	lastName: lastName,
	firstName: firstName,
	politicalParty: politicalParty,
	age: age,
	voters: []
}
candidats.push(candidat)
}
Addanewcandidat()
console.log(candidats)


//2.Ajouter plusieurs candidats à la fois

function ajouterPlusieursCandidats() {

    let continuer = "oui";

    while (continuer === "oui") {

        ajouterCandidat();

        continuer = prompt("Voulez-vous ajouter un autre candidat ? oui/non");
    }
}


//3. Afficher la liste des candidats


function afficherCandidats() {

    for (let i = 0; i < candidats.length; i++) {


        console.log("CIN :", candidats[i].cin);
        console.log("Nom :", candidats[i].nom);
        console.log("Prénom :", candidats[i].prenom);
        console.log("Parti :", candidats[i].partiPolitique);
        console.log("Âge :", candidats[i].age);
        console.log("Nombre de votes :", candidats[i].electeurs.length);
         
 }

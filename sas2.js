const prompt = require('prompt-sync')();
// 1. Add a new candidate
console.log("[1]. Ajouter un nouveau candidat: ");
console.log("[2]. Ajouter plusieurs candidats a la fois: ");
console.log("[3]. Afficher la liste des candidats: ");
console.log("[4]. Voter pour un candidats: ");
console.log("[5]. Modifier les infos: ");
console.log("[6]. Supprimer un candidats: ");
console.log("[7]. Recherche des candidats: ");
console.log("[8]. Statistiques de l'election: ");
console.log("[0]. Quitter: ");

const candidats = [
  { cin: "AB123456", lastName: "Boushaba", firstName: "Soufiane", politicalParty: "Independent", age: 40,
    voters: [] },
  { cin: "CD234567", lastName: "El Amrani", firstName: "Fatima Zahra", politicalParty: "PJD", age: 35,
    voters: ["AB123456", "GH456789", "KL678901"] },
  { cin: "EF345678", lastName: "Chraibi", firstName: "Younes", politicalParty: "RNI", age: 45,
    voters: [] },
  { cin: "GH456789", lastName: "Bennani", firstName: "Salma", politicalParty: "PAM", age: 29,
    voters: ["IJ567890"] },
  { cin: "IJ567890", lastName: "Ouahbi", firstName: "Karim", politicalParty: "Istiqlal", age: 52,
    voters: [] },
  { cin: "KL678901", lastName: "Ziani", firstName: "Nadia", politicalParty: "Independent", age: 33,
    voters: [] },
  { cin: "MN789012", lastName: "Tazi", firstName: "Hamza", politicalParty: "USFP", age: 60,
    voters: ["QR901234"] },
  { cin: "OP890123", lastName: "Idrissi", firstName: "Meryem", politicalParty: "PJD", age: 27,
    voters: [] },
  { cin: "QR901234", lastName: "Berrada", firstName: "Omar", politicalParty: "RNI", age: 38,
    voters: ["CD234567", "EF345678", "MN789012"] },
  { cin: "ST012345", lastName: "Fassi", firstName: "Khadija", politicalParty: "PAM", age: 31,
    voters: [] },
];

function Addanewcandidat(){
let CIN = prompt("What's your CIN : ");
let lastName = prompt("What's your last name: ");
let firstName = prompt("What's your first name: ");
let politicalParty = prompt("What's your political party : ")
let age = Number(prompt("How old are you : "))
if(politicalParty===""){
    politicalParty="Independent";
}

let candidat = {
    CIN: CIN,
	lastName: lastName,
	firstName: firstName,
	politicalParty: politicalParty,
	age: age,
	voters: []
}
candidats.push(candidat)
}
ajouterPlusieursCandidats();
console.log(candidats)


//2.Ajouter plusieurs candidats à la fois

function ajouterPlusieursCandidats() {

    let continuer = "oui";

    while (continuer === "oui") {

        Addanewcandidat();

        continuer = prompt("Voulez-vous ajouter un autre candidat ? oui/non :");
    }
}


//3. Afficher la liste des candidats

function afficherCandidats() {

    for (let i = 0; i < candidats.length; i++) {


        console.log("CIN :", candidats[i].cin);
        console.log("lastName :", candidats[i].lastName);
        console.log("firstName :", candidats[i].firstName);
        console.log("politicalParty :", candidats[i].politicalParty);
        console.log("age :", candidats[i].age);
        console.log("voters :", candidats[i].voters.length);
      console.log("---------------------------------------------")
         
 }
}
afficherCandidats()
console.log("test")

//compare candidates by number of votes 
function numofvotres(arry) {
    for (let i = 0; i < arry.length - 1; i++) {

        for (let j = 0; j < arry.length - i - 1; j++) {

            if (arry[j].voters.length< arry[j + 1].voters.length) {
                let temp = arry[j];
                arry[j] = arry[j + 1];
                arry[j + 1] = temp;
            }
        }
    }
    afficherCandidats(arry);
}

numofvotres(candidats);

//Filter and display only the candidates

function Filter(arr,SPP){
    let res=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i].politicalParty===SPP){
            res.push(arr[i])
        }
    afficher(res)
    }
} 

//4. Vote for a candidate

function voter(){
let cinvoters = prompt("enter your CIN : ")
let alreadyVoted = false
for (let i = 0; i< cadidats.length; i++){
if(candidats[i].voters.includes(cinvoters)){
alreadyVoted = true
break;
}
}

if(alreadyVoted){
    console.log("you have already voted you are not allowed to vote again");
return;
}
let cincandidat = prompt("enter the candidat cin : ");
let candidat = candidat.find(function(candidate) {
    return condidate.cin === cincandidat;

});
if(candidat){
candidat.voters.push(cinvoters)
console.log("Vote recorded successfully")
}
else{
    console.log("candidat not found");
}
}
//5. Edit a candidate's information

function modifierCandidat() {

    let cin = prompt("Entercandidat is cin : ");

    let candidat = candidats.find(function(candidate) {
        return candidate.cin === cin;
    });

    if (!candidat) {

        console.log("Candidat introuvable.");
        return;
    }

    let newParty = prompt("New party : ");
    let newage = Number(prompt("New age : "));

    candidat.politicalparty = newParty;
    candidat.age = newage;

    console.log("Candidat modified successfully !");
}
















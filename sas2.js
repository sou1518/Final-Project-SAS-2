const prompt = require (`prompt-sync`)();

let candidats = [
{
        cin: "A123456",
        nom: "AKHANNOUCH",
        prenom: "Aziz",
        partiPolitique: "RNI",
        age: 63,
        electeurs: []
    },
    {
        cin: "B654321",
        nom: "WAHBI",
        prenom: "Abdellatif",
        partiPolitique: "PAM",
        age: 62,
        electeurs: []
    },
    {
        cin: "C789012",
        nom: "BARAKA",
        prenom: "Nizar",
        partiPolitique: "Istiqlal",
        age: 60,
        electeurs: []
    },
    {
        cin: "D345678",
        nom: "BENKIRANE",
        prenom: "Abdelilah",
        partiPolitique: "PJD",
        age: 70,
        electeurs: []
    }
];

let choix; 
do {
    console.log("GESTION DES ELECTIONS - MENU PRINCIPAL");
    console.log("1. Ajouter un nouveau candidat");
    console.log("2. Ajouter plusieurs candidats ");
    console.log("3. Afficher la liste des candidats");
    console.log("4. Voter pour un candidat");
    console.log ("5. Modifier les informations d'un candidat");
    console.log("6. Supprimer un candidat");
    console.log ("7. Rechercher un candidat par nom");
    console.log("8. Afficher les statistiques de l'élection");
    console.log("9. Quitter");
    choix = prompt("Votre choix (1-9) : ")
    
switch (choix) {
    case "1":
      ajouterCandidat();
      break;

    case "2":
      ajouterPlusieursCandidats();
      break;

    case "3":
      afficherCandidats();
      break;

    case "4":
      voter ();
      break;

    case "5":
      modifierCandidat();
      break;

    case "6":
      supprimerCandidat();
      break;

    case "7":
      rechercherCandidat();
      break;

    case "8":
      
      afficherStatistiques();
      break;

    case "9":
        console.log("Au revoir et à bientot ")
      break;

    default:
      console.log("Choix invalide ! Tapez un chiffre entre 1 et 9.");
  }

}while(choix !== "9")

function ajouterCandidat() {
        console.log("Ajouter un nouveau candidat ")
    let cin = prompt(" CIN: ");
    let nom = prompt(" nom: ");
    let prenom = prompt(" prenom: ");
    let partiPolitique = prompt("Entrez la parti politique (ou indépendant): ");
    let age = Number(prompt("age: "));

    let candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    };
    candidats.push(candidat);
    console.log("candidat ajouter avec succés");
};


function ajouterPlusieursCandidats() {

    console.log("Ajouter plusieurs candidats");
    let number = Number(prompt("Combien de candidats voulez-vous ajouter? : "));
    for (let i = 0; i < number; i++) {
        console.log(`Candidat N°${i + 1}`);
        let cin = prompt(" CIN: ");
        let nom = prompt("nom: ");
        let prenom = prompt("prenom: ");
        let partiPolitique = prompt("parti politique: ");
        let age = Number(prompt("age : "));
 {
        let candidat = {
        
            cin: cin,
            nom: nom,
            prenom: prenom,
            partiPolitique: partiPolitique,
            age: age,
            electeurs: []
        };
            candidats.push(candidat)
                console.log("candidat ajouter avec succés");

        };
    }
}

function afficherCandidats() {
    if (candidats.length === 0) {
        console.log("Aucun candidat enregistré pour le moment.");
        return;
    }

    console.log("OPTIONS D'AFFICHAGE ");
    console.log("1. Afficher tous les candidats");
    console.log("2. Trier par votes");
    console.log("3. Filtrer par parti politique");

    let sousChoix = prompt("Votre choix (1-3) : ");

    if (sousChoix === "1") {
        for (let i = 0; i < candidats.length; i++) {
            console.log(candidats[i].nom);
            console.log(candidats[i].prenom);
            console.log("Votes:");
            console.log(candidats[i].electeurs.length);
        }
    } else if (sousChoix === "2") {
        
        for (let i = 0; i < candidats.length; i++) {
            for (let j = i + 1; j < candidats.length; j++) {
                if (candidats[i].electeurs.length < candidats[j].electeurs.length) {
                    let candidatTemporaire = candidats[i];
                    candidats[i] = candidats[j];
                    candidats[j] = candidatTemporaire;
                }
            }
        }
        
        for (let i = 0; i < candidats.length; i++) {
            console.log(candidats[i].nom);
            console.log(candidats[i].prenom);
        }
    } else if (sousChoix === "3") { 
        let parti = prompt("Parti : ");
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].partiPolitique === parti) {
                console.log(candidats[i].nom);
                console.log("parti:");
                console.log(candidats[i].partiPolitique);
            }
        }
    } else {
        console.log("choix invalide !");
    }
} 

function voter() {
    if (candidats.length === 0) {
        console.log("Aucun candidat disponible pour le vote.");
        return;
    }

    let cinElecteur = prompt("Entrez votre CIN (Électeur) : ");
    let dejaVote = false;
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (candidats[i].electeurs[j] === cinElecteur) {
                dejaVote = true;
                break;
            }
        }
        if (dejaVote) break;
    }

    if (dejaVote) {
        console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau");
        return;
    }

    let cinCandidat = prompt("Entrez le CIN du candidat pour lequel vous voulez voter : ");
    let candidatTrouve = false;

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinCandidat) {
            candidats[i].electeurs.push(cinElecteur);
            console.log("Votre vote a été enregistré avec succès !");
            candidatTrouve = true;
            break;
        }
    }

    if (!candidatTrouve) {
        console.log("Candidat non trouvé avec ce CIN.");
    }
}

function modifierCandidat() {
    let cinRecherche = prompt("Entrez le CIN du candidat à modifier : ");
    let trouve = false;

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinRecherche) {
            trouve = true;
            console.log("1. Modifier le parti politique");
            console.log("2. Modifier l'âge");
            let choix = prompt("Votre choix (1-2) : ");

            if (choix === "1") {
                let nouveauParti = prompt("Nouveau parti : ");
                candidats[i].partiPolitique = nouveauParti;
                console.log("Modifié avec succès !");
            } else if (choix === "2") {
                let nouvelAge = Number(prompt("Nouvel âge : "));
                candidats[i].age = nouvelAge;
                console.log("Modifié avec succès !");
            }
            break;
        }
    }

    if (!trouve) {
        console.log("Candidat non trouvé !");
    }
}


function supprimerCandidat() {
    let cinRecherche = prompt("Entrez le CIN du candidat à supprimer : ");
    let nouveauxCandidats = [];
    let trouve = false;

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinRecherche) {
            trouve = true; 
        } else {
            nouveauxCandidats.push(candidats[i]);
        }
    }

    candidats = nouveauxCandidats;

    if (trouve) {
        console.log("Candidat supprimé avec succès !");
    } else {
        console.log("Candidat non trouvé !");
    }
}

function rechercherCandidat() {
    let recherche = prompt("Entrez le Nom ou le CIN du candidat : ");
    let trouve = false;

    for (let i = 0; i < candidats.length; i++) {
        
        if (candidats[i].nom === recherche || candidats[i].cin === recherche) {
            console.log(" CANDIDAT TROUVÉ ");
            console.log(candidats[i]); 
            trouve = true;
        }
    }

    if (!trouve) {
        console.log("Aucun candidat trouvé.");
    }
}

function afficherStatistiques() {
    if (candidats.length === 0) {
        console.log("Aucun candidat disponible pour les statistiques.");
        return;
    }

    console.log("STATISTIQUES DE L'ÉLECTION ");

    
    console.log("Nombre total de candidats : " + candidats.length);


    let totalVotes = 0;
    for (let i = 0; i < candidats.length; i++) {
        totalVotes = totalVotes + candidats[i].electeurs.length;
    }
    console.log("Nombre total de votes exprimés : " + totalVotes);

    
    let candidatsTries = [];
    for (let i = 0; i < candidats.length; i++) {
        candidatsTries.push(candidats[i]);
    }

    for (let i = 0; i < candidatsTries.length - 1; i++) {
        for (let j = i + 1; j < candidatsTries.length; j++) {
            if (candidatsTries[i].electeurs.length < candidatsTries[j].electeurs.length) {
                let temp = candidatsTries[i];
                candidatsTries[i] = candidatsTries[j];
                candidatsTries[j] = temp;
            }
        }
    }

    console.log("TOP 3 CANDIDATS ");
    let limite = 3;
    if (candidatsTries.length < 3) {
        limite = candidatsTries.length;
    }

    for (let i = 0; i < limite; i++) {
      let C = candidatsTries[i];
        console.log("Candidat N° "+ (i +1));
        console.log("Nom:"+ C.nom +" " +C.prenom);
                console.log("Votes :"+ C.electeurs.length);

    }

  
    let partiSaisi = prompt("Entrez le nom d'un parti pour savoir son nombre de candidats : ");
    let nombreCandidatsParti = 0;

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].partiPolitique === partiSaisi) {
            nombreCandidatsParti++;
        }
    }
    console.log("Nombre de candidats pour le parti " + partiSaisi + " : " + nombreCandidatsParti);
}












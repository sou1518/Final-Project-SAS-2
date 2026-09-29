const prompt = require(`prompt-sync`)();

let candidats = [
    {
        cin: "A123456",
        nom: "AKHANNOUCH",
        prenom: "Aziz",
        partiPolitique: "RNI",
        age: 63,
        electeurs: ["T334455", "d331155"]
    },
    {
        cin: "B654321",
        nom: "WAHBI",
        prenom: "Abdellatif",
        partiPolitique: "PAM",
        age: 62,
        electeurs: ["ww22442"]
    },
    {
        cin: "C789012",
        nom: "BARAKA",
        prenom: "Nizar",
        partiPolitique: "Istiqlal",
        age: 60,
        electeurs: ["qq1122", "hh5555", "zz8893"]
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
    console.log("5. Modifier les informations d'un candidat");
    console.log("6. Supprimer un candidat");
    console.log("7. Rechercher un candidat par nom");
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
            voter();
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

} while (choix !== "9")

function ajouterCandidat() {
    let s = false
    console.log("Ajouter un nouveau candidat ")
    let cin = prompt(" CIN: ");
    for (let i = 0; i < candidats.length; i++) {
        if (cin === candidats[i].cin) {
            console.log("we have thats cin")
            s = true
        }
    } if (s === false) {
        let nom = prompt("nom : ");
        let prenom = prompt("prenom : ");
        let partiPolitique = prompt("Entrez la parti politique : ");
        if (partiPolitique === "" || partiPolitique === " ") {
            partiPolitique = "Indepand"
        }
        let age = Number(prompt("age : "));
        if (age < 18 || age > 70) {
            console.log("invalid age")
        } else if (age >= 18 && age < 70) {
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
        } else {
            console.log("number ")
        }
    }
}
function ajouterPlusieursCandidats() {

    console.log("Ajouter plusieurs candidats");
    let number = Number(prompt("Combien de candidats voulez-vous ajouter? : "));
    for (let i = 0; i < number; i++) {
        console.log(`Candidat N°${i + 1}`);
        ajouterCandidat()
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
            console.log(`Cin : ${candidats[i].cin}
           |name : ${candidats[i].nom}
           |prenom : ${candidats[i].prenom}
           |parti politique : ${candidats[i].partiPolitique}
           |age : ${candidats[i].age}
           |electeur : ${candidats[i].electeurs}`)
        }
    } else if (sousChoix === "2") {
        let list = [...candidats]
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list.length - 1 - i; j++) {
                if (list[j].electeurs.length < list[j + 1].electeurs.length) {
                    let candidatTemporaire = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = candidatTemporaire;
                }
            }
        }
        for (let i = 0; i < list.length; i++) {
            console.log(`Cin : ${list[i].cin}
           |name : ${list[i].nom}
           |prenom : ${list[i].prenom}
           |parti politique : ${list[i].partiPolitique}
           |age : ${list[i].age}
           |electeur : ${list[i].electeurs}`)
        }
    } else if (sousChoix === "3") {
        let parti = prompt("Parti : ");
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].partiPolitique === parti) {
                console.log(`Cin : ${candidats[i].cin}
           |name : ${candidats[i].nom}
           |prenom : ${candidats[i].prenom}
           |parti politique : ${candidats[i].partiPolitique}
           |age : ${candidats[i].age}
           |electeur : ${candidats[i].electeurs}`)
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
        if (dejaVote === false)
            break;
    }

    if (dejaVote === false) {
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
                if (nouvelAge < 18 || nouvelAge > 70) {
                    console.log("invalid age")
                } else {
                    candidats[i].age = nouvelAge;
                    console.log("Modifié avec succès !");
                }
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
    let trouve = false;

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinRecherche) {
            console.log("yes/no :")
            let as = prompt("your choix : ")
            if (as === "yes") {
                candidats.splice(i, 1)
                trouve = true;
            } else if (as === "no") {
                console.log("ok bienvenu")
            } else (
                console.log("just yes/no ")
            )
        }
    }
    if (trouve === false) {
        console.log("we don find thats user")
    }
}

function rechercherCandidat() {
    let recherche = prompt("Entrez le Nom ou le CIN du candidat : ");
    let trouve = false;

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom === recherche || candidats[i].cin === recherche) {
            console.log(" CANDIDAT TROUVÉ ");
            console.log(`Cin : ${candidats[i].cin}
           |name : ${candidats[i].nom}
           |prenom : ${candidats[i].prenom}
           |parti politique : ${candidats[i].partiPolitique}
           |age : ${candidats[i].age}
           |electeur : ${candidats[i].electeurs}`)
            trouve = true;
        }
    }

    if (trouve === false) {
        console.log("Aucun candidat trouvé.");
    }
}

function Stati() {
    console.log(`1: Afficher le nombre total de candidats. 
2 :Afficher le nombre total de votes exprimés dans toute l'élection
3: Afficher le Top 3 des candidats ayant le plus de votes. 
4: Afficher le nombre de candidats par parti politique`)
    let choi = Number(prompt("your choice : "))
    if (choi === 1) {
        let k = 0
        for (let i = 0; i < candidats.length; i++) {
            k++
        }
        console.log(`le total de candidats.: ${k}`)
    } else if (choi === 2) {
        let bb = 0
        for (let i = 0; i < candidats.length; i++) {
            bb += candidats[i].electeurs.length
        }
        console.log(`total electeurs ${bb}`)
    } else if (choi === 3) {
        let listeTriee = [...candidats]
        for (let i = 0; i < listeTriee.length; i++) {
            for (let x = 0; x < listeTriee.length - 1 - i; x++) {
                if (listeTriee[x].electeurs.length < listeTriee[x + 1].electeurs.length) {
                    let s = listeTriee[x]
                    listeTriee[x] = listeTriee[x + 1]
                    listeTriee[x + 1] = s
                }
            }
        }
        let limite = 3
        if (listeTriee.length < 3) {
            limite = listeTriee.length
        }
        console.log(`Top 3 des candidats :`)
        for (let i = 0; i < limite; i++) {
            console.log(`cin : ${listeTriee[i].cin}
            |nom : ${listeTriee[i].nom}
            |prenom : ${listeTriee[i].prenom}
            |partiPolitique : ${listeTriee[i].partiPolitique}
            |age : ${listeTriee[i].age}
            |Total : ${listeTriee[i].electeurs.length}
            _________________________`)
        }
    } else if (choi === 4) {
        let partis = []
        for (let i = 0; i < candidats.length; i++) {
            let existe = false
            for (let x = 0; x < partis.length; x++) {
                if (partis[x] === candidats[i].partiPolitique) {
                    existe = true
                    break
                }
            }
            if (existe === false) {
                partis.push(candidats[i].partiPolitique)
            }
        }
        for (let i = 0; i < partis.length; i++) {
            let compteur = 0
            for (let x = 0; x < candidats.length; x++) {
                if (candidats[x].partiPolitique === partis[i]) {
                    compteur++
                }
            }
            console.log(`${partis[i]} : ${compteur} candidat(s)`)
        }
    } else {
        console.log("thats is not option ")
    }
}

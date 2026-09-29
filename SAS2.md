
function Stati() {
    console.log(colorer(`1: Afficher le nombre total de candidats. 
2 :Afficher le nombre total de votes exprimés dans toute l'élection
3: Afficher le Top 3 des candidats ayant le plus de votes. 
4: Afficher le nombre de candidats par parti politique`, couleurs.jaune))
    let choi = Number(prompt(colorer("your choice : ", couleurs.cyan)))
    if (choi === 1) {
        let k = 0
        for (let i = 0; i < candidats.length; i++) {
            k++
        }
        console.log(colorer(`le total de candidats.: ${k}`, couleurs.vert))
    } else if (choi === 2) {
        let bb = 0
        for (let i = 0; i < candidats.length; i++) {
            bb += candidats[i].electeurs.length
        }
        console.log(colorer(`total electeurs ${bb}`, couleurs.vert))
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
        console.log(colorer(`Top 3 des candidats :`, couleurs.vert))
        for (let i = 0; i < limite; i++) {
            console.log(colorer(`cin : ${listeTriee[i].cin}
            |nom : ${listeTriee[i].nom}
            |prenom : ${listeTriee[i].prenom}
            |partiPolitique : ${listeTriee[i].partiPolitique}
            |age : ${listeTriee[i].age}
            |Total : ${listeTriee[i].electeurs.length}
            _________________________`, couleurs.gras))
        }
    } else if (choi === 4) {
        let partis = []
        for (let i = 0; i < candidats.length; i++) {
            let existe = false
            for (let x = 0; x < partis.length; x++) {
                if (partis[x] === candidats[i].partiPolitique) {
            }
                }
                    existe = true
                    break
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
            console.log(colorer(`${partis[i]} : ${compteur} candidat(s)`, couleurs.vert))
        }
    } else {
        console.log(colorer("thats is not option ", couleurs.rouge))
    }
}
function colorer(texte, code) {
    return code + texte + couleurs.rese
const candidats = [];

function Addanewcandidat(){
 let CIN = prompt("What's your CIN : ");
let lastName = prompt("What's your last name: ");
let firstName = prompt("What's your first name: ");
let politicalParty = prompt("What's your political party : ")
let age = Number(prompt("How old are you : "))
if(politicalParty===""){
    politicalParty="Independent";
}
  let type = false;
  while(!type){
    if(typeof age === typeof 18)
    return type = true;
    console.log(promot("write your number :"))
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

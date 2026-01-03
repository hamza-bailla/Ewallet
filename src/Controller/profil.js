import { user, Transactions } from '../Model/data.js';

// --- INITIALISATION DES DONNÉES (LocalStorage) ---
let storedUser = JSON.parse(localStorage.getItem('currentUser'));

if (!storedUser) {
    // Premier chargement : on initialise avec les données du fichier data.js
    localStorage.setItem('currentUser', JSON.stringify(user[0]));
    storedUser = user[0];
}
let currentUser = storedUser;

//cette importation pour se deconnecter
import { logoutF } from './logout.js';
logoutF();



const name = document.getElementById("full_name");
const creationDate = document.getElementById("creation_date");
const numCompte = document.getElementById("account_number");
const soldeBalance = document.getElementById("bank_balance");
const email = document.getElementById("Email");
const telephone = document.getElementById("phone");
const dateBirth = document.getElementById("birth_year");
const nationa = document.getElementById("nationality");
const editBtn = document.getElementById("edit-profile");



// --- INITIALISATION DE L'AFFICHAGE ---
document.addEventListener("DOMContentLoaded", () => {
    //if (welcomeMessage) welcomeMessage.textContent = `Bienvenue ${currentUser.nom}`;
    //if (dateDisplay) dateDisplay.textContent = new Date().toLocaleDateString('fr-FR');
    if (soldeBalance) soldeBalance.textContent = `${currentUser.solde || 0} DH`;
    if (name) name.textContent = `${currentUser.nom}`;
    if (creationDate) creationDate.textContent = `${currentUser.dateNaissance}`;
    if (email) email.textContent = `${currentUser.mail}`;
    if (telephone) telephone.textContent = `${currentUser.tele}`;
    if (dateBirth) dateBirth.textContent = `${currentUser.dateNaissance}`;
    if (nationa) nationa.textContent = `${currentUser.Nationalite}`;
    if (numCompte) numCompte.textContent = `${currentUser.numerocompte}`;
});
console.log("Élément nom trouvé :", document.getElementById("full_name"));
console.log("Données utilisateur :", currentUser);

editBtn.addEventListener("click",modifications);

function modifications(){

}


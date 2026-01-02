import { user, Transactions } from '../Model/data.js';

// --- INITIALISATION DES DONNÉES (LocalStorage) ---
let storedUser = JSON.parse(localStorage.getItem('currentUser'));

if (!storedUser) {
    // Premier chargement : on initialise avec les données du fichier data.js
    localStorage.setItem('currentUser', JSON.stringify(user[0]));
    storedUser = user[0];
}
let currentUser = storedUser;

// --- SÉLECTION DES ÉLÉMENTS DU DOM ---
const mainContainer = document.querySelector('.stats-card');
const welcomeMessage = document.getElementById("welcome_message"); 
const balanceDisplay = document.getElementById("balance");         
const dateDisplay = document.getElementById("date");
const teleBtn = document.getElementById('teleInternet');

// --- INITIALISATION DE L'AFFICHAGE ---
document.addEventListener("DOMContentLoaded", () => {
    if (welcomeMessage) welcomeMessage.textContent = `Bienvenue ${currentUser.nom}`;
    if (dateDisplay) dateDisplay.textContent = new Date().toLocaleDateString('fr-FR');
    if (balanceDisplay) balanceDisplay.textContent = `${currentUser.solde || 0} DH`;
});



//recuperer les champs transferer

const inputnomDes = document.getElementById("nom");
const inputcompte = document.querySelector("#ncompte");
const inputmontant = document.getElementById("montant");
const trandferBtn = document.querySelector("#btnTransferer");
trandferBtn.addEventListener("click",handlTransfererMontant);


function handlTransfererMontant(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(isNaN(inputnomDes) || isNaN(inputcompte) || isNaN(inputmontant) || inputmontant<0){
                reject("l'un des champ est invalid !!");
            }
        },1000)
    })
}

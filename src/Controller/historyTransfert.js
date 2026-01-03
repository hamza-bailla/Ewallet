// 1. Importation des données depuis le fichier centralisé
import { user, Transactions } from '../Model/data.js';
const storedUser = JSON.parse(localStorage.getItem('currentUser'));

if (storedUser) {
    // Si on trouve un utilisateur, on l'utilise
    var currentUser = storedUser;
} else {
    // Si le stockage est vide, c'est que l'utilisateur n'est pas connecté
    window.location.href = "login.html"; 
}

import { logoutF } from './logout.js';
logoutF();


// 2. Sélection des éléments
const tableBody = document.querySelector("#transfert tbody");
const balanceDisplay = document.getElementById("balance");
const welcomeMessage = document.getElementById("welcome_message");
const dateDisplay = document.getElementById("date");

const makeTransfertbtn = document.getElementById("transferer");
if(makeTransfertbtn) {
    makeTransfertbtn.addEventListener("click", handltransfert);
}

// 3. Initialisation Unique
document.addEventListener("DOMContentLoaded", () => {
    // Affichage des infos de base
    welcomeMessage.textContent = `Bienvenue, ${currentUser.nom}`;
    dateDisplay.textContent = new Date().toLocaleDateString('fr-FR');
    balanceDisplay.textContent = `${currentUser.solde} DH`;

    // APPEL UNIQUE : C'est cette fonction qui gère toute la logique
    displayTransfertVerment(); 
});

function displayTransfertVerment() {
    if (!tableBody) return; 

    tableBody.innerHTML = "";
    
    // Récupération des données (On définit TouteData ici)
    const transactionData = (typeof Transactions !== 'undefined') ? Transactions : [];
    const historique = JSON.parse(localStorage.getItem('transactions')) || [];
    const TouteData = [...transactionData, ...historique];

    TouteData.forEach(trans => {
        const row = document.createElement("tr");
        
        let amountColor = trans.type === "+" ? "green" : "red";
        const dateColor = "#27D6F5";

        row.innerHTML = `
            <td style="color: ${dateColor}; font-weight: bold;">
                ${trans.date || '00/00/0000'}
            </td>
            <td>
                ${trans.nomdestinataire || trans.description || 'Destinataire inconnu'}
            </td>
            <td style="color: ${amountColor}; font-weight: bold;">
                ${trans.type || '-'}${trans.montant || 0} DH
            </td>
            <td>
                ${trans.NumComptedest || 'Compte interne'}
            </td>
        `;
        tableBody.appendChild(row);
    });
    console.log(TouteData);
}


function handltransfert() {
    window.location.href = "transfert.html";
}
// // 2. Sélection des éléments
// const tableBody = document.querySelector("#transfert tbody");
// const balanceDisplay = document.getElementById("balance");
// const welcomeMessage = document.getElementById("welcome_message");
// const dateDisplay = document.getElementById("date");
// const selectedTypeTransaction = document.getElementById("mySelectTransaction");

// const makeTransfertbtn = document.getElementById("transferer");

// makeTransfertbtn.addEventListener("click",handltransfert);

// // 3. Initialisation du Dashboard
// document.addEventListener("DOMContentLoaded", () => {
    
//     // Afficher le message de bienvenue et la date
//     welcomeMessage.textContent = `Bienvenue,${currentUser.nom} `;
//     dateDisplay.textContent = new Date().toLocaleDateString('fr-FR');
    
//     // Afficher le solde (formaté en Dirhams par exemple)
//     balanceDisplay.textContent = `${currentUser.solde}DH`;

//     // Appeler la fonction pour ajouter la transaction au tableau
//     renderAllTransactions(TouteData);
// });

// // 4. Fonction pour injecter la transaction dans le HTML
// function displayTransaction(transf) {
//     // Créer une ligne de tableau
//     const row = document.createElement("tr");

//     // Définir la couleur selon le type (+ ou -)
//     const amountColor = "green" ;
//     const datecolor = "#27D6F5"

//     row.innerHTML = `
//         <td style="color: ${datecolor};font-weight: bold;">${transf.date}</td>
//         <td>${transf.nomdestinataire}</td>
//         <td style="color: ${amountColor}; font-weight: bold;">
//             ${transf.montant} DH
//         </td>
//         <td>${transf.NumComptedest}</td>
       
//     `;
// console.log(Transactions);
//     // Ajouter la ligne au tableau
//     tableBody.appendChild(row);
// }


// function renderAllTransactions(Transactions){
//     tableBody.innerHTML = "";
//     Transactions.forEach(item=>displayTransaction(item));
// }


// function handltransfert(){
//     window.location.href = "transfert.html"; 
// }



// function displayTransfertVerment() {
//     // 1. Sécurité : vérifier si l'élément HTML existe
//     if (!tableBody) return; 

//     // 2. Vider le tableau pour éviter les doublons à chaque appel
//     tableBody.innerHTML = "";
    
//     // 3. Récupération et Fusion des sources (data.js + localStorage)
//     const transactionData = (typeof Transactions !== 'undefined') ? Transactions : [];
//     const historique = JSON.parse(localStorage.getItem('transactions')) || [];
    
//     // On combine tout dans un seul tableau
//     const TouteData = [...transactionData, ...historique];

//     // 4. Boucle d'affichage
//     TouteData.forEach(trans => {
//         const row = document.createElement("tr");
        
//         // Détermination de la couleur (let car la valeur change)
//         let amountColor = trans.type === "+" ? "green" : "red";
//         const dateColor = "#27D6F5";

//         // Construction de la ligne
//         // On utilise l'opérateur || pour gérer les différences de noms entre les deux sources
//         row.innerHTML = `
//             <td style="color: ${dateColor}; font-weight: bold;">
//                 ${trans.date || '00/00/0000'}
//             </td>
//             <td>
//                 ${trans.nomdestinataire || trans.description || 'Destinataire inconnu'}
//             </td>
//             <td style="color: ${amountColor}; font-weight: bold;">
//                 ${trans.type || '+'}${trans.montant || 0} DH
//             </td>
//             <td>
//                 ${trans.NumComptedest || 'Compte interne'}
//             </td>
//         `;
        
//         tableBody.appendChild(row);
//     });
// }
// // Lancer l'affichage au chargement de la page
// document.addEventListener('DOMContentLoaded', displayTransfertVerment);


// // Appeler la fonction au chargement de la page
// window.onload = displayTransfertVerment;


// function renderAllTransactions(list) {
//     // On vide le tableau avant de le remplir pour éviter les doublons
//     tableBody.innerHTML = "";
//     list.forEach(item => displayTransfertVerment(item));
// }
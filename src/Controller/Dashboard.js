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

// Pour cet exemple, on considère que l'utilisateur connecté est le premier du tableau
//const currentUser = user[0];


// 2. Sélection des éléments du DOM
const tableBody = document.querySelector("#transactions tbody");
const balanceDisplay = document.getElementById("balance");
const welcomeMessage = document.getElementById("welcome_message");
const dateDisplay = document.getElementById("date");
const selectedTypeTransaction = document.getElementById("mySelectTransaction");

const transfBtn = document.getElementById("transferer");
const rechargerBtn = document.getElementById("recharger");
const payerBtn = document.getElementById("payer");

const logoutBtn = document.getElementById("logout");

// 3. Gestion des événements de navigation
transfBtn.addEventListener("click", Handltansf);
rechargerBtn.addEventListener("click", Handlrecharger);
payerBtn.addEventListener("click", HandlPayer);

function Handltansf() {
    window.location.href = "transfert.html"; 
}
function Handlrecharger() {
    window.location.href = "recharger.html"; 
}
function HandlPayer() {
    window.location.href = "payer.html"; 
}

// 4. Initialisation du Dashboard au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    // Afficher le message de bienvenue personnalisé
    welcomeMessage.textContent = `Bienvenue ${currentUser.nom}`;
    
    // Afficher la date du jour
    dateDisplay.textContent = new Date().toLocaleDateString('fr-FR');
    
    // Afficher le solde provenant de l'objet user (avec fallback si non défini)
    const solde = currentUser.solde || 0;
    balanceDisplay.textContent = `${solde} DH`;

    // Afficher toutes les transactions initiales
    renderAllTransactions(Transactions);
});

//5. Fonctions d'affichage des transactions
// function displayTransaction(trans) {
//     const row = document.createElement("tr");
//     const historique = JSON.parse(localStorage.getItem('transactions')) || [];
//     const transactionsData = Transactions || [];
//     const rechargementt = historique.trans;

//     // Définir la couleur selon le type (+ pour Crédit, - pour Débit)
//     const amountColor = trans.type === "+" ? "green" : "red";
//     const labelType = trans.type === "+" ? "Crédit" : "Débit";

//     row.innerHTML = `
//         <td>${trans.date}</td>
//         <td>${trans.description}</td>
//         <td>${labelType}</td>
//         <td style="color: ${amountColor}; font-weight: bold;">
//             ${trans.type}${trans.montant} DH
//         </td>
//     `;
    
//     //ajouter les rechargement au tableau dashboard
//     tableBody.appendChild(row);
//     //ajouter les rechargement au tableau dashboard

//     console.log(historique);
// }

function displayTransaction(){
    tableBody.innerHTML = "";
    const transactionData = Transactions || [];
    const historique = JSON.parse(localStorage.getItem('transactions')) || [];
    const TouteData = [...transactionData,...historique];

    TouteData.forEach(trans => {
         const row = document.createElement("tr");
         // Définir la couleur selon le type (+ pour Crédit, - pour Débit)
        const amountColor = trans.type === "+" ? "green" : "red";
        const labelType = trans.type === "+" ? "Crédit" : "Débit";
        row.innerHTML = `
        <td>${trans.date}</td>
        <td>${trans.description || "Rechargement du Solde"}</td>
        <td>${labelType}</td>
        <td style="color: ${amountColor}; font-weight: bold;">
            ${trans.type}${trans.montant} DH
        </td>
    `;
        //ajouter les rechargement au tableau dashboard
     tableBody.appendChild(row);
        
    });
}
// Lancer l'affichage au chargement de la page
document.addEventListener('DOMContentLoaded', displayTransaction);


// Appeler la fonction au chargement de la page
window.onload = displayTransaction;


function renderAllTransactions(list) {
    // On vide le tableau avant de le remplir pour éviter les doublons
    tableBody.innerHTML = "";
    list.forEach(item => displayTransaction(item));
}

// 6. Gestion du filtrage
selectedTypeTransaction.addEventListener("change", HandleFilter);

function HandleFilter() {
    const selectedValue = selectedTypeTransaction.value;
    let filteredList;

    if (selectedValue === "credit") {
        filteredList = Transactions.filter(item => item.type === "+");
    } else if (selectedValue === "debit") {
        filteredList = Transactions.filter(item => item.type === "-");
    } else {
        filteredList = Transactions; // "Tous"
    }

    renderAllTransactions(filteredList);
}



if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche le comportement par défaut si c'est un lien <a>
        
        // On vide le stockage
        localStorage.clear(); 
        
        // On redirige
        alert("Déconnexion réussie !");
        window.location.href = "login.html"; // Assurez-vous que le nom du fichier est correct
    });
}



// // 1. Importation avec les noms exacts (vérifie bien ton fichier data.js pour users)
// import { users, Transactions } from '../Model/data.js'; 

// // On définit currentUser après l'importation
// const currentUser = users ? users[0] : null;

// document.addEventListener("DOMContentLoaded", () => {
//     // 2. Sélection des éléments (à l'intérieur pour être sûr que le DOM est prêt)
//     const tableBody = document.querySelector("#transactions tbody");
//     const balanceDisplay = document.getElementById("balance");
//     const welcomeMessage = document.getElementById("welcome_message");
//     const dateDisplay = document.getElementById("date");
//     const selectedTypeTransaction = document.getElementById("mySelectTransaction");

//     const transfBtn = document.getElementById("transferer");
//     const rechargerBtn = document.getElementById("recharger");
//     const payerBtn = document.getElementById("payer");

//     if (currentUser) {
//         welcomeMessage.textContent = `Bienvenue ${currentUser.nom}`;
//         dateDisplay.textContent = new Date().toLocaleDateString('fr-FR');
//         balanceDisplay.textContent = `${currentUser.solde || 0} DH`;
//     }

//     // 3. Fonctions de navigation
//     transfBtn?.addEventListener("click", () => window.location.href = "transfert.html");
//     rechargerBtn?.addEventListener("click", () => window.location.href = "recharger.html");
//     payerBtn?.addEventListener("click", () => window.location.href = "payer.html");

//     // 4. Initialisation des transactions
//     const renderAllTransactions = (list) => {
//         if (!tableBody) return;
//         tableBody.innerHTML = "";
//         list.forEach(trans => {
//             const row = document.createElement("tr");
//             const amountColor = trans.type === "+" ? "green" : "red";
//             row.innerHTML = `
//                 <td>${trans.date}</td>
//                 <td>${trans.description}</td>
//                 <td>${trans.type === "+" ? "Crédit" : "Débit"}</td>
//                 <td style="color: ${amountColor}; font-weight: bold;">${trans.type}${trans.montant} DH</td>
//             `;
//             tableBody.appendChild(row);
//         });
//     };

//     renderAllTransactions(Transactions);

//     // 5. Filtrage
//     selectedTypeTransaction?.addEventListener("change", (e) => {
//         const val = e.target.value;
//         const filtered = val === "credit" ? Transactions.filter(t => t.type === "+") :
//                          val === "debit" ? Transactions.filter(t => t.type === "-") : Transactions;
//         renderAllTransactions(filtered);
//     });
// });




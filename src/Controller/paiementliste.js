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

// --- LOGIQUE DE PAIEMENT (PROMISE) ---
/**
 * Simule une transaction bancaire asynchrone
 */
function processPayment(montant) {
    return new Promise((resolve, reject) => {
        //le temps de traitement de 1 seconde
        setTimeout(() => {
            if (isNaN(montant) || montant <= 0) {
                reject("Veuillez saisir un montant valide.");
            } else if (currentUser.solde < montant) {
                reject("Solde insuffisant pour effectuer ce paiement.");
            } else {
                // Mise à jour locale
                currentUser.solde -= montant;
                // Sauvegarde permanente dans le navigateur
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                //localStorage.setItem('currentUser',JSON.stringify(currentUser));//POUR Sauvegarder dans le localstorage.
                //Sauvegarder le rechargement dans localstorage
            const NewPaiment = {
             date: new Date().toLocaleDateString(),
             type:'-',
             description: `Paiement Fixe de ${currentUser.nom} `,
             montant : montant,
            }
            //recuperer les historique de localstorage
            const historque = JSON.parse(localStorage.getItem('transactions'))||[];
             //ajouter cette transaction
            historque.push(NewPaiment);
            //sauvegarder dans localstorage
            localStorage.setItem('transactions',JSON.stringify(historque));
            console.log(historque);
                resolve("Paiement validé avec succès !");
            }
        }, 1000);
    });
}

// --- FONCTIONS DE NAVIGATION ET ÉTAPES ---

// Étape 2 : Liste des opérateurs
function afficherOperateursTele() {
    mainContainer.innerHTML = `
        <h1 align="center">Téléphonie et Internet</h1>
        <div class="operators-list">
            <button class="op-btn" id="marocTelecom" style="background: linear-gradient(135deg, #fbc2eb, #fbc2eb);">
                Maroc Telecom
            </button>
            <button class="op-btn" id="orange" style="background: linear-gradient(135deg, #fbc2eb, #fbc2eb);">
                 Orange Maroc
            </button>
        </div>
        <button onclick="location.reload()" class="btn-retour">← Retour</button>
    `;

    document.getElementById('marocTelecom').addEventListener('click', afficherProduitsIAM);
}

// Étape 3 : Liste des produits
function afficherProduitsIAM() {
    mainContainer.innerHTML = `
        <h1 align="center">Maroc Telecom</h1>
        <ul class="product-list">
            <li><button id="btnFixe" style="background: linear-gradient(135deg, #fbc2eb, #fbc2eb);">Produit Fixe</button></li>
            <li><button style="background: linear-gradient(135deg, #fbc2eb, #fbc2eb);">Produit Mobile</button></li>
            <li><button style="background: linear-gradient(135deg, #fbc2eb, #fbc2eb);">Produit Internet</button></li>
        </ul>
        <button id="backToOps" class="btn-retour">← Retour</button>
    `;

    document.getElementById('btnFixe').addEventListener('click', afficherFormulaireFixe);
    document.getElementById('backToOps').addEventListener('click', afficherOperateursTele);
}

// Étape 4 : Formulaire final et exécution de la Promise
window.afficherFormulaireFixe = function() {
    mainContainer.innerHTML = `
        <h1 align="center">Paiement Fixe</h1>
        <div class="form-Recharge">
            <p style="text-align:center">Solde actuel: <strong>${currentUser.solde} DH</strong></p>
            <input type="number" id="montantPay" placeholder="Montant (ex: 100)">
            <input type="text" id="numFixe" placeholder="N° de téléphone Fixe">
            <button id="btnValider" style="background: linear-gradient(135deg, #fbc2eb, #fbc2eb);">Valider le paiement</button>
        </div>
        <button id="backToProd" class="btn-retour">← Retour</button>
    `;

    document.getElementById('backToProd').addEventListener('click', afficherProduitsIAM);

    const btnValider = document.getElementById("btnValider");

    // GESTION DU CLIC AVEC ASYNC/AWAIT
    btnValider.addEventListener("click", async () => {
        const montant = parseFloat(document.getElementById("montantPay").value);

        // UI : Mode chargement
        btnValider.disabled = true;
        btnValider.textContent = "Vérification bancaire...";
        btnValider.style.opacity = "0.7";

        try {
            // Appel de la promesse
            const resultat = await processPayment(montant);
            
            // Succès
            alert(resultat);
            if (balanceDisplay) balanceDisplay.textContent = `${currentUser.solde} DH`;
            
            // Redirection vers le dashboard pour voir le nouveau solde
            window.location.href = "dashboard.html";           
        } catch (erreur) {
            // Échec
            alert("Erreur : " + erreur);
            btnValider.disabled = false;
            btnValider.textContent = "Valider le paiement";
            btnValider.style.opacity = "1";
        }
        
    });
};

// --- ÉCOUTEUR INITIAL ---
if (teleBtn) {
    teleBtn.addEventListener('click', afficherOperateursTele);
}

// if (EauElectriciteBtn){
//    // EauElectriciteBtn.addEventListener('click',afficherOperateursEauElectricite);
// }
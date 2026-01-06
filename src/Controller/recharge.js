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


// --- SÉLECTION DES ÉLÉMENTS DU DOM ---
const mainContainer = document.querySelector('.stats-card');
const welcomeMessage = document.getElementById("welcome_message"); 
const balanceDisplay = document.getElementById("balance");         
const dateDisplay = document.getElementById("date");
const teleBtn = document.getElementById('teleInternet');
const rechargerBtn = document.getElementById("recharger");
var cardId = 0;


// --- INITIALISATION DE L'AFFICHAGE ---
document.addEventListener("DOMContentLoaded", () => {
    if (welcomeMessage) welcomeMessage.textContent = `Bienvenue ${currentUser.nom}`;
    if (dateDisplay) dateDisplay.textContent = new Date().toLocaleDateString('fr-FR');
    if (balanceDisplay) balanceDisplay.textContent = `${currentUser.solde || 0} DH`;
});

 var newSoldCarte = currentUser.cartes.solde;




var typeCard = 0;

function AfficherOperateursBtn() {

    mainContainer.innerHTML = `
        <h1 align="center">Recharge mes Cartes</h1>
        <div class="form-pay" style="max-width: 500px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
            <p style="text-align:center">Solde actuel: <strong id="current-balance">${currentUser.solde.toLocaleString()} DH</strong></p>
            <p style="text-align:center; margin-bottom: 20px;">Choisir la carte que vous voulez charger :</p>
            
            <div class="cards-selection" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
                ${currentUser.cartes.map(carte => `
                    <label style="display: flex; align-items: center; padding: 15px; border: 2px solid #ddd; border-radius: 8px; cursor: pointer; transition: 0.3s;" class="card-label">
                        <input type="radio" name="selectedCard" value="${carte.id}" style="margin-right: 15px;" required>
                        <div style="flex-grow: 1;">
                            <strong>${carte.type}</strong> - **** ${carte.numCarte.toString().slice(-4)}
                        </div>
                        <div style="color: #27ae60; font-weight: bold;">
                            ${carte.solde.toLocaleString()} DH
                        </div>
                    </label>
                `).join('')}
            </div>

            <div style="margin-bottom: 20px;">
                <label>Montant à transférer :</label>
                <input type="number" id="montantPay" placeholder="Ex: 100" style="width: 100%; padding: 10px; margin-top: 5px; border-radius: 5px; border: 1px solid #ccc;">
            </div>

            <button id="validerRecharge" class="btn-valider" style="width: 100%; padding: 12px; background-color: #27ae60; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Valider le rechargement
            </button>
        </div>
        <button id="backToProd" class="btn-retour" style="margin-top: 20px;">← Retour</button>
    `;

    const Validerbtn = document.getElementById("validerRecharge");
    
    
    Validerbtn.addEventListener('click', async () => {
        
        const inputMontant = document.getElementById("montantPay");
        const Montant = parseFloat(inputMontant.value);
        const selectedRadio = document.querySelector('input[name="selectedCard"]:checked');
        typeCard = selectedRadio.value;
        // Validation simple
        if (!selectedRadio) {
            alert("Veuillez sélectionner une carte.");
            return;
            
        }
        if (isNaN(Montant) || Montant <= 0) {
            alert("Veuillez entrer un montant valide.");
            return;
        }
        if (Montant > currentUser.solde) {
            alert("Solde insuffisant sur votre compte principal.");
            return;
        }
        

        // UI : Mode chargement
        Validerbtn.disabled = true;
        Validerbtn.textContent = "Vérification bancaire...";
        Validerbtn.style.opacity = "0.7";

        try {
            // Appel de la promesse (doit être définie ailleurs dans votre code)
            const resultat = await processRecharge(Montant, selectedRadio.value);
            
            // Succès
            alert(resultat);
            
            // Redirection ou mise à jour UI
           // window.location.href = "dashboard.html"; 
           
        } catch (erreur) {
            // Échec
            alert("Erreur : " + erreur);
            Validerbtn.disabled = false;
            Validerbtn.textContent = "Valider le rechargement";
            Validerbtn.style.opacity = "1";
        }
    });

    // Gestion du bouton retour
    document.getElementById("backToProd").addEventListener('click', () => {
        // Logique pour revenir en arrière
        window.history.back();
    });
}


function processRecharge(Montant){
    var typo=parseInt(typeCard);
    var nametypeCard = "";
    if (typo === 1) {
    nametypeCard = "Visa";
    } else if (typo === 2) {
    nametypeCard = "MasterCard";
    }
    console.log(typo);
    console.log(nametypeCard);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(Montant)||Montant<0){
                reject("Montant invalide !!")
            }else{
                currentUser.solde -= Montant;
                newSoldCarte += Montant;
            localStorage.setItem('currentUser',JSON.stringify(currentUser));//POUR Sauvegarder dans le localstorage.
            //Sauvegarder le rechargement dans localstorage
            const NewTransaction = {
             date: new Date().toLocaleDateString(),
             type:'+',
             description: `Vous avez recharger la carte de Type ${nametypeCard} `,
             montant : Montant,
            }
            console.log(NewTransaction);
            //recuperer les historique de localstorage
            const historque = JSON.parse(localStorage.getItem('transactions'))||[];
             //ajouter cette transaction
            historque.push(NewTransaction);
            //sauvegarder dans localstorage
            localStorage.setItem('transactions',JSON.stringify(historque));
            

                resolve("Rechargement validé avec succès !");
            }
        },1000);
    });
    
}





if(rechargerBtn){
    rechargerBtn.addEventListener('click',AfficherOperateursBtn);
}


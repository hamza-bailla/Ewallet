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


// --- INITIALISATION DE L'AFFICHAGE ---
document.addEventListener("DOMContentLoaded", () => {
    if (welcomeMessage) welcomeMessage.textContent = `Bienvenue ${currentUser.nom}`;
    if (dateDisplay) dateDisplay.textContent = new Date().toLocaleDateString('fr-FR');
    if (balanceDisplay) balanceDisplay.textContent = `${currentUser.solde || 0} DH`;
});




function processRecharge(Montant){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(Montant)||Montant<0){
                reject("Montant invalide !!")
            }else{
                currentUser.solde += Montant;
                localStorage.setItem('currentUser',JSON.stringify(currentUser));//POUR Sauvegarder dans le localstorage.
            //Sauvegarder le rechargement dans localstorage
            const NewTransaction = {
             date: new Date().toLocaleDateString(),
             type:'+',
             description: `Rechargement du Solde de ${currentUser.nom}`,
             montant : Montant,
            }
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




function AfficherOperateursBtn(){
    mainContainer.innerHTML = `
        <h1 align="center">Recharge de mon Solde</h1>
        <div class="form-pay">
            <p style="text-align:center">Solde actuel: <strong>${currentUser.solde} DH</strong></p>
            <input type="number" id="montantPay" placeholder="Montant (ex: 100)">
            <button id="validerRecharge" style="background: linear-gradient(135deg, #fbc2eb, #fbc2eb);">Valider le recharge</button>
        </div>
        <button id="backToProd" class="btn-retour">← Retour</button>
    `;
const Validerbtn = document.getElementById("validerRecharge");
    //valider recharge avec Async/Await
Validerbtn.addEventListener('click',async()=>{
    const Montant = parseFloat(document.getElementById("montantPay").value);
    // UI : Mode chargement
        Validerbtn.disabled = true;
        Validerbtn.textContent = "Vérification bancaire...";
        Validerbtn.style.opacity = "0.7";

        try {
            // Appel de la promesse
            const resultat = await processRecharge(Montant);
            
            // Succès
            alert(resultat);
            if (balanceDisplay) balanceDisplay.textContent = `${currentUser.solde} DH`;
            
            // Redirection vers le dashboard pour voir le nouveau solde
            window.location.href = "dashboard.html"; 
           
        } catch (erreur) {
            // Échec
            alert("Erreur : " + erreur);
            Validerbtn.disabled = false;
            Validerbtn.textContent = "Valider le paiement";
            Validerbtn.style.opacity = "1";
        }


});
}




if(rechargerBtn){
    rechargerBtn.addEventListener('click',AfficherOperateursBtn);
}
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

const welcomeMessage = document.getElementById("welcome_message"); 
const balanceDisplay = document.getElementById("balance");         
const dateDisplay = document.getElementById("date");


// --- INITIALISATION DE L'AFFICHAGE ---
document.addEventListener("DOMContentLoaded", () => {
    if (welcomeMessage) welcomeMessage.textContent = `Bienvenue ${currentUser.nom}`;
    if (dateDisplay) dateDisplay.textContent = new Date().toLocaleDateString('fr-FR');
    if (balanceDisplay) balanceDisplay.textContent = `${currentUser.solde || 0} DH`;

});



//recuperer les champs transferer
const mainContainer = document.querySelector('.stats-card');
const inputnomDes = document.getElementById("nom");
const inputcompte = document.querySelector("#ncompte");
const inputmontant = document.getElementById("montant");
const transfBtn = document.getElementById("transfererr");
///trandferBtn.addEventListener("click",handlTransfererMontant);
const montant = inputmontant;
const nameDes = inputnomDes;
const numCompte = inputnomDes;




function AfficherOperateursBtn(){
mainContainer.innerHTML = `
        <h1 align="center">Transfert un Montant</h1>
        <div class="form-pay">
            <p style="text-align:center">Solde actuel: <strong>${currentUser.solde} DH</strong></p>
            <input type="text" id="nom" placeholder="Ex: Mohamed Alami">
            <input type="number" id="ncompte" placeholder="0000 0000 0000">
            <input type="number" id="montant" placeholder="Montant (ex: 100)">
            <button id="btnTransferer" style="background: linear-gradient(135deg, #fbc2eb, #fbc2eb);">Valider le transfert</button>
        </div>
        <button id="backToProd" class="btn-retour">← Retour</button>
    `;
    
const validTrandfer = document.getElementById("btnTransferer");
    //valider recharge avec Async/Await
validTrandfer.addEventListener('click',async()=>{
    const Montant = parseFloat(document.getElementById("montant").value);
    // UI : Mode chargement
        validTrandfer.disabled = true;
        validTrandfer.textContent = "Vérification bancaire...";
        validTrandfer.style.opacity = "0.7";

        try {
            // Appel de la promesse
            const resultat = await processTranfsert(Montant);
            
            // Succès
            alert(resultat);
            if (balanceDisplay) balanceDisplay.textContent = `${currentUser.solde} DH`;
            
            // Redirection vers le dashboard pour voir le nouveau solde
            window.location.href = "dashboard.html"; 
           
        } catch (erreur) {
            // Échec
            alert("Erreur : " + erreur);
            validTrandfer.disabled = false;
            validTrandfer.textContent = "Transfert...";
            validTrandfer.style.opacity = "1";
        }


});
}
function processTranfsert(montant){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(isNaN(montant) || isNaN(nameDes) || isNaN(numCompte) || montant<0){
                reject("l'un des champ est invalid !!");
            }else if(montant>currentUser.solde){
                reject("le Solde est insiffusant !!");
            }else{
                currentUser.solde -=montant;
                //Sauvegarder la transfer dans localstorage.
                localStorage.setItem('currentUser',JSON.stringify(currentUser));
                const NewTransfert = {
                    date: new Date().toLocaleDateString(),
                    nomdestinataire:`${nameDes}`,
                    //description:`Transfert vers ${nameDes} `,
                    montant:`${montant}`,
                    //description:"Transfert vers: "`${nameDes}`,
                    NumComptedest:`${numCompte}`,
                    
            };
             //recuperer les historique de localstorage
                    const histoirque = JSON.parse(localStorage.getItem('transactions'))||[];
                    //ajouter cette transaction
                    histoirque.push(NewTransfert);
                    //sauvegarder dans localstorage
                    localStorage.setItem('transactions',JSON.stringify(histoirque));

                resolve("Le transactions est valide avec succes ");
        }
        },1000)
    })
};


const btnhistory = document.getElementById("history");
btnhistory.addEventListener("click",gotohistory);

function gotohistory(){
    window.location.href="historyTransfer.html";
}

if(transfBtn){
    transfBtn.addEventListener('click',AfficherOperateursBtn);
}

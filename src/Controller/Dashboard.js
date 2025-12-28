const Transactions = [
    {date: "28/12/2025",description : "une vente",type: "+",montant:"3100"},
    {date: "25/12/2025",description : "une achat",type: "-",montant:"3100"},
    {date: "12/12/2025",description : "une vente",type: "+",montant:"3100"},
    {date: "03/12/2025",description : "une achat",type: "-",montant:"3100"},
]


// 2. Sélection des éléments
const tableBody = document.querySelector("#transactions tbody");
const balanceDisplay = document.getElementById("balance");
const welcomeMessage = document.getElementById("welcome_message");
const dateDisplay = document.getElementById("date");
const selectedTypeTransaction = document.getElementById("mySelectTransaction");
const transfBtn = document.getElementById("transferer");
const rechargerBtn = document.getElementById("recharger");
const payerBtn = document.getElementById("payer");

transfBtn.addEventListener("click",Handltansf);
rechargerBtn.addEventListener("click",Handlrecharger);
payerBtn.addEventListener("click",HandlPayer);
function Handltansf(){
    window.location.href = "transfert.html"; 
}
function Handlrecharger(){
    window.location.href = "recharger.html"; 
}
function HandlPayer(){
    window.location.href = "payer.html"; 
}



// 3. Initialisation du Dashboard
document.addEventListener("DOMContentLoaded", () => {
    
    // Afficher le message de bienvenue et la date
    welcomeMessage.textContent = "Bienvenue, Hamza !";
    dateDisplay.textContent = new Date().toLocaleDateString('fr-FR');
    
    // Afficher le solde (formaté en Dirhams par exemple)
    balanceDisplay.textContent = `20100 DH`;

    // Appeler la fonction pour ajouter la transaction au tableau
    renderAllTransactions(Transactions);
});

// 4. Fonction pour injecter la transaction dans le HTML
function displayTransaction(trans) {
    // Créer une ligne de tableau
    const row = document.createElement("tr");

    // Définir la couleur selon le type (+ ou -)
    const amountColor = trans.type === "+" ? "green" : "red";

    row.innerHTML = `
        <td>${trans.date}</td>
        <td>${trans.description}</td>
        <td>${trans.type === "+" ? "Crédit" : "Débit"}</td>
        <td style="color: ${amountColor}; font-weight: bold;">
            ${trans.type}${trans.montant} DH
        </td>
    `;

    // Ajouter la ligne au tableau
    tableBody.appendChild(row);
}

function renderAllTransactions(Transactions){
    tableBody.innerHTML = "";
    Transactions.forEach(item=>displayTransaction(item));
}

selectedTypeTransaction.addEventListener("change",HandleTransactions);

function HandleTransactions(){
    const selectedValue = selectedTypeTransaction.value;
    let filteredList;
    if (selectedValue === "credit") {
        filteredList = Transactions.filter(item => item.type === "+");
    } else if (selectedValue === "debit") {
        filteredList = Transactions.filter(item => item.type === "-");
    } else {
        filteredList = Transactions; // "Tous"
    }
    console.log(filteredList);
    renderAllTransactions(filteredList);
}



//Transactions.forEach(element => displayTransaction(element));

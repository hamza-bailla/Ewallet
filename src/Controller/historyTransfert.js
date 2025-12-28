const Transferts = [
    {date: "14-02-2025",client : "Ahmed Amine",montant: "4500"},
    {date: "14-02-2025",client : "Aya moutawakil",montant: "9500"},
    {date: "14-02-2025",client : "Hakim ziyech",montant: "4500000"},
    {date: "14-02-2025",client : "walid karimi",montant: "19000"},
    
]

// 2. Sélection des éléments
const tableBody = document.querySelector("#transfert tbody");
const balanceDisplay = document.getElementById("balance");
const welcomeMessage = document.getElementById("welcome_message");
const dateDisplay = document.getElementById("date");
const selectedTypeTransaction = document.getElementById("mySelectTransaction");

const makeTransfertbtn = document.getElementById("transferer");

makeTransfertbtn.addEventListener("click",handltransfert);

// 3. Initialisation du Dashboard
document.addEventListener("DOMContentLoaded", () => {
    
    // Afficher le message de bienvenue et la date
    welcomeMessage.textContent = "Bienvenue, Hamza !";
    dateDisplay.textContent = new Date().toLocaleDateString('fr-FR');
    
    // Afficher le solde (formaté en Dirhams par exemple)
    balanceDisplay.textContent = `20100 DH`;

    // Appeler la fonction pour ajouter la transaction au tableau
    renderAllTransactions(Transferts);
});

// 4. Fonction pour injecter la transaction dans le HTML
function displayTransaction(transf) {
    // Créer une ligne de tableau
    const row = document.createElement("tr");

    // Définir la couleur selon le type (+ ou -)
    const amountColor = "green" ;
    const datecolor = "#27D6F5"

    row.innerHTML = `
        <td style="color: ${datecolor};font-weight: bold;">${transf.date}</td>
        <td>${transf.client}</td>
        <td style="color: ${amountColor}; font-weight: bold;">
            ${transf.montant} DH
        </td>
    `;

    // Ajouter la ligne au tableau
    tableBody.appendChild(row);
}

function renderAllTransactions(Transferts){
    tableBody.innerHTML = "";
    Transferts.forEach(item=>displayTransaction(item));
}


function handltransfert(){
    window.location.href = "transfert.html"; 
}
export const Transactions = [
    {date: "28/12/2025", description: "une vente", type: "+", montant: "3100"},
    {date: "25/12/2025", description: "un achat", type: "-", montant: "3100"},
    {date: "30/12/2025", description: "Salaire mensuel", type: "+", montant: "45000"},
    {date: "29/12/2025", description: "Loyer Janvier", type: "-", montant: "800"},
    {date: "28/12/2025", description: "Courses Carrefour", type: "-", montant: "150"},
    {date: "27/12/2025", description: "Remboursement prêt", type: "+", montant: "50"},
    {date: "26/12/2025", description: "Abonnement Netflix", type: "-", montant: "12"},
    {date: "25/12/2025", description: "Cadeau de Noël", type: "-", montant: "200"},
    {date: "24/12/2025", description: "Vente vieux vélo", type: "+", montant: "120"},
    {date: "23/12/2025", description: "Facture Électricité", type: "-", montant: "85"},
    {date: "22/12/2025", description: "Dîner restaurant", type: "-", montant: "45"},
    {date: "21/12/2025", description: "Prime de fin d'année", type: "+", montant: "500"}
];

export const user = [
    { mail: "hamza@gmail.com", password: "123", nom: "Hamza BAILLA", solde: 200100 }, 
    { mail: "abdelalim@gmail.com", password: "123", nom: "Abdelali Alim", solde: 15400 },  
    { mail: "othmaned@yahoo.fr", password: "123", nom: "Thomas BERNARD", solde: 850 },
    { mail: "samira@outlook.com", password: "123", nom: "Samira ENNAJI", solde: 125000 },
    { mail: "laila@gmail.com", password: "123", nom: "Laila MEZIANE", solde: 3200 },
    { mail: "Ayoub@hotmail.com", password: "123", nom: "Ayoub HAFIDI", solde: 45000 },
    { mail: "arwa@gmail.com", password: "123", nom: "Arwa BERRADA", solde: 1200 },
    { mail: "jad@icloud.com", password: "123", nom: "Jad ELALSOUI", solde: 78900 },
    { mail: "karima@gmail.com", password: "123", nom: "Karima MIFTSH", solde: 550 },
    { mail: "said@yahoo.com", password: "123", nom: "Said OUHAOUI", solde: 210500 },
    { mail: "yamna@gmail.com", password: "123", nom: "Yamna ENNASIMI", solde: 1340 }
];

// export const user = {
//     mail: "hamza@gmail.com",password:"123"
// }

function finduser(email,motpasse){
    let User=null;
    User=user.find((us)=>us.mail===email && us.password === motpasse);
    return User;
}


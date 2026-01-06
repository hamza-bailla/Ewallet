export const Transactions = [
    {date: "28/12/2025", description: "une vente", type: "+", montant: "3100", nomdestinataire: "Aya Rahimi", NumComptedest: 1029384756123,NumCompteEmet:2812898329512},
    {date: "25/12/2025", description: "un achat", type: "-", montant: "3100", nomdestinataire: "Electro Planet", NumComptedest: 9988776655441,NumCompteEmet:3928174650123},
    {date: "30/12/2025", description: "Salaire mensuel", type: "+", montant: "45000", nomdestinataire: "Entreprise TechSolutions", NumComptedest: 1122334455667,NumCompteEmet:2812898329512},
    {date: "29/12/2025", description: "Loyer Janvier", type: "-", montant: "800", nomdestinataire: "ImmoGestion SARL", NumComptedest: 5544332211009,NumCompteEmet:3928174650123},
    {date: "28/12/2025", description: "Courses Carrefour", type: "-", montant: "150", nomdestinataire: "Carrefour Market", NumComptedest: 8877665544332,NumCompteEmet:5566778899001},
    {date: "27/12/2025", description: "Remboursement prêt", type: "+", montant: "50", nomdestinataire: "Karim El Amrani", NumComptedest: 2233445566778,NumCompteEmet:2812898329512},
    {date: "26/12/2025", description: "Abonnement Netflix", type: "-", montant: "12", nomdestinataire: "Netflix International", NumComptedest: 3344556677889,NumCompteEmet:5566778899001},
    {date: "25/12/2025", description: "Cadeau de Noël", type: "-", montant: "200", nomdestinataire: "Amazon Store", NumComptedest: 4455667788990,NumCompteEmet:2812898329512},
    {date: "24/12/2025", description: "Vente vieux vélo", type: "+", montant: "120", nomdestinataire: "Omar Bennani", NumComptedest: 1212121212123,NumCompteEmet:1122334455667},
    {date: "23/12/2025", description: "Facture Électricité", type: "-", montant: "85", nomdestinataire: "Lydec/Redal", NumComptedest: 9090909090901,NumCompteEmet:2812898329512},
    {date: "22/12/2025", description: "Dîner restaurant", type: "-", montant: "45", nomdestinataire: "La Grillade Dorée", NumComptedest: 7070707070705,NumCompteEmet:1122334455667},
    {date: "21/12/2025", description: "Prime de fin d'année", type: "+", montant: "500", nomdestinataire: "Banque Populaire", NumComptedest: 6060606060604,NumCompteEmet:1122334455667}
];

export const user = [
    { 
        mail: "hamza@gmail.com", password: "123", nom: "Hamza BAILLA", solde: 2009100, numerocompte: 2812898329512, tele: "+212628842145", dateNaissance: "30-02-2005", Nationalite: "Marocaine",
        cartes:[
            {id: 1, numCarte: 28128983295121, solde: 2000000, type: "Visa"},
            {id: 2, numCarte: 28128983295122, solde: 9100, type: "MasterCard"}
        ]
    }, 
    { 
        mail: "abdelalim@gmail.com", password: "123", nom: "Abdelali Alim", solde: 15400, numerocompte: 3928174650123, tele: "+212611223344", dateNaissance: "12-05-1990", Nationalite: "Marocaine", 
        cartes:[
            {id: 1, numCarte: 39281746501231, solde: 400, type: "Visa"},
            {id: 2, numCarte: 39281746501232, solde: 15000, type: "MasterCard"}
        ]
    },  
    { 
        mail: "othmaned@yahoo.fr", password: "123", nom: "Thomas BERNARD", solde: 850, numerocompte: 5566778899001, tele: "+33612345678", dateNaissance: "22-11-1985", Nationalite: "Française",
        cartes:[
            {id: 1, numCarte: 55667788990011, solde: 800, type: "Visa"},
            {id: 2, numCarte: 55667788990012, solde: 50, type: "MasterCard"}
        ]
    },
    { 
        mail: "samira@outlook.com", password: "123", nom: "Samira ENNAJI", solde: 125000, numerocompte: 1122334455667, tele: "+212655443322", dateNaissance: "05-08-1992", Nationalite: "Marocaine",
        cartes:[
            {id: 1, numCarte: 11223344556671, solde: 120000, type: "Visa"},
            {id: 2, numCarte: 11223344556672, solde: 5000, type: "MasterCard"}
        ]
    },
    { 
        mail: "laila@gmail.com", password: "123", nom: "Laila MEZIANE", solde: 3200, numerocompte: 9988776655443, tele: "+212600112233", dateNaissance: "14-02-1998", Nationalite: "Marocaine",
        cartes:[
            {id: 1, numCarte: 99887766554431, solde: 3000, type: "Visa"},
            {id: 2, numCarte: 99887766554432, solde: 200, type: "MasterCard"}
        ]
    },
    { 
        mail: "Ayoub@hotmail.com", password: "123", nom: "Ayoub HAFIDI", solde: 45000, numerocompte: 4455667788990, tele: "+212677889900", dateNaissance: "30-06-1994", Nationalite: "Marocaine",
        cartes:[
            {id: 1, numCarte: 44556677889901, solde: 40000, type: "Visa"},
            {id: 2, numCarte: 44556677889902, solde: 5000, type: "MasterCard"}
        ]
    },
    { 
        mail: "arwa@gmail.com", password: "123", nom: "Arwa BERRADA", solde: 1200, numerocompte: 3344556677889, tele: "+212611998877", dateNaissance: "10-10-2001", Nationalite: "Marocaine",
        cartes:[
            {id: 1, numCarte: 33445566778891, solde: 1000, type: "Visa"},
            {id: 2, numCarte: 33445566778892, solde: 200, type: "MasterCard"}
        ]
    },
    { 
        mail: "jad@icloud.com", password: "123", nom: "Jad ELALSOUI", solde: 78900, numerocompte: 2233445566778, tele: "+212644556611", dateNaissance: "18-03-1988", Nationalite: "Marocaine",
        cartes:[
            {id: 1, numCarte: 22334455667781, solde: 70000, type: "Visa"},
            {id: 2, numCarte: 22334455667782, solde: 8900, type: "MasterCard"}
        ]
    },
    { 
        mail: "karima@gmail.com", password: "123", nom: "Karima MIFTSH", solde: 550, numerocompte: 1122112211223, tele: "+212633221100", dateNaissance: "25-12-1996", Nationalite: "Marocaine",
        cartes:[
            {id: 1, numCarte: 11221122112231, solde: 550, type: "Visa"}
        ]
    },
    { 
        mail: "said@yahoo.com", password: "123", nom: "Said OUHAOUI", solde: 210500, numerocompte: 8877996655441, tele: "+212655667788", dateNaissance: "01-01-1980", Nationalite: "Marocaine",
        cartes:[
            {id: 1, numCarte: 88779966554411, solde: 200000, type: "Visa"},
            {id: 2, numCarte: 88779966554412, solde: 10500, type: "MasterCard"}
        ]
    },
    { 
        mail: "yamna@gmail.com", password: "123", nom: "Yamna ENNASIMI", solde: 1340, numerocompte: 7766554433221, tele: "+212699887766", dateNaissance: "15-07-1999", Nationalite: "Marocaine",
        cartes:[
            {id: 1, numCarte: 77665544332211, solde: 1340, type: "Visa"}
        ]
    },
    { 
        mail: "Abderahim@gmail.com", password: "123", nom: "Abderrahim Zaytouni", solde: 1000000000, numerocompte: 9900661137321, tele: "+212600000001", dateNaissance: "20-09-2002", Nationalite: "Marocaine",
        cartes:[
            {id: 1, numCarte: 99006611373211, solde: 500000000, type: "Visa"},
            {id: 2, numCarte: 99006611373212, solde: 500000000, type: "MasterCard"}
        ]
    }
];

function finduser(email,motpasse){
    let User=null;
    User=user.find((us)=>us.mail===email && us.password === motpasse);
    return User;
}


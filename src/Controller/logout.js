// On attend que le DOM soit chargé pour être sûr que le bouton existe
document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            // Empêche le lien de recharger la page
            e.preventDefault();

            // 1. Vide le LocalStorage (efface le solde et l'utilisateur actuel)
            localStorage.clear();

            // 2. Message de confirmation (optionnel)
            console.log("Session terminée, redirection...");

            // 3. Redirection vers la page de connexion
            // Vérifiez bien le chemin vers votre fichier login.html
            window.location.href = "login.html"; 
        });
    }
});
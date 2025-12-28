// user ={
//     mail :"hamza",
//     password : "123",
// }

// const loginInput = document.getElementById("mail");
// const passwordInput = document.getElementById("password");
// const result = document.getElementById("result");

// const submibTn = document.getElementById("submitbtn");
// submibTn.addEventListener("click",clickToConnect);

// function clickToConnect(){
//     let mail = loginInput.value;
//     let password = passwordInput.value;
//     result.textContent="Verification...!";

//     setTimeout(()=>{
//         if(!mail || !password){
//             result.textContent = "mail ou password incorrect !!";
//             result.style.color = "red";
//         }else{
//             if(mail === user.mail && password === user.password){
//                 result.textContent = "Success";
//                 result.style.color = "green";
//                 setTimeout(()=>{
//                     window.location.href="dashoard.html";
//                 },1000);
//             }
//         }

//     },1000);
// }

// Définition de l'utilisateur (Note le changement de syntaxe : const + :)
const user = {
    mail: "hamza@gmail.com",
    password: "123"
};
const Transactions = {
    
}
// Sélection des éléments du DOM
const loginInput = document.getElementById("mail");
const passwordInput = document.getElementById("password");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitbtn");
const togglePassword = document.getElementById("display");

// Événement de clic pour la connexion
submitBtn.addEventListener("click", clickToConnect);

function clickToConnect() {
    let mail = loginInput.value;
    let password = passwordInput.value;

    // Affichage initial
    result.textContent = "Vérification...";
    result.style.color = "orange";

    setTimeout(() => {
        // 1. Vérifier si les champs sont vides
        if (!mail || !password) {
            result.textContent = "Veuillez remplir tous les champs !";
            result.style.color = "red";
        } 
        // 2. Vérifier si les identifiants correspondent
        else if (mail === user.mail && password === user.password) {
            result.textContent = "Connexion réussie ! Redirection...";
            result.style.color = "green";
            
            setTimeout(() => {
                window.location.href = "dashboard.html"; 
            }, 1000);
        } 
        // 3. Cas d'erreur (identifiants incorrects)
        else {
            result.textContent = "Email ou mot de passe incorrect !!";
            result.style.color = "red";
        }
    }, 1000);
}

// Bonus : Afficher/Masquer le mot de passe
togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
});
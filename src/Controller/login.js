import { user } from '../Model/data.js';

const loginInput = document.getElementById("mail");
const passwordInput = document.getElementById("password");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitbtn");

submitBtn.addEventListener("click", () => {
    let mailValue = loginInput.value;
    let passwordValue = passwordInput.value;

    if (!mailValue || !passwordValue) {
        result.textContent = "Veuillez remplir tous les champs !";
        result.style.color = "red";
        return;
    }

    result.textContent = "Vérification...";
    result.style.color = "orange";

    // On cherche l'utilisateur spécifique dans la base de données data.js
    const foundUser = user.find(u => u.mail === mailValue && u.password === passwordValue);

    setTimeout(() => {
        if (foundUser) {
            result.textContent = "Connexion réussie !";
            result.style.color = "green";

            // IMPORTANT : On utilise 'currentUser' pour correspondre au Dashboard
            localStorage.setItem('currentUser', JSON.stringify(foundUser));
            
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 500);
        } else {
            result.textContent = "Email ou mot de passe incorrect !";
            result.style.color = "red";
        }
    }, 1000);
});


















// import { user, Transactions } from '../Model/data.js';

// const loginInput = document.getElementById("mail");
// const passwordInput = document.getElementById("password");
// const result = document.getElementById("result");
// const submitBtn = document.getElementById("submitbtn");

// submitBtn.addEventListener("click", () => {
//     let mailValue = loginInput.value;
//     let passwordValue = passwordInput.value;

//     result.textContent = "Vérification...";
//     result.style.color = "orange";

//     // On utilise .find() car 'user' est une liste (tableau)
//     const foundUser = user.find(u => u.mail === mailValue && u.password === passwordValue);

//     setTimeout(() => {
//         if (foundUser) {
//             result.textContent = "Connexion réussie !";
//             result.style.color = "green";
//             // On sauvegarde l'utilisateur pour le Dashboard
//             localStorage.setItem('userConnected', JSON.stringify(foundUser));
            
//             setTimeout(() => {
//                 window.location.href = "dashboard.html";
//             }, 500);
//         } else {
//             result.textContent = "Email ou mot de passe incorrect !";
//             result.style.color = "red";
//         }
//     }, 1000);
// });








// import { user, Transactions } from '../Model/data.js';

// // Sélection des éléments du DOM
// const loginInput = document.getElementById("mail");
// const passwordInput = document.getElementById("password");
// const result = document.getElementById("result");
// const submitBtn = document.getElementById("submitbtn");
// const togglePassword = document.getElementById("display");

// submitBtn.addEventListener("click", clickToConnect);

// function clickToConnect() {
//     let mailValue = loginInput.value;
//     let passwordValue = passwordInput.value;

//     result.textContent = "Vérification...";
//     result.style.color = "orange";

//     setTimeout(() => {
//         // 1. Vérifier si les champs sont vides
//         if (!mailValue || !passwordValue) {
//             result.textContent = "Veuillez remplir tous les champs !";
//             result.style.color = "red";
//             return; // On arrête la fonction ici
//         }

//         // 2. Chercher l'utilisateur dans le tableau 'user' importé
//         const foundUser = user.find(u => u.mail === mailValue && u.password === passwordValue);

//         if (foundUser) {
//             result.textContent = "Connexion réussie ! Redirection...";
//             result.style.color = "green";
            
//             // OPTIONNEL : Stocker l'utilisateur trouvé pour l'utiliser sur le dashboard
//             localStorage.setItem('currentUser', JSON.stringify(foundUser));

//             setTimeout(() => {
//                 window.location.href = "dashboard.html"; 
//             }, 1000);
//         } 
//         else {
//             // 3. Cas d'erreur (identifiants incorrects)
//             result.textContent = "Email ou mot de passe incorrect !!";
//             result.style.color = "red";
//         }
//     }, 1000);
// }

// // Afficher/Masquer le mot de passe
// togglePassword.addEventListener("click", () => {
//     const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
//     passwordInput.setAttribute("type", type);
// });




// import { user, Transactions } from '../Model/data.js';
// // Sélection des éléments du DOM
// const loginInput = document.getElementById("mail");
// const passwordInput = document.getElementById("password");
// const result = document.getElementById("result");
// const submitBtn = document.getElementById("submitbtn");
// const togglePassword = document.getElementById("display");

// // Événement de clic pour la connexion
// submitBtn.addEventListener("click", clickToConnect);
// const currentUser = user;

// function clickToConnect() {
//     let mail = loginInput.value;
//     let password = passwordInput.value;

//     // Affichage initial
//     result.textContent = "Vérification...";
//     result.style.color = "orange";

//     setTimeout(() => {
//         // 1. Vérifier si les champs sont vides
//         if (!mail || !password) {
//             result.textContent = "Veuillez remplir tous les champs !";
//             result.style.color = "red";
//         } 
//         user=finduser(mail,pass);
//         // 2. Vérifier si les identifiants correspondent
//         if (mail === currentUser.mail && password === currentUser.password) {
//             result.textContent = "Connexion réussie ! Redirection...";
//             result.style.color = "green";
            
//             setTimeout(() => {
//                 window.location.href = "dashboard.html"; 
//             }, 1000);
//         } 
//         // 3. Cas d'erreur (identifiants incorrects)
//         else {
//             result.textContent = "Email ou mot de passe incorrect !!";
//             result.style.color = "red";
//         }
//     }, 1000);
// }

// // pour afficher/Masquer le mot de passe
// togglePassword.addEventListener("click", () => {
//     const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
//     passwordInput.setAttribute("type", type);
// });
// console.log("helloooooooo froom login")

// const inputmail=document.getElementById("mail");
// const inputpassword=document.getElementById("password");
// const btnlogin=document.getElementById("submitbtn");
// const btnview=document.getElementById("display");
// const result=document.getElementById("result");
// btnlogin.addEventListener("click",handlelogin);
// //let user=null;
// function handlelogin(){
//     const mail=inputmail.value;
//     const pass=inputpassword.value;
//     if(!mail || !pass){
//         result.textContent="Veuillez remplir tous les champs";
//         result.style.color="red";
//         return;
//     }
//     user=finduser(mail,pass);
    
//     if(user){
//         result.textContent="Succés";
//         result.style.color="green";
        
//         setTimeout(()=>window.location.href="dashboard.html",1000);
        
//         sessionStorage.setItem("currentuser",JSON.stringify(user));

//     }
//     else{
//         result.textContent="email ou mot de passe incorrect";
//         result.style.color="red";
//     }
// }



// btnview.onclick=function(){
//     if(inputpassword.getAttribute("type")=="password")
//     inputpassword.setAttribute("type","text");
//     else
//         inputpassword.setAttribute("type","password");

// }

// function finduser(email,motpasse){
//     let User=null;
//     User=user.find((us)=>us.mail===email && us.password === motpasse);
//     return User;
// }

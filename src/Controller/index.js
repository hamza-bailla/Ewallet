const loginBtn = document.getElementById("Loginbtn");
const signinBtn = document.getElementById("Signinbtn");

loginBtn.addEventListener("click",handlLogin);
signinBtn.addEventListener("click",handlSignIn)

function handlLogin(){
    window.location.href="src/view/login.html";
}

function handlSignIn(){
    window.location.href="src/view/signin.html";
}


// const btnlogin=document.getElementById("Loginbtn");

// btnlogin.addEventListener("click",handlelogin);
// function handlelogin(){
//     btnlogin.textContent="Loading ...";
//     setTimeout(()=>{
//         window.location.href="/src/view/login.html";
       
//     },850);
// }
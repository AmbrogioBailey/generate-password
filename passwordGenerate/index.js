const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstPass = document.getElementById("first-password")
let secondPass = document.getElementById("second-password")
function generatePassword() {
    let password = "";
    let password2 = "";
    const passwordLength = 15;
    
    for(let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomIndex2 = Math.floor(Math.random() * characters.length);
        
        password += characters[randomIndex] 
        password2 += characters[randomIndex2]
    }
    firstPass.textContent = password
    secondPass.textContent = password2
    
}

function copy() {
    let copyPassword = document.getElementById("first-password")
    navigator.clipboard.writeText(copyPassword.value)
        .then(() => {
            alert("The password has been copied: " + copyPassword.value);
        })
}

function copyTwo() {
    let copyPassword = document.getElementById("second-password")
    navigator.clipboard.writeText(copyPassword.value)
        .then(() => {
            alert("The password has been copied: " + copyPassword.value);
        })
}

document.addEventListener('DOMContentLoaded', function() {
    const buttonEnable = document.getElementById("password-generator");
    const myElement = document.getElementById("first-password");
    
    buttonEnable.addEventListener('click', function() {
        myElement.classList.add('hover-enabled');
    })
});

document.addEventListener('DOMContentLoaded', function() {
    const buttonEnableTwo = document.getElementById("password-generator");
    const myElementTwo = document.getElementById("second-password");
    
    buttonEnableTwo.addEventListener('click', function() {
        myElementTwo.classList.add('hover-enabled');
    })
});
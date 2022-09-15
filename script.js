let password = document.getElementById("pwd");
let confirm_password = document.getElementById("pwd_confirm");
const validity = document.getElementById("error");


function validatePassword(){
    if((password.value != confirm_password.value) || (password.value === "" && confirm_password.value === "")) {
        confirm_password.setCustomValidity("Error: Password do not match! Please try again.");
        password.style.borderColor = "#C13838";
        confirm_password.style.borderColor = "#C13838";
        validity.textContent = "*Password do not match";
        validity.classList.add("error_message");
    }else{
        confirm_password.setCustomValidity("");
        validity.textContent = "";
    }
    if(password.value === confirm_password.value) {
        password.style.borderColor = "#3CD33C";
        confirm_password.style.borderColor = "#3CD33C";
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

window.onload = stylePwd;

function stylePwd() {
    password.style.borderColor ="#c13838";
    confirm_password.style.borderColor = "#c13838";
    validity.textContent = "*Password do not match";
    validity.classList.add("error_message");
}
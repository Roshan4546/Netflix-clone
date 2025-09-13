const passwordBox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        const allCharacters = uppercase + lowercase + numbers + symbols;
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value = password;
}



function checkPassword() {
    const passwordInput = document.getElementById("password").value;

    if (passwordInput.trim() === "") {
        alert("Generate a password first!");
    } else {
        // Continue with your logic (e.g., submit, copy, etc.)
        function copyPassword() {
            passwordBox.select();
            document.execCommand("copy");
        }
        // alert("Password is valid. Proceeding...");

        alert("Password copied to clipboard!");
    }
}



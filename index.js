 
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("login-error");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "yourusername" && password === "yourpassword") {
        // Successful login
        loginError.innerText = "Login successful!";
        loginError.classList.remove("text-danger");
        loginError.classList.add("text-success");
    } else {
        // Failed login
        loginError.innerText = "Invalid credentials. Please try again.";
        loginError.classList.add("text-danger");
    }
});

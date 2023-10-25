 
// const loginForm = document.getElementById("login-form");
// const usernameInput = document.getElementById("username");
// const passwordInput = document.getElementById("password");
// const loginError = document.getElementById("login-error");

// loginForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const username = usernameInput.value;
//     const password = passwordInput.value;

//     if (username === "yourusername" && password === "yourpassword") {
//         // Successful login
//         loginError.innerText = "Login successful!";
//         loginError.classList.remove("text-danger");
//         loginError.classList.add("text-success");
//     } else {
//         // Failed login
//         loginError.innerText = "Invalid credentials. Please try again.";
//         loginError.classList.add("text-danger");
//     }
// });

 
    document.getElementById("login-form").addEventListener("submit", function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the username and password values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Perform your validation here
        if (username === "yourValidUsername" && password === "yourValidPassword") {
            // Valid credentials, you can redirect or show a success message
            alert("Login successful!");
        } else {
            // Invalid credentials, display an error message
            document.getElementById("login-error").textContent = "Invalid username or password. Please try again.";
        }
    });
 


 

 



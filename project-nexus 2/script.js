function myMenuFunction() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu.className === "nav-menu") {
        navMenu.className += " responsive";
    } else {
        navMenu.className = "nav-menu";
    }
}

var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");
var loginContainer = document.getElementById("login");
var registerContainer = document.getElementById("register");

function login() {
    loginContainer.style.left = "4px";
    registerContainer.style.right = "-520px";
    loginBtn.classList.add("white-btn");
    registerBtn.classList.remove("white-btn");
    loginContainer.style.opacity = 1;
    registerContainer.style.opacity = 0;
}

function register() {
    loginContainer.style.left = "-510px";
    registerContainer.style.right = "5px";
    loginBtn.classList.remove("white-btn");
    registerBtn.classList.add("white-btn");
    loginContainer.style.opacity = 0;
    registerContainer.style.opacity = 1;
}

function validateLogin() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var isValid = true;

    document.getElementById("login-username-error").innerText = "";
    document.getElementById("login-password-error").innerText = "";

    if (username === "") {
        document.getElementById("login-username-error").innerText = "Username or Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(username)) {
        document.getElementById("login-username-error").innerText = "Email is invalid";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("login-password-error").innerText = "Password is required";
        isValid = false;
    }

    if (isValid) {
        console.log("Login successful");
    }
}

function validateRegister() {
    var firstname = document.getElementById("register-firstname").value;
    var lastname = document.getElementById("register-lastname").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
    var isValid = true;

    document.getElementById("register-firstname-error").innerText = "";
    document.getElementById("register-lastname-error").innerText = "";
    document.getElementById("register-email-error").innerText = "";
    document.getElementById("register-password-error").innerText = "";

    if (firstname === "") {
        document.getElementById("register-firstname-error").innerText = "Firstname is required";
        isValid = false;
    }

    if (lastname === "") {
        document.getElementById("register-lastname-error").innerText = "Lastname is required";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("register-email-error").innerText = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("register-email-error").innerText = "Email is invalid";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("register-password-error").innerText = "Password is required";
        isValid = false;
    }

    if (isValid) {
        console.log("Registration successful");
    }
}

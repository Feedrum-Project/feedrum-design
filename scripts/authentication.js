function ToRegister() {
    AnimateContent()
    var register_content = document.getElementById("authenticate-register");
    var login_content = document.getElementById("authenticate-login");
    register_content.style.display = "block";
    login_content.style.display = "none";
}

function ToLogin() {
    AnimateContent()
    var register_content = document.getElementById("authenticate-register");
    var login_content = document.getElementById("authenticate-login");
    login_content.style.display = "block";
    register_content.style.display = "none";
}

function ShowHidePassword() {
    var login_password_input = document.getElementById("login-password");
    var register_password_input = document.getElementById("register-password");
    var login_password_icon = document.getElementById("login-password-icon");
    var register_password_icon = document.getElementById("register-password-icon");
    if (login_password_input.type === "password") {
        login_password_input.type = "text";
        register_password_input.type = "text";
        login_password_icon.src = "images/shown.png";
        register_password_icon.src = "images/shown.png";
    } else {
        login_password_input.type = "password";
        register_password_input.type = "password";
        login_password_icon.src = "images/hidden.png";
        register_password_icon.src = "images/hidden.png";
    }
}

function AnimateContent() {
    var content = document.getElementById("content");
    content.classList.remove("anim-down-up-down");
    void content.offsetHeight;
    content.classList.add("anim-down-up-down");
}
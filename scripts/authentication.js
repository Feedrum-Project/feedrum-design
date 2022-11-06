function to_register() {
    var register_content = document.getElementById("authenticate-register");
    var login_content = document.getElementById("authenticate-login");
    register_content.style.display = "block";
    login_content.style.display = "none";
}

function to_login() {
    var register_content = document.getElementById("authenticate-register");
    var login_content = document.getElementById("authenticate-login");
    login_content.style.display = "block";
    register_content.style.display = "none";
}
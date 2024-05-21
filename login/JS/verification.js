function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    if (username == "" || password == "") {
        alert("Por favor coloque usuario e senha");
        return false;
    } else if (username == "nome" && password == "senha") {
        alert("Login successful!");
        window.open('http://127.0.0.1:5500/meu_dashboard/dash.html');
        return false;
    } else {
        alert("inválida senha e/ou usuario");
        return false;
        
    }
}


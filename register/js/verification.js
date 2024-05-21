
document.getElementById("btn-submit").addEventListener("click", function(event){
    event.preventDefault()
});
function teste(e){

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    let nome = document.getElementById("nome").value;
    let cep = document.getElementById("cep").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;

    if (Number(idade) < 18){
        alert ("Proibido para menores de idade")
        return;
    } 
    
    if (email.includes("@")){
        console.log("email válido");
    } else {
        alert("formato de email inválido")
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    let cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;

    let cepRegex = /^\d{5}-\d{3}$/;

    if (!cpfRegex.test(cpf)) {
        alert("CPF inválido. Formato esperado: xxx.xxx.xxx-xx");
        return;
    }
    if (!cepRegex.test(cep)) {
        alert("CEP inválido. Formato esperado: xxxxx-xxx");
        return;
    }

    console.log("Dados de cadastro enviados:");
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Nome:", nome);
    console.log("CEP:", cep);
    console.log("CPF:", cpf);

    alert("Cadastro realizado com sucesso!");
    window.open('http://127.0.0.1:5500/meu_dashboard/dash.html');
}

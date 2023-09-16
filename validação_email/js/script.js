const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const massageTextarea = document.querySelector("#massage");

form.addEventListener("submit", (event) => {
    event.preventDefault();

// Verifica se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome")
        return;
    }

// Verificar se o e-mail está prenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail")
        return;
    }

// Se todos os campos estiverem corretamente preenchidos envie o form
    form.submit();
});

function isEmailValid(email) {
//Cria regex para validar email
const emailRegex = new RegExp(
    //usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
);

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}
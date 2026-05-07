// Impede o navegador de voltar para a página anterior
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

// Função do botão da página inicial
function mostrarMensagem() {
    alert("Obrigado por visitar meu portfólio!");
}

// Alternância de tema claro e escuro
const botaoTema = document.getElementById("tema");

if(botaoTema) {
    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("dark");
    });
}

// Validação simples do formulário
const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        const resultado = document.getElementById("resultado");

        // Verifica se os campos estão preenchidos
        if(nome === "" || email === "" || mensagem === "") {
            resultado.innerHTML = "Preencha todos os campos.";
            resultado.style.color = "red";
        }
        else {
            resultado.innerHTML = "Mensagem enviada com sucesso!";
            resultado.style.color = "green";

            formulario.reset();
        }
    });
}
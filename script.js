const cantadas = [
    "Bea, meu amor por você é tão brilhante quanto as estrelas na 'Noite Estrelada' de Van Gogh. ✨",
    "Se eu fosse Van Gogh, eu pintaria o céu só para ver você sorrir. 🌌",
    "Amor, até o próprio Van Gogh ficaria com inveja das cores que você traz para a minha vida. 🌈",
    "Você é como uma obra-prima, Bea. Até o Van Gogh ficaria sem palavras ao te ver. 🎨",
    "Se Van Gogh tivesse te conhecido ele teria pintado teus olhos ao inves das estrelas. ✨"
];

function mostrarCantada() {
    const cantadaElement = document.getElementById("cantada");
    const button = document.getElementById("cantadaButton");

    // Desabilita o botão temporariamente
    button.disabled = true;
    button.classList.add("disabled");

    // Adiciona a classe para o efeito de fade-out
    cantadaElement.classList.add("fade-out");
    
    // Espera o fade-out para mudar o texto e fazer o fade-in
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * cantadas.length);
        cantadaElement.innerText = cantadas[randomIndex];

        // Remove o fade-out e adiciona o fade-in
        cantadaElement.classList.remove("fade-out");

        // Reabilita o botão após a animação
        setTimeout(() => {
            button.disabled = false;
        }, 500); // Tempo igual ao do fade-in
    }, 500); // Tempo do fade-out
}

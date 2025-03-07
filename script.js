const cantadas = [
    "Bea, meu amor por você é tão brilhante quanto as estrelas na 'Noite Estrelada' de Van Gogh. ✨",
    "Se eu fosse Van Gogh, eu pintaria o céu só para ver você sorrir. 🌌",
    "Amor, até o próprio Van Gogh ficaria com inveja das cores que você traz para a minha vida. 🌈",
    "Você é como uma obra-prima, Bea. Até o Van Gogh ficaria sem palavras ao te ver. 🎨",
    "Se Van Gogh tivesse te conhecido ele teria pintado teus olhos ao invés das estrelas. ✨"
];

function mostrarCantada() {
    const cantadaElement = document.getElementById("cantada");
    const button = document.getElementById("cantadaButton");

    // Desabilita o botão temporariamente e aplica um efeito visual
    button.disabled = true;
    button.classList.add("button-loading");

    // Aplica a animação de desvanecer (fade-out) e deslizamento
    cantadaElement.classList.add("fade-out", "slide-up");

    // Aguarda o tempo necessário para a transição de fade-out e slide-up
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * cantadas.length);
        cantadaElement.innerText = cantadas[randomIndex];

        // Remove a animação de fade-out e slide-up e aplica o efeito de fade-in e slide-down
        cantadaElement.classList.remove("fade-out", "slide-up");
        cantadaElement.classList.add("fade-in", "slide-down");

        // Reabilita o botão após a animação
        setTimeout(() => {
            button.disabled = false;
            button.classList.remove("button-loading");
        }, 600); // Tempo igual ao da animação de slide e fade-in
    }, 600); // Tempo igual ao do fade-out e slide-up
}

// Animações CSS
const style = document.createElement('style');
style.innerHTML = `
    /* Animações */
    @keyframes slideUp {
        0% {
            transform: translateY(20px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slideDown {
        0% {
            transform: translateY(-20px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    /* Efeito Fade-Out */
    .fade-out {
        animation: fadeOut 0.6s forwards;
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    /* Efeito Fade-In */
    .fade-in {
        animation: fadeIn 0.6s forwards;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    /* Animações de Slide-Up e Slide-Down */
    .slide-up {
        animation: slideUp 0.6s forwards;
    }

    .slide-down {
        animation: slideDown 0.6s forwards;
    }

    /* Estilo do botão desabilitado */
    .button-loading {
        background-color: #627dbe;
        cursor: not-allowed;
        box-shadow: none;
        filter: brightness(0.9);
    }

    /* Transição do Botão */
    .button {
        background-color: #5573f1;
        border: none;
        color: #ffffff;
        padding: 16px 32px;
        font-size: 18px;
        border-radius: 25px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease, filter 0.2s ease-in-out;
        box-shadow: 0 12px 24px rgba(85, 115, 241, 0.4);
    }

    .button:hover {
        background-color: #4c63d7;
        box-shadow: 0 16px 32px rgba(76, 99, 215, 0.5);
        filter: brightness(1.1);
    }

    .button:active {
        transform: scale(0.95);
    }
`;

document.head.appendChild(style);

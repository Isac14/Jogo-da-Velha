// REFAZENDO

// Garantindo que o documeto foi completamente carregado
document.addEventListener("DOMContentLoaded", () => {
    let quadrados = document.querySelectorAll(".square");

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener("click", clique);
    });
});

// i = contador para verificar se todos os quadrados foram ocupados e consequentemente deu velha
let i = 0;
function clique(quadrado) {
    i++;
    let posicao = quadrado.target.id;

    // Verificando se houve um ganhador
    if (movimento(posicao)) {
        setTimeout(() => {
            alert("O jogador " + (jogadorDaVez + 1) + " venceu. Parabéns!");
        }, 10);
    }
    atualizarQuadrados();

    // Definindo o caso de velha
    if (i == 9) {
        setTimeout(() => {
            alert("Deu velha. Ninguém ganhou!");
        }, 10);
    }
}

function atualizarQuadrados() {
    let quadrados = document.querySelectorAll(".square");

    quadrados.forEach((quadrado) => {
        let posicao = quadrado.id;
        let simbolo = tabuleiro[posicao];

        // Adicionando a classe de cada simbolo para aparecer na tela
        if (simbolo != "") {
            quadrado.innerHTML = `<div class='${simbolo}'></div>`;
        }
    });
}

function reiniciarQuadrados() {
    // Redefinindo parâmetros
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    jogadorDaVez = 0;
    simbolos = ["o", "x"];
    gameOver = false;

    // Redefinindo quadrados na tela
    let quadrados = document.querySelectorAll(".square");
    quadrados.forEach((quadrado) => {
        quadrado.innerHTML = "";
    });
}

btnReiniciar.addEventListener("click", reiniciarQuadrados);

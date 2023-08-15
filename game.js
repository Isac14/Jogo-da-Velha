// REFAZENDO

// Iniciando variáveis
let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogadorDaVez = 0;
let simbolos = ["o", "x"];
let gameOver = false;

// Mapeando as possibilidades de vitória
let = estadosVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Inserindo simbolo na lista do tabuleiro
function movimento(posicao) {
    if (gameOver) {
        return;
    }

    if (tabuleiro[posicao] == "") {
        tabuleiro[posicao] = simbolos[jogadorDaVez];

        gameOver = ganhou();

        // Alternando entre jogadores
        if (gameOver == false) {
            jogadorDaVez = jogadorDaVez == 0 ? 1 : 0;
        }
    }

    return gameOver;
}

function ganhou() {
    // Verificando se houve um ganhador
    for (let i = 0; i < estadosVitoria.length; i++) {
        let sequencia = estadosVitoria[i];

        let pos1 = sequencia[0];
        let pos2 = sequencia[1];
        let pos3 = sequencia[2];

        if (
            tabuleiro[pos1] == tabuleiro[pos2] &&
            tabuleiro[pos1] == tabuleiro[pos3] &&
            tabuleiro[pos1] != ""
        ) {
            return true;
        }
    }
    return false;
}

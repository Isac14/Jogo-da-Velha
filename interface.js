// document.addEventListener("DOMContentLoaded", () => {
//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         square.addEventListener("click", handleClick);
//     });
// });

// function handleClick(event) {
//     console.log(event.target);

//     let square = event.target;
//     let position = square.id;

//     handleMove(position);
//     updateSquares();
//     console.log(board);
// }

// function updateSquares() {
//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != "") {
//             square.innerHTML = `<div class='${symbol}'></div>`;
//         }
//     });
// }

// --------------------------------------------------

// REFAZENDO

// Garantindo que o documeto foi completamente carregado
document.addEventListener("DOMContentLoaded", () => {
    let quadrados = document.querySelectorAll(".square");

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener("click", clique);
    });
});

function clique(quadrado) {
    let posicao = quadrado.target.id;

    movimento(posicao);
    atualizarQuadrados();
}

function atualizarQuadrados() {
    let quadrados = document.querySelectorAll(".square");

    quadrados.forEach((quadrado) => {
        let posicao = quadrado.id;
        let simbolo = tabuleiro[posicao];

        if (simbolo != "") {
            quadrado.innerHTML = `<div class='${simbolo}'></div>`;
        }
    });
}

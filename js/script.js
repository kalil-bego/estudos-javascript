window.onload = criarCasas;

function criarCasas() {
    for (let i = 1; i <= 56; i++) {
        let casaspretas = `<div class="casa" id="preto" id="c${i}"></div>`;
        let casasbrancas = `<div class="casa" id="branco" id="c${i}"></div>`;

        if (i % 2 == 0) {
            document.getElementById(`casasTabuleiro`).innerHTML += casaspretas;

        } else {
            document.getElementById(`casasTabuleiro`).innerHTML += casasbrancas;
        }
        if (i % 7 == 0) {
            if (i % 2 == 0) {
                document.getElementById(`casasTabuleiro`).innerHTML += casasbrancas;
                document.getElementById('branco').innerHTML = `<img src="${torre.imgPeca}" class="peca" id="torre">`;
            } else {
                document.getElementById(`casasTabuleiro`).innerHTML += casaspretas;
                document.getElementById('preto').innerHTML = `<img src="${cavalo.imgPeca}" class="peca" id="cavalo">`;
            }
        }
    }

    timer1 = timerPlayer1.innerText.replace(":", "")

    for (let i = timer1; i >= 0; i--) {
        timerPlayer1.innerHTML = i
    }

}
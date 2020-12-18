window.onload = criarCasas;

function criarCasas() {
    let casaspretas = `<div class="casa" id="preto"></div>`;
    let casasbrancas = `<div class="casa" id="branco"></div>`;
    for (let i = 1; i <= 56; i++) {
        console.log(i)
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
}

function Peca() {
    this.nome
    this.imgPeca
    this.valor
}

const peao = new Peca()
const torre = new Peca()

// Criação da peça peão
peao.nome = 'Peão'
peao.imgPeca = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png'
peao.valor = 1

nomePecaPeao.innerHTML = peao.nome
imgPecaPeao.src = peao.imgPeca
valorPecaPeao.innerHTML = peao.valor


// Criação da peça Torre
torre.nome = 'Torre'
torre.imgPeca = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png'
torre.valor = 2

nomePecaTorre.innerHTML = torre.nome
imgPecaPeao.src = torre.imgPeca
valorPecaPeao.innerHTML = torre.valor
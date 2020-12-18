function Peca() {
    this.nome
    this.imgPeca
    this.valor
}


// Criação da peça peão
const peao = new Peca()
peao.nome = 'Peão'
peao.imgPeca = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png'
peao.valor = 1

// nomePecaPeao.innerHTML = peao.nome
// imgPecaPeao.src = peao.imgPeca
// valorPecaPeao.innerHTML = peao.valor


// Criação da peça Torre
const torre = new Peca()
torre.nome = 'Torre'
torre.imgPeca = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png'
torre.valor = 2

// nomePecaTorre.innerHTML = torre.nome
// imgPecaPeao.src = torre.imgPeca
// valorPecaPeao.innerHTML = torre.valor
const bispo = new Peca()
bispo.nome = 'Bispo'
bispo.imgPeca = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png'

const cavalo = new Peca()
cavalo.nome = 'Cavalo'
cavalo.imgPeca = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png'
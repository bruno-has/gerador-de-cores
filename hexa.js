const btn = document.getElementById('btn')
const res = document.getElementById('res')

const hexadecimais = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click', function () {
    let cor = '#'
    for (let i = 0; i < 6; i += 1) {
        let sorteio = Math.floor(Math.random() * hexadecimais.length)
        cor += hexadecimais[sorteio]
    }
    document.body.style.backgroundColor = cor
    res.innerHTML = cor
})

document.addEventListener('load', function () {
    document.body.style.backgroundColor = 'whitesmoke'
})
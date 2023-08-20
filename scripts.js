let tela = document.querySelector('#tela');
const adi = document.querySelector('#adi');
const sub = document.querySelector('#sub');
const mult = document.querySelector('#mult');
const div = document.querySelector('#div');
let resultado = document.querySelector('#resultado');
let n1 = tela;
let n2 = tela;

adi.addEventListener('click', () => {
    tela.value = Number(n1.value) + Number(n2.value);
})

sub.addEventListener('click', () => {
    tela.value = n1.value - n2.value;
})

mult.addEventListener('click', () => {
    tela.value = n1.value * n2.value;
})

div.addEventListener('click', () => {
    tela.value = n1.value / n2.value;
})


/* Atividade 1 (30 pontos)

Faça um programa que tenha 3 funções:

1º Função recebe 5 números e retorne a média desses números (10 pontos)

2º Função recebe a média e define se esse número é PAR ou IMPAR, 
   o retorno dessa função deve ser P para par e I para impar (10 pontos)

3º Função principal aonde: (10 pontos)
- o usuário digita os 5 números
- aonde é chamada a função que retorna a média
- aonde é chamada a função que retorna P ou I
- nessa função é exibido a mensagem com o valor médio e se o número 
é par ou impar

Nomes:
João Pedro Temponi de Jesus
Claudio Grabriel Gonçalves Batista
Murilo
Davi
*/

console.clear();
const teclado = require(`prompt-sync`)();

function media(n1: number, n2: number, n3: number, n4: number, n5: number) {
    let media: number = (n1 + n2 + n3 + n4 + n5) / 5;
    return media
}

let n1: number = parseFloat(teclado(`Digite o primeiro número: `));
let n2: number = parseFloat(teclado(`Digite o segundo número: `));
let n3: number = parseFloat(teclado(`Digite o terceiro número: `));
let n4: number = parseFloat(teclado(`Digite o quarto número: `));
let n5: number = parseFloat(teclado(`Digite o quinto número: `));

function verificarNumero(media: number) {
    let divisor: number = 2;
    let dividendo: number = media;

    let resto: number = 0;
    resto = dividendo % divisor;

    if (resto == 0) {
        console.log(`Número digitado ${dividendo} é par!`);
    }
    else if (resto == 1) {
        console.log(`Número digitado ${dividendo} é ímpar!!`);
    }
    else {
        console.log(`Algo deu errado!!`);
    }
}
function principal() : void {
    console.log(verificarNumero(media(n1, n2, n3, n4, n5))); 
}



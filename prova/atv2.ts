j/* 
Atividade 2 - (40 pontos)
Crie um programa que tenha 4 funções:

1º Função recebe 3 números e retorna o número maior (10 pontos)

2º Função recebe 3 números e retorna o número menor (10 pontos)

3º Função recebe o valor maior e o valor menor e retorna 
n1 média desses números (10 pontos)

4º Função (principal) deve: (10 pontos)
- receber os três valores digitados
- receber o retorno do valor maior
- receber o retorno do valor menor
- receber n1 média do valor maior e menor
- exibir o número maior, o número menor e n1 média

Nomes:
João Pedro Temponi de Jesus
Claudio Grabriel Gonçalves Batista
Murilo
Davi
*/
const teclado = require(`prompt-sync`)();
function obterMaiorNumero(n1: number, n2: number, n3: number): number {
    let maior = n1;
    if (n2 > maior) {
        maior = n2;
    }
    if (n3 > maior) {
        maior = n3;
    }
    return maior;
}

function obterMenorNumero(n1: number, n2: number, n3: number): number {
    let menor = n1;
    if (n2 < menor) {
        menor = n2;
    }
    if (n3 < menor) {
        menor = n3;
    }
    return menor;
}

function calcularMedia(n1: number, n2: number): number {
    return (n1 + n2) / 2;
}

function programaPrincipal(): void {
    let n1 = parseFloat(teclado('Digite o primeiro número: '));
    let n2 = parseFloat(teclado('Digite o segundo número: '));
    let n3 = parseFloat(teclado('Digite o terceiro número: '));

    let maior = obterMaiorNumero(n1, n2, n3);
    let menor = obterMenorNumero(n1, n2, n3);
    let media = calcularMedia(maior, menor);

    console.log(`Número maior: ${maior}`);
    console.log(`Número menor: ${menor}`);
    console.log(`Média: ${media}`);
}

programaPrincipal();

/*Atividade 4 (10 pontos)
 Encontre os 5 erros
 - Se inserir erros -2 pontos por erro
 - indique as linhas que estão com problemas no código

Aplicação abaixo recebe 10 números, armazena em um vetor 
e ordene esses 10 números crescente utilizando for
Nomes:
João Pedro Temponi de Jesus
Claudio Grabriel Gonçalves Batista
Murilo 
Davi
*/

console.clear();
let teclado = require(`Prompt-sync`)();
let numeros = new Array();

for (let x = 0; x <= 9; x++) {
    numeros[x] = parseInt(teclado(`Digite o número do índice ${x} do Array: `));
}

for (let z = 0; z <= 9; z++) {
    for (let y = z + 1; y <= 9; y++) {
        if (numeros[z] > numeros[y]) {
            let temporario = numeros[z];
            numeros[z] = numeros[y];
            numeros[y] = temporario;
        }
    }
}
 
console.log(`O Array em ordem crescente ${numeros}`);


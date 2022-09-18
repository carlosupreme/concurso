let entrada = ['A', 'A', 'B', 'A', 'A', 'A']

let elementoIgual, elementoDiferente;

for(let i = 1; i < entrada.length; i++) 
    if(entrada[i-1] === entrada[i]) {
        elementoIgual = entrada[i];
        break;
    }

for(let j = 0; j < entrada.length; j++) 
    if(entrada[j] != elementoIgual) {
        elementoDiferente = entrada[j];
        break;
    }

console.log(elementoDiferente);
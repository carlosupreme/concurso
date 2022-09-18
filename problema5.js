let entrada = '({[]}[])';

const estáAbriendo = (char) => (char === '{' || char === '(' || char === '[');
const estáCerrando = (char) => (char === '}' || char === ')' || char === ']');

function abrir_cerrar(char) {
    if(char === '[' || char === ']') return 0;
    if(char === '{' || char === '}') return 1;
    if(char === '(' || char === ')') return 2;
}

class Pila {
    constructor(){
        this.datos = [];
    }
    ponerEncima(d) {
        this.datos.push(d);
    }
    quitarDeEncima() {
        this.datos.pop();
    }
    getValorDeEncima() {
        return this.datos[this.datos.length - 1];
    }
    getTamaño() {
        return this.datos.length;
    }
}

let pila = new Pila();

function estáEnOrdenCorrecto(str) {
    for(let i = 0; i < str.length; i++) {
        if(estáAbriendo(str[i])) pila.ponerEncima(str[i]);
        if(estáCerrando(str[i])) {
            if(abrir_cerrar(pila.getValorDeEncima()) === abrir_cerrar(str[i])) pila.quitarDeEncima();
            else return false;
        }
    }
    return (pila.getTamaño() === 0);
}

console.log(estáEnOrdenCorrecto(entrada) ? 'La entrada SÍ es válida' :  'La entrada NO es válida');
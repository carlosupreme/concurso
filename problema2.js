const invertirString = str => str.split("").reverse().join("");

let entrada = 'hey';

function encriptar(mensaje) {

    mensaje = invertirString(mensaje); 

    let cadenaEncriptada = '';

    for(let i = 0; i < mensaje.length; i++){
        if(mensaje[i] === ' ')  
            cadenaEncriptada += ' ';
        else if(!isNaN(mensaje[i]))
            cadenaEncriptada += mensaje[i];
        else 
            cadenaEncriptada += `'${mensaje.charCodeAt(i)}'`;
    }

    return cadenaEncriptada;
}

function desencriptar(msj) {

    let mensajeDesencriptado = '';

    msj = msj.split("'").filter(e => e != '');

    msj.forEach(x => {
        if((x >= 0 && x <= 9) || x === ' ') 
            mensajeDesencriptado += x;
        else
            mensajeDesencriptado += String.fromCharCode(x);
    });
    
    return invertirString(mensajeDesencriptado).trim();
}

console.log(`Mensaje encriptado: ${encriptar(entrada)}`);
console.log(`Mensaje desencriptado: ${desencriptar(encriptar(entrada))}`);
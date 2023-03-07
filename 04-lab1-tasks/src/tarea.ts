export class Tarea {
    constructor() { }

    /**
     * Code to validate if a text is palindrome 
     * @param strCadena 
     * @returns 
     */
    static verficaSiLaCadenaEsUnPalindromo(strCadena: string) {
        const cadenaLimpia = strCadena.split(' ').join('').toLowerCase();
        let cadenaInversa = '';
        for (let i = cadenaLimpia.length - 1; i >= 0; i--) {
            cadenaInversa += cadenaLimpia[i];
        }
        return cadenaLimpia === cadenaInversa;
    }
    /**
     * code that returns the highest number of an array
     * @param arrNumeros 
     * @returns 
     */
    static obtenerNumeroMayorDeUnArray(arrNumeros: number[]) {
        let numeroMayor = arrNumeros[0];
        for (let posicion = 1; posicion < arrNumeros.length; posicion++) {
            if (arrNumeros[posicion] > numeroMayor) {
                numeroMayor = arrNumeros[posicion];
            }
        }
        return numeroMayor;
    }
    /**
     * code that returns an Array of strings with input string
     * @param cadena 
     * @returns 
     */
    static convertirCadenaAUnArray(cadena: string) {
        const arrResultante = [];
        for (let posicion = 0; posicion < cadena.length; posicion++) {
            arrResultante.push(cadena.charAt(posicion));
        }
        return arrResultante;
    }
}
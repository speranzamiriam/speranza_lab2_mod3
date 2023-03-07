
import { Tarea } from "../src/tarea";

describe('Escenario 1 : Tareas de Laboratorio 1', () => {
    test('Validar la Verificacion de Palindromos ', () => {
        expect(Tarea.verficaSiLaCadenaEsUnPalindromo('ANA LAVA LANA')).toBe(true);
        expect(Tarea.verficaSiLaCadenaEsUnPalindromo('ANA LAVA LANAX')).toBe(false);
    });

    test('Validar la Obtencion del numero mayor de un Array', () => {
        expect(Tarea.obtenerNumeroMayorDeUnArray([56, 11, 68, 24, 76, 94])).toEqual(94);
    });
    test('Validar la Conversion de una Cadena a un Array', () => {
        expect(Tarea.convertirCadenaAUnArray("Esperanza")).toEqual(['E', 's', 'p', 'e', 'r', 'a', 'n', 'z', 'a']);
    });
});
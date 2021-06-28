// import getObjectDescription from "./01-ejercicio" //primero se importa el archivo 
const getObjectDescription = require('./01-ejercicio');
describe('Este archivo de pruebas es para ver la funcion  "getObjectDescription" y el objeto objetMapping', () => {

    test ('La funcion getObjetDescription debe existir', () => {
        expect(getObjectDescription).toBeTruthy(); //esta prueba pasa si el getobjet existe asi se pone
    } );

    test('getobjet...(Active) debe ser activo', ()=>{
        const result = getObjectDescription('ACTIVE');

        expect(result).toBe('Activo');
    });

    test("getObjetDescription('') debe ser falso", () => {
        const result = getObjectDescription();
        expect(result).toBe("El argumento 'type' no existe");
        //toBeFalsy compueba si el valor es nulo/undefined/false
    })

});

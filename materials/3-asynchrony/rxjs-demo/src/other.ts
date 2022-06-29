import { from } from 'rxjs';

// ESM
export const other = 'Hello from other changed'; // ¿Que sistema de modulos estoy utilizando?
// CJS (Common JS)
// module.exports = { other: 'Hello from other' }

export function helloRxJS(){
    from([3,6,1,"adios"]).subscribe(d => console.log('Operador From: ', d));
}

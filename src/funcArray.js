/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1, numero2) {
    return Math.max(numero1, numero2);
}

/* Encuentra la palabra mas larga*/

export function findLongestWord(array) {
    let result = "";
    if (array.length === 0) {
        return undefined;
    }
    for (let i = 0; i < array.length; i++) {
        if (result.length < array[i].length) {
            result = array[i];
        }
    }
    return result;
}

/* Calcula la suma*/

export function sumArray(array) {
    const initval = 0;
    const sum = array.reduce((acum, acvalue) => acum + acvalue, initval);
    return sum;
}

/* Calcula la media aritmética*/
/* Calculo de la media en un array con numeros*/

export function averageNumbers(array) {
    const initval = 0;
    const sum = array.reduce((acum, acvalue) => acum + acvalue, initval);
    let elements = array.length;
    if (elements === 0) {
        return undefined;
    } else {
        return sum / elements;
    }
}
/* Calculo de la media de longitud de una array de strings*/
export function averageWordLength(array) {
    const initval = 0;
    const sumlength = array.reduce((acum, acvalue) => acum + acvalue.length, initval);
    let elements = array.length;
    if (elements === 0) {
        return undefined;
    } else {
        return sumlength / elements;
    }
}
export function uniquifyArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    if (newArray.length === 0) {
        return undefined;
    } else  {
        return newArray;
    }
}

// Escribe una función `doesWordExist` que reciba un array de palabras como argumento y una palabra para buscar dentro del array. Devuelve `true` si existe, sino devuelve `false`. **No** utilices `indexOf` en este caso.
export function doesWordExist(array, palabra) {



}

export function howManyTimes() {

}
export function greatestProduct() {

}






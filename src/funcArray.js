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
// export function findLongestWord(array) {
// return array.reduce((longestWord, currentWord) => current.length >longestWord.length ? currentWord : longestWord, array[0]);
// }


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
    } else {
        return newArray;
    }
}

// Escribe una función `doesWordExist` que reciba un array de palabras como argumento y una palabra para buscar dentro del array. Devuelve `true` si existe, sino devuelve `false`. **No** utilices `indexOf` en este caso.
export function doesWordExist(array, palabra) {
    if (array.length === 0) {
        return false;
    } return array.includes(palabra);
}
//Escribe una función `howManyTimes` que tome un array de palabras como argumento y una palabra para buscar. La función devolverá el número de veces que una palabra aparece en el array.
export function howManyTimes(array, palabra) {
    let contador = 0;
    if (array.length === 0){
        return undefined;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === palabra) {
            contador += 1;
        }else{
        contador = contador;
        }
    }
    return contador;
}
//Bonus
export function greatestProduct(matrix) {
    let maxProduct=0;
    for (let y = 0; y < matrix.length; y++) {//horizontal
        for (let x = 0; x < matrix[y].length ; x++) {
            const product = matrix[y][x] * matrix[y][x + 1] * matrix[y][x + 2] * matrix[y][x + 3];

            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    
    for (let y = 0; y < matrix.length-3; y++) { //vertical
        for (let x = 0; x < matrix[y].length ; x++) {
            const product = matrix[y][x] * matrix[y+1][x ] * matrix[y+2][x] * matrix[y+3][x];

            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    for (let y = 0; y < matrix.length-3; y++) { //diagonal 
        for (let x = 0; x < matrix[y].length-3 ; x++) {
            const product = matrix[y][x] * matrix[y+1][x+1 ] * matrix[y+2][x+2] * matrix[y+3][x+3];
            
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    for (let y = 0; y < matrix.length-3; y++) { //diagonal inversa
        for (let x = 3; x < matrix[y].length; x++) {
            const product = matrix[y][x] * matrix[y+1][x-1] * matrix[y+2][x-2] * matrix[y+3][x-3];

            if (product > maxProduct) {
                maxProduct = product;
            }
        }
        return maxProduct;
    }
}



// export function greatestProduct(matrix) {
//     let maxProduct = 0;
//     for (let x = 0; x < matrix.length - 3; x++) {
//         for (let z = 0; z < matrix[x].length - 3; z++) {
//             const productHorizontal = matrix[x][z] * matrix[x][z + 1] * matrix[x][z + 2] * matrix[x][z + 3];
//             if (productHorizontal > maxProduct) {
//                 maxProduct = productHorizontal;
//             }

//             const productVertical = matrix[x][z] * matrix[x + 1][z] * matrix[x + 2][z] * matrix[x + 3][z];
//             if (productVertical > maxProduct) {
//                 maxProduct = productVertical;
//             }

//             const productDiagonal = matrix[x][z] * matrix[x + 1][z + 1] * matrix[x + 2][z + 2] * matrix[x + 3][z + 3];
//             if (productDiagonal > maxProduct) {
//                 maxProduct = productDiagonal;
//             }

//             const productDiagonalInversa = matrix[x][z + 3] * matrix[x +1][z +2] * matrix[x + 2][z + 1] * matrix[x + 3][z];
//             if (productDiagonalInversa > maxProduct) {
//                 maxProduct = productDiagonalInversa;
//             }
//         }
//     }
//     return maxProduct;
// }

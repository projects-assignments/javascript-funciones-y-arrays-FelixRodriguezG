/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1,numero2){
    return Math.max(numero1,numero2);  
}

export function findLongestWord(array){
    let size = 0;
    let result = "";

    for (let i = 0; i < array.length; i++){
        if (array[i].lenght > size) {
            size = array[i].lenght;
            result= array[i];

        }
    }
    return result;
}

export function sumArray(array){
    for(let i = 0; i <= array.length; i++){
        element = array[i];
        suma += element;
    }
    return suma;
}

export function averageNumbers(array){
    for(let i = 0; i <= array.length; i++){
        element = array[i];
        suma += element;
        media = suma /array.lenght;
    }
    return media;
}
export function averageWordLength(){

}
export function uniquifyArray(){

}
export function doesWordExist(array, palabra){ 

}
export function howManyTimes(){

}
export function greatestProduct(){

}






/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1,numero2){
    if (numero1 === numero2){
        return  numero1;
    } else{
    return Math.max(numero1,numero2);  
    }
}

export function findLongestWord(array){
        let result = "";
        if (array.length === 0){
            return undefined;
        }
    for (let i = 0; i < array.length; i++){
        if (result.length < array[i].length) {
            result = array[i];
        }
        }
        return result;
    }

export function sumArray(array){
    const initval = 0;
    const sum= array.reduce((acum,cvalue) => acum + cvalue ,initval);
    return sum;
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






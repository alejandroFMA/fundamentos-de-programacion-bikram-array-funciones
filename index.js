let arrayVacio = [];

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayNumerosPares = [0, 2, 4, 6, 8];

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

function suma(a, b){   
return a + b
}

function potenciacion(a, b) {
    let potencia = 1;
    for (let i = 0; i < b; i++) {
      potencia *= a;
    }
    return potencia;
}

function separarPalabras(string) {
    let palabras = string.split(" ");

    return palabras;
}

function repetirString(a, b) {
    let nuevoString = ""
    for (let i = 0; i < b; i++) {
       nuevoString += a;     
    }
return nuevoString;
}

function esPrimo(a) {
    if (a < 2) {
        return false;
    }
    
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            return false;
        }     
    }
    
    return true;
}


function ordenarArray(arr){

    let newArray=arr.slice()
    return  newArray.sort((a, b) => a-b)
} 

 function obtenerPares(a){
    let numPares=[]
    for (let i = 0; index < a.length; i++) {
        if (a[i] % 2 == 0) {
            numPares.push(a[i])
        }
        
    }
    return numPares

  }

 ////// hasta aqui bien
  
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
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            numPares.push(a[i])
        }
        
    }
    return numPares

  }


function pintarArray(arr) {
    
}



function arrayMapi(arr) {
    
}


function eliminarDuplicados(arr){

    return [...new Set(arr)]; //[...new Set] creaba nuevo array sin dupes
}

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ['Hola', 'Mundo'];
let loGuardoTodo = [ 'hola', 'que', 23, 42.33, 'tal'];
let arrayDeArrays =[[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

function multiplicacion(a, b){

return a*b;
}

function division(a, b){

    return a/b;
}

function esPar(a){
    if(a % 2 == 0){

        return true  
    }
    

    return false
}


function resta(a,b){

    return a-b;
}
 
let arrayFunciones = [suma, resta, multiplicacion];

for (let i = 0; i < arrayFunciones.length; i++) {
    const element = array[index];
    
}



function ordenarArray2(arr){

    let newArr= arr.slice();

    return newArr.sort((a,b)=> b-a)
}


function obtenerImpares(a){
    
    let arrayImp=[];

    for(let i = 0; i < a.length; i++)
        if(a[i] % 2 !== 0){
        arrayImp.push(a[i])
    }
    return arrayImp

}


function sumarArray(a){

let suma = 0;
   
    for (let i = 0; i < a.length; i++) {
      
        suma += a[i]
        
    }
return suma;
}

function multiplicarArray(a) {

    let multiplicar = 1; //ojo!!!! multiplicar y dividir por 0 no

    for (let i = 0; i < a.length; i++) {

        multiplicar *= a[i];

    }
    return multiplicar;
}
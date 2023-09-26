// Crear variable de nombre **arrayVacio** cuyo valor sea **un array vacío**


let arrayVacio = [];
//  Crear variable de nombre **arrayNumeros** declarada con un **array de números del 0 al 9 (0, 1, 2...)**

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Crear variable de nombre **arrayNumerosPares** declarada con un **array con los números pares del 0 al 9** (considerando al 0 par)

let arrayNumerosPares = [0, 2, 4, 6, 8];
// Crear variable de nombre **arrayBidimensional** declarada con valor **array [[0, 1, 2], ['a', 'b', 'c']]**

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];
//  Crea la función **suma** que acepte como argumento **dos números** y devuelva **el resultado de su suma**

function suma(a, b){   

return a + b
}
//  Crea la función **potenciacion** que acepte como argumento **dos números** y devuelva **el resultado de elevar el primero(a) al segundo(b) (a^b)**

function potenciacion(a, b) {
    let potencia = 1;
    for (let i = 0; i < b; i++) {
      potencia *= a;
    }
    return potencia;
}

// Crea la función **separarPalabras** que acepte como argumento **un string** y devuelva **un array de palabras 'hola mundo' => [hola, mundo]**

function separarPalabras(string) {
    let palabras = string.split(" ");

    return palabras;
}
// Crea la función **repetirString** que acepte como argumento **un string y un número** y devuelva **un string que sea el resultado de concatenar el primer string el número dado de veces**
function repetirString(a, b) {
    let nuevoString = ""
    for (let i = 0; i < b; i++) {
       nuevoString += a;     
    }
return nuevoString;
}


// Crea la función **esPrimo** que acepte como argumento **un número** y devuelva ****true si es primo y false si no lo es****

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

function pintarArray(a) {
    return `[${a.join(", ")}]`;
}

function arrayMapi(arr, funcion){

let newArr=[];


for (let i = 0; i < arr.length; i++) {  
    
    newArr.push(funcion(a[i]))

}
return newArr
}




function eliminarDuplicados(arr){

 let sinDupes=[... new Set (arr)];

return sinDupes
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
//Dados 2 numeros
//Imprimir operaciones basicas
//Utilizando funciones

operaciones(10,5)

function operaciones(a,b){
    console.log("La suma es ",suma(a,b));
    console.log("La resta es ",resta(a,b));
    console.log("La multiplicacion es ",multiplica(a,b));
    console.log("La divición es ",divide(a,b));
    console.log("El modulo es ",modulo(a,b));   
}

function suma(a,b){
    sum = a+b;
    return sum;
}
function resta(a,b){
    res = a-b;
    return res;
}
function multiplica(a,b){
    prod = a*b;
    return prod;
}
function divide(a,b){
    div = a/b;
    return div;
}
function modulo(a,b){
    mod = a%b;
    return mod;
}



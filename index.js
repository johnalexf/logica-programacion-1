//Comando para que en la terminal se habilite la escritura por el usuario, 
//recordar usar npm install prompt-sync, para que funcione el comando prompt

const prompt = require('prompt-sync')();


function orden_numerico(numbers) {
    let numero_mayor = Math.max(...numbers)
    let numero_menor = Math.min(...numbers)
    let numero_medio = 0
    for (let i =0; i < numbers.length ; i++){
        if( numero_mayor > numbers[i]  && numero_menor < numbers[i]){
            numero_medio = numbers[i]
        }
    }
    return [numero_mayor,numero_medio,numero_menor];
}

function numeros_iguales (numbers){
    let numero_igual = 0
    let cantidad_de_repeticion = 2
    if(numbers[0] === numbers[1] && numbers[0] === numbers[2]  ){
        cantidad_de_repeticion = 3
        numero_igual = numbers[0]
    }
    else if (numbers[0] === numbers[1] ){  numero_igual = numbers[0] }
    else if (numbers[0] === numbers[2] ){  numero_igual = numbers[0] }
    else if (numbers[2] === numbers[1] ){  numero_igual = numbers[1] }
    else { cantidad_de_repeticion = 0 }

    return [cantidad_de_repeticion, numero_igual]
    
}



// Pedir numeros al usuario
let numeros_ingresados = [0,0,0]
let numerosLetras = ["primer","segundo","tercer"]

for (let i=0;i<numeros_ingresados.length;i++){
    do{
        numeros_ingresados[i]=parseInt(prompt(`Ingrese el ${numerosLetras[i]} numero  :  `))
        if(!Number.isInteger(numeros_ingresados[i])){ console.log("Porfavor ingrese un numero entero")}    
    }while(!Number.isInteger(numeros_ingresados[i]))

}

// mostrar numeros ingresados por el usuario
console.log(`\nLos numeros ingresados son los siguientes :  ${numeros_ingresados}`)

// Se resive de la funcion dos enteros en donde:
// igualdad[0] es la cantidad de veces que se repite el numero y
// igualdad[1] es el numero que se repite 
let igualdad = numeros_iguales(numeros_ingresados)


let texto_a_imprimir = ""
if(igualdad[0] === 3 ){
    texto_a_imprimir = "\nLos tres numeros son iguales, en donde el numero es :  " + igualdad[1]
}
else{ 
    if (igualdad[0] === 2){
    texto_a_imprimir =  texto_a_imprimir + `\nDos numeros son iguales, en donde el numero repetido es :  ${igualdad[1]} 
                        \nDe igual manera su orden seria el siguiente:`
    }
    let numeros_ordenados = orden_numerico(numeros_ingresados)
    if(igualdad[0] === 2){numeros_ordenados[1]=igualdad[1]}
    texto_a_imprimir = texto_a_imprimir + 
    `\nLos numeros organizados de mayor a menor se verian de la siguiente manera : ${numeros_ordenados}` +
    `\nLos numeros organizados de menor a mayor se verian de la siguiente manera : ${numeros_ordenados.reverse()}`;
    
}

console.log(texto_a_imprimir)
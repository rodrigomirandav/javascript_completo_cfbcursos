/*
Declaração de variáveis com var, let, const
*/

"use strict"

// var

// Var tem um problema, pois permite acessar a variavel fora do escopo.  
// Isto é um grande problema, para resolver isto utilizamos o let

if (true) {
    var nome = 'Rodrigo'
    console.log(nome)
}

console.log(nome)

// let

function teste(){
    let nomeLet = 'Rodrigo'
    
    if (true) {
        console.log('Dentro IF ' + nomeLet)   
    }

    console.log('Dentro da função ' + nomeLet)
}

// console.log('Fora da função ' + nomeLet) // Erro pois está fora de escopo

// const

const nomeConst = "Rodrigo"

console.log(nomeConst)

nomeConst = "Alterando nome" // erro pois não é possível alterar um valor de variávle constante 
                            // -> TypeError: Assignment to constant variable.
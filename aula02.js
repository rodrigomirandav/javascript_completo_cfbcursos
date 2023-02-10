"use strict"

/*
Com o modo strict o Js não vai permitir utilizar uma variável sem declara-la. 
entre outros erros que ele irá apontar.
*/

let nome = "Rodrigo"

// Tentando usar nome2 sem declara-lo com let, var ou const
//nome2 = "Maria" // aula02.js:10 Uncaught ReferenceError: nome2 is not defined at aula02.js:10:7

console.log(nome)
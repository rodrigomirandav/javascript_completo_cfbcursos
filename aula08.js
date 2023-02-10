/*
BITWISE -> bit a bit
*/

// Operadores & e |
               //76543210
let num1 = 10 // 00001010
let num2 = 13 // 00001101
              // 00001000 -> 8    & (and)
              // 00001111 -> 15   | (or)

console.log(num1 & num2) // 00001000 -> 8

console.log(num1 | num2) // 00001111 -> 15

// Deslocamento de bits

num1 = 10 // 00001010
          // 00010100  número 20 (dobrou)
          // 00000101  número 5 (dividiu)

// Esquerda
console.log(num1 << 1) // número 20 (dobrou)

// Direita
console.log(num1 >> 1) // número 5 (dividiu)


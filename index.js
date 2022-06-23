'use strict'

/*1

## 01 - Fruits

- Créez une const `fruits` qui contiendra un tableau avec les valeurs `"mango"`, `"lemon"` et `"blueberry"`
- Affichez `fruits` dans la console
- Bonus: essayez `console.table(fruits)`



const  fruits = ["mango","lemon","blueberry"]

console.log([fruits])
console.log(fruits)

*/


/*2
## 02 - Access

- Créez une const `ingredients` qui contiendra un tableau avec les valeurs `"eggs"`, `"milk"` et `"butter"`
- Faites apparaître `"milk"` dans la console
- Faites apparaître l'index de `"butter"` dans la console


const ingredient = ["eggs","milk","butter"]

 console.log(ingredient[1])

console.log(ingredient.indexOf("butter"))
*/


/*3
## 03 - Add and Remove

- Créez une const `objects` qui contiendra un tableau avec les valeurs `"pen"`, `"book"` et `"lamp"`
- Ajoutez `"chair"` au début du tableau puis affichez le résultat
- Enlevez `"lamp"` puis affichez le résultat
- Ajoutez `"laptop"` à la fin du tableau puis affichez le résultat
- Enlevez `"chair"` puis affichez le résultat

const object = ["pen","book","lamp"]
object.unshift("chair")

console.log(object)

object.pop()

console.log(object)


object.push("laptop")

console.log(object)


object.shift()

console.log(object)

*/

/*4
## 4 - Order

- Créez une const `numbers` qui contiendra un tableau avec les valeurs `4`, `10`, `8`, `12` et `6`
- Inversez l'ordre des éléments de `numbers` puis affichez le résultat

const numbers = ["3","10","8","12","6"]

numbers.reverse()

console.log(numbers)



/*5
## 05 - Boucle

- Créez une variable `total` de valeur `0` et une const `limit` de valeur `10`
- À l'aide d'une boucle for allant de`0` à `limit`, augmentez la valeur de `total` en lui ajoutant la valeur de `i` (i est l'index de votre boucle)
- Affichez la valeur de `total` après votre boucle, total doit valoir 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10



let total = 0
const limit = 10

for (let i = 0 ; i <= 10  ; i++ ) {
    console.log(i)
    total = total + i
   
}

console.log(total)

*/

/*6
## 06 - Reverse

- Créez une const `sentence` ayant pour valeur "Hello Konexio !"
- A l'aide d'une boucle for et sans utilisez la fonction .reverse(), faites en sorte d'afficher l'inverse de votre variable `sentence` ("! oixenoK olleH")

const sentence = "Hallo Konexio!"

for (let i = sentence.length -1 ;   i >= 0  ; i--) {
    console.log(sentence.charAt(i))

}

*/


/*7 

 07 - Fizzbuzz

- Créez une boucle qui part de 0 et s'arrête à 100
- À chaque itération :
    - Si `i` est un multiple de 3 ⇒ affichez "fizz"
    - Si `i` est un multiple de 5 ⇒ affichez "buzz"
    - Si `i` est un multiple de 3 et 5 ⇒ affichez "fizzbuzz"
    - Si `i` est un multilple de 7 ⇒ ne l'affichez pas
    - Sinon, affichez la valeur de i

*Indice: utilisez modulo*
*/
// let end = 100

// for ( let i = 0 ; i <=100; i++) {
//      console.log(i)
//      if (i % 3 === 0) {
//          console.log("fizz")
        
//      }

//     else  if (i % 5 === 0 ) {
//         console.log("buzz")

//     }
//      else if (i % 3 === 0 && i % 5 === 0 ) {
//         console.log ("fizzbuzz")
//     }

//     else if (i % 7 === 0 ) {
//         console.log("")
//     }

//    else{
//         console.log(i)
//   }

//   } 
    


/*8
 08 - While

- Reproduisez l'exercice 5 avec une boucle while

// let total = 0
// let limit = 10


// while ( 0 <= limit ) {
//     total = total + limit
//     limit = limit -1

//     console.log(total)

// }


## 09 - Sans boucle

- Créez un tableau avec le nom de chacun de vos camarades
- Affichez aléatoirement le nom de la personne tiré au sort


//  const friends = ["Danh","walid1","walid2","Edaly"]

//  const min = 0

//  const max = friends.length - 1
  
//  const random = Math.floor(Math.random() * max ) + min

//  console.log(friends[random])


/*10
## 10 - Random and max

- Créez un tableau vide
    - Avec une boucle for, ajoutez 20 entiers aléatoires entre 0 et 100
- Affichez ce tableau
- Avec une deuxième boucle for, trouvez l'entier le plus grand de votre tableau (pas le droit d'utiliser Math.max

// const table = []

// for (let i = 0 ; i < 20 ; i++ ) {
//    table[i] = Math.floor(Math.random() * 100)  + 0
   
// }
// console.log(table)

// let max = 0
// for(let i = 0 ; i <table.length ; i++ ) {
   
//     if ( max < table[i]) {
//         max = table[i]
//     }

// }

// console.log(max) */
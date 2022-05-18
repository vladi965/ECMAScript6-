/* let array = [1,2,3, [1,2,3, [1,2,3]]]; */

console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//TrimStart 
//El cual me va a permitir eliminar los espacios en blanco de un string

let hello = '       hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello World      ';
console.log(hello2);
console.log(hello2.trimEnd());

try {
    
} catch {
    error
}

//Transformar arreglos a objetos
let entries = [["name", "vladimir"], ["age", 32]];

console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);

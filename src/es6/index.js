function newFunction(name, age, country){
    var name = name || 'Vladimir';
    var age = age || 25;
    var country = country || 'Peru';
    console.log(name, age, country);
}


// ES6
function newFunction2(name = 'Vladimir', age = 25, country = "Peru"){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'PERU');



//Esto no es la mejor opción

let lorem = "Quiero aprender ECMASCRIPT6+ en Platzi, la mejor plataforma Online del Mundo \n" 
+ "otra frase epica que necesitamos."

//Esta parte si ES6

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
` ;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Vladimir',
    'age': 25,
    'country': 'Perú'
}

console.log(person.name, person.age);

//ES6

/* let {name} = person;
console.log(name); */

//Operador de Propagación
//Que nos permite a nosotros expandir ciertas situaciones varios elementos

let team1 = ['Vladimir', 'Adrian', 'Ricardo'];
let team2 = ['Lucero', 'Jossy', 'Milagros'];

let education = ['David', ...team1, ...team2];

console.log(education);

//Con Let solo esta disponible con Scope
//Significa el bloque de codigo que va a ser llamado

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

//Const nos va a permitir establecer una variable

var a = 'b';
a = 'a';
console.log(a);

/*============================*/
let name = 'Vladimir';
let age = 25;

obj = { name: name, age: age};

//ES6
obj2 = { name, age };
console.log(obj2)

/*==== Arrow Functions =====*/

const names = [
    { name: 'Vladimir', age: 25 },
    { name: 'Maria', age: 30 }
]

let listOfNames = names.map(function(item){
    console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name));

/* const listOfNames3 = (name, age, country) => {
    ...
} */

/* const listOfNames4 = name =>{
    ...
} */

const square = num => num * num;


//Promesas = algo va a pasar  

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey!')
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('hola'))
  .catch(error => console.log(error));
  

    class calculator{
        constructor(){
        this.valueA = 0;
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new calculator();
    console.log(calc.sum(2,2));


import { hello } from './module';     
    
hello();


function helloworld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloworld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);



let number = [1,2,3,7,8];
if(number.includes(9)){
    console.log('Si se encuentra el valor 7');
}
else{
    console.log('No se encuentra')
}

let base = 4;
let exponent = 4;
let result = base ** exponent;

console.log(result);
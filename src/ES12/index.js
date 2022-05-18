//Replace
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la Web";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//Metodo Privados
class Message{
    #show(val){
        console.log(val);
    };
    /* get #add(val){
        
    } */
}

const message = new Message();
message.show('Hola!');


// Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
 .then(response => console.log(response));

 
// WeakRef(element)

 class AnyClass {
     constructor(element){
        this.ref = mew WeakRef(element)
     }
 }

 // Nuevos Operadores Logicos

 let isTrue = true;
 let isFalse = false;
 console.log(isTrue &&= isFalse);

 let isTrue = true;
 let isFalse = false;
 console.log(isTrue ||= isFalse);

 let isTrue = undefined;
 let isFalse = false;
 console.log(isTrue ??= isFalse);
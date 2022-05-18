
//Objetc entries devuelve los valores de una matriz
const data = {
    frontend: 'Vladimir',
    backend: 'Lucero',
    design: 'Milagros'
}

//Transformar este objeto en una matriz
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//Objetc Values: el cual me devuelve los valores de un objeto a un arreglo

const data2 = {
    frontend: 'Vladimir',
    backend: 'Lucero',
    design: 'Milagros'
}

const values = Objetc.values(data);
console.log(values);
console.log(values.length);      


const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '------'));
console.log('food'.padEnd(12, '-----'));


//Promise
const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test error'))
    }) 
};


//Async
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();



//De la forma correcta

const anothorFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anothorFunction();
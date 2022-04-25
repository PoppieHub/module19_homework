/* First task */

const getListHasOwnPrototype = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

/* # Example input */

const workerPrototype = {
    profession: 'developer',
}

const person = Object.create(workerPrototype);
person.firstName = 'Andrey';
person.lastName = 'Ivanov';


console.group(`This is object contains prototype`);
    console.log(person);
console.groupEnd();

console.group(`List own prototype`);
    getListHasOwnPrototype(person);
console.groupEnd();

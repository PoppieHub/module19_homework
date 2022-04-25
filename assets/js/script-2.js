/* # Second task */

const checkProperty = (obj, str) => {
    return str in obj;
}

const differentCheckProperty = (obj, str) => {
    for (let key in obj) {
        return obj.hasOwnProperty(str);
    }
}

/* # Example input */

/*

const workerPrototype = {
    profession: 'developer',
}

const person = Object.create(workerPrototype);
person.firstName = 'Andrey';
person.lastName = 'Ivanov';

*/

console.group(`This is checks if the passed object has a property with the given name`);

    console.group(`This is the first implementation of the method`);
        console.table(
            `firstName:`,
                      checkProperty(person, 'firstName')
            );
        console.table(
            `secondName:`,
                      checkProperty(person, 'secondName')
        );
        console.groupEnd();

    console.group(`This is the second implementation of the method`);
        console.table(
            `firstName:`,
            checkProperty(person, 'firstName')
        );
        console.table(
            `secondName:`,
            checkProperty(person, 'secondName')
        );
console.groupEnd();

console.groupEnd();

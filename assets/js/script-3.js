/* # Third task */

const emptyObjNotProto = () => {
    return Object.create(null);
}

console.group(`This is a method that creates an empty object, without a prototype`);
    console.log(emptyObjNotProto());
console.groupEnd();

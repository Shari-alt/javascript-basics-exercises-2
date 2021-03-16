function greet(userName) {
    if (userName === "") {
        userName = "Mr. Nobody";
    }
        return `Hello ${userName}`;
}

console.log(greet('Shari'))
console.log(greet('Indira'))
console.log(greet('Broder'))
console.log(greet(''))
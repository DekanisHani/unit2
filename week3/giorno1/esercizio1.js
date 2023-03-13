class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    whoIsOlder = function () {
        if(userX.age > userY.age){
            return userX.firstName + " è più vecchio di " + userY.firstName
        }else{
            return userY.firstName + " è più vecchio di " + userX.firstName
        }
    }
}

const userX = new User ("Mario", "Rossi", "35", "Roma");
const userY = new User ("Franco", "Bianchi", "45", "Milano");

console.log(userX.whoIsOlder(userY))
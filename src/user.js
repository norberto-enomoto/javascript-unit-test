/*
Create a class User
add firstName, lastName, age, email, phone, loginAttempts, and password attributes.
Create methods: login, logout and resetLoginAttempts. Those methods uses loginAttempts attribute and console log
with first name and last name attributes.
*/
class User {
    constructor(firstName, lastName, age, email, phone, loginAttempts, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.loginAttempts = loginAttempts;
        this.password = password;
    }

    login() {
        this.loginAttempts++;
        console.log(`${this.firstName} ${this.lastName} has logged in.`);
    }
    logout() {
        this.loginAttempts = 0;
        console.log(`${this.firstName} ${this.lastName} has logged out.`);
    }
    resetLoginAttempts() {
        this.loginAttempts = 0;
        console.log(`${this.firstName} ${this.lastName} has reset login attempts.`);
    }
}

module.exports = User;



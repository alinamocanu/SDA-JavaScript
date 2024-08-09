import Customer from "./Customer.js";

export default class Order {
    #number;
    #date;
    #customer;

    constructor(number, date, cart, customer) {
        this.#number = number;
        this.#date = date;
        this.cart = cart; // aggregation

        var {name, surname, email} = customer; //  destructuring assignment (ES6)
        this.#customer = new Customer(name, surname, email); // composition
    }
}
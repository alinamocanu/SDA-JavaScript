export default class Customer {
    #name;
    #surname;
    #email;

    constructor(name, surname, email) {
        this.#name = name;
        this.#surname = surname;
        this.#email = email;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get surname() {
        return this.#surname;
    }

    set surname(value) {
        this.#surname = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }
}
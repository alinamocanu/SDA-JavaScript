export default class Product {
    #name;
    #desc;
    #price;
    constructor(name, desc, price) {
        this.#name = name;
        this.#desc = desc;
        this.#price = price;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get desc() {
        return this.#desc;
    }

    set desc(value) {
        this.#desc = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#price = value;
    }

}
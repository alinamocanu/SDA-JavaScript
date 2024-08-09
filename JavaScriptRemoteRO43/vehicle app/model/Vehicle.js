export default class Vehicle {
    #brandName;
    #yearOfManufacture;
    #color;
    #price;

    constructor(brandName, yearOfManufacture, color, price) {
        this.#brandName = brandName;
        this.#yearOfManufacture = yearOfManufacture;
        this.#color = color;
        this.#price = price;
    }

    get brandName() {
        return this.#brandName;
    }

    set brandName(value) {
        this.#brandName = value;
    }

    calculateDiscount() {
        console.log('called from Vehicle');
    }
}

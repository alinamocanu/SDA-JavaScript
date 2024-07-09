import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {
    #wheelSide;
    constructor(wheelSide,  brandName, yearOfManufacture, color, price) {
        super(brandName, yearOfManufacture, color, price);
        this.#wheelSide = wheelSide;
    }

    calculateDiscount() {
        console.log('called from Car');
    }
}
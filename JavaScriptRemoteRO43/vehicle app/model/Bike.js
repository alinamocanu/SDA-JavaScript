import Vehicle from "./Vehicle.js";

export default class Bike extends Vehicle {
    #typeOfTerrain;
    constructor(typeOfTerrain, brandName, yearOfManufacture, color, price) {
        super(brandName, yearOfManufacture, color, price);
        this.#typeOfTerrain = typeOfTerrain;
    }

    calculateDiscount() {
        console.log('called from Bike');
    }
}
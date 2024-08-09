/*
Create a Car class (brand, model, current fuel amount).
Create some other classes, extending the Car class, having different maximum fuel amounts, for example:

* passenger car: 50 litres
* bus: 200 litres
* truck: 500 litres

Create a GasStation class, which will have a method able to count the amount of fuel needed to fill the tank of a car (given its current and maximum amount of fuel).
*/

function Car(brand, model, currentFuel) {
    this.brand = brand;
    this.model = model;
    this.currentFuel = currentFuel;

}

function PassengerCar(brand, name, model) {
    Car.call(this, brand, name, model);
    this.maxFuel = 50;
}

function Bus(brand, name, model) {
    Car.call(this, brand, name, model);
    this.maxFuel = 200;
} 

function Truck(brand, name, model) {
    Car.call(this, brand, name, model);
    this.maxFuel = 500;
}

function GasStation() {
    this.refuel = function(car) {
        car.maxFuel - car.currentFuel;
    }
}

Object.setPrototypeOf(PassengerCar.prototype, Car.prototype);
Object.setPrototypeOf(Bus.prototype, Car.prototype);
Object.setPrototypeOf(Truck.prototype, Car.prototype);

let bus = new Bus('BMW', 'bus model', 56);
let truck = new Truck('Mercedes', 'truck model', 142);
let passengerCar = new PassengerCar('Mercedes', 'S-Class', 34);
console.log(passengerCar.brand);

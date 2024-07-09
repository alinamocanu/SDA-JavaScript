// object literal notation
/*var person = {
    name:"John",
    age:34,
    says: function(a, b, c)  {
        console.log(`Hi my name is ${this.name}`);
    }
}*/

/*person.says();
console.log(Object.values(person));
for(let key in person)
    console.log(key + " " + person[key]);

person.name = "Lucy";

person.says();

delete person.name; // delete property
console.log(person);*/
//----------------------------------------------------------------
/*
Define following classes:
Vehicle:brandName, yearOfManufacture, color, price
Car:wheelSide; extends Vehicle
Bike:typeOfTerrain; extends Vehicle
The user should see on the screen a dropdown with three possible values: Vehicle, Car, Bike.
When selecting a value from the dropdown, a form should appear containing text inputs for all the properties 
of the selected object. When clicking on the button "Create" a new instance of the indicated type should be created
and added to an array.
 */

import Vehicle from "./model/Vehicle.js";
import Bike from "./model/Bike.js";
import Car from "./model/Car.js";


let vh = new Vehicle('BMW', 1997, 'blue', 130);
vh.brandName = 'Audi';

let b = new Bike("mountain", 'BMX', 1997, 'blue', 13);

let c = new Car('left',  1997, 'blue', 130);
//console.log(c);

let vehicleType;
let selectInput = document.getElementsByTagName("select")[0];


selectInput.onchange = function(e) {
    vehicleType = e.target.value;
    createForm(vehicleType);
}

let btn = document.getElementById("btn");
let vehicles = [];
btn.addEventListener("click", function() {
    let inputs = document.getElementsByTagName("input");
    let objValues = Array.from(inputs).map(input => input.value);
    if (vehicleType === 'Bike')
       vehicles.push(new Bike(...objValues));
    else if (vehicleType === 'Car')
        vehicles.push(new Car(...objValues)); // objValues[0], objValues[1]
    else
        vehicles.push(new Vehicle(...objValues));

   console.log(vehicles);
});

function createForm(vehicleType = "Car") {
    let container = document.getElementsByTagName("form")[0];
    container.innerHTML = '';
    let br = document.createElement("br");

    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "Brand Name");

    container.appendChild(input1);
    container.appendChild(br);

    let input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("placeholder", "Year of Manufacture");

    container.appendChild(input2);
    container.appendChild(br.cloneNode());

    let input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("placeholder", "Color");

    container.appendChild(input3);
    container.appendChild(br.cloneNode());

    let input4 = document.createElement("input");
    input4.setAttribute("type", "text");
    input4.setAttribute("placeholder", "Price");

    container.appendChild(input4);
    container.appendChild(br.cloneNode());

    if (vehicleType === 'Bike') {
        let input5 = document.createElement("input");
        input5.setAttribute("type", "text");
        input5.setAttribute("placeholder", "Type of Terrain");

        container.appendChild(input5);
        container.appendChild(br.cloneNode());

    } else if (vehicleType === 'Car') {
        let input5 = document.createElement("input");
        input5.setAttribute("type", "text");
        input5.setAttribute("placeholder", "Wheel Side");

        container.appendChild(input5);
        container.appendChild(br.cloneNode());
    }


}

//------------------------------------------------------------------
// spread syntax
function sum(x, y, z) {
    return x+y+z;
}
let arr = [1, 2, 3];
console.log(sum(...arr));
let arr2 = [0, ...arr];
console.log(arr2);

let obj = {
    b:7
}

let obj2 = {
    a:1,
    ...obj
}

console.log(obj2);

// rest operator
function sum2(x, ...args) {
    let total = x;
    for (let element of args)
        total += element;
    return total;
}

console.log(sum2(1, 2, 3, 4));

// let vs var





let obj3 = {
    myProp:"value"
}

const myVar =  {
    a:7,
    b:7
};
myVar.a = 2;
console.log(myVar);

function myFunc(obj3) {
    obj3.myProp = "another value";
}


myFunc(obj3);
console.log(obj3);

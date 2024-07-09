/*
- a product has a name,a short description and a price,
- a shopping cart contains an array of products (with their quantities)
- a customer has a name, a surname and an email address
- an order has a number,a date, a shopping cart and some client data.
Methods to be implemented:

- add product to the cart;
- remove product from the cart;
- change product quantity in the cart;
- print all the current shopping cart content (by using the template literals) + the total price;
create an order from the existing shopping cart.
Make your client data be copied inside the order, so that any modifications to the client will not affect the order. Use the ECMA6 destructuring statement for this. */

import Product from "./model/Product.js";
import Cart from "./model/Cart.js";
import Order from "./model/Order.js";
import Customer from "./model/Customer.js";

let p1 = new Product('Apple', 'delicious fruit', 5);
let p2 = new Product('Banana', 'delicious fruit', 15);
let p3 = new Product('Pear', 'delicious fruit', 7);


let c = new Cart();
c.add(p1, 2);
c.add(p2);
c.add(p3);
c.display();
c.change('Pear', 3);
c.display();
c.remove('Banana');
c.display();
c.filter('Apple');


let cust = new Customer('John', 'Smith', 'john@smith.com');
let o = new Order(1, '2020-10-10', c, cust);
cust.name = 'Harry';
// even though our customer data is modified, the customer data inside the order stays the same(composition)
console.log(cust);
console.log(o);


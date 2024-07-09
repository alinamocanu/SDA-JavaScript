export default class Cart {
    /*
        [{
         product
         quantity
        }]
    */ 
    #products; 
    static totalPrice;
    constructor() {
      this.#products = [];
      Cart.totalPrice = 0;
    }

    get products() {
        return this.#products;
    }

    add = function(product, qty = 1) {
        let item = {
            product: product,
            quantity: qty
        }
        this.#products.push(item);
        Cart.totalPrice += item.product.price*qty;
    }

    remove = function(name) {
        for (let i in this.#products) { // i -> [0..arr.length-1]
            if(this.#products[i].product.name === name) {
                Cart.totalPrice -= this.#products[i].product.price*this.#products[i].quantity;
                this.#products.splice(i, 1);
                break;
            }
        }
    }

    change = function(name, qty) {
        for (let item of this.#products) { // item -> [p1, p2, p3]
            if (item.product.name === name) {
                Cart.totalPrice = Cart.totalPrice - item.product.price*item.quantity +
                item.product.price*qty;
                item.quantity = qty;
                break;
            }

        }
    }

    display = function() {
        console.log('___________');
        console.log('YOUR SHOPPING CART');

        for (let item of this.#products) {
            // let msg = "Product" + item.product.name +"Quantity"...
            let msg = `Product: ${item.product.name}. Quantity: ${item.quantity}`;
            console.log(msg);
        }

        console.log(`Final Price ${Cart.totalPrice}`);
    }

    filter = function(name) {
        console.log('___________');
        console.log(`${name} Products`);
        let result = this.#products.filter(item => item.product.name === name);
        result.forEach(item => {
            let msg = `Product ${item.product.name} Quantity: ${item.quantity};`
            console.log(msg);
        });

    }
}
/*
 By using the ECMA6 notation, create a Computer class which contains parameters, such as:

    a name,
    the CPU speed,
    the RAM size,
    the hard disk type,
    the hard disk size,
    the screen size.
 */
class Computer {


    constructor(name, cpu, ram, screen) {
        this.name = name;
        this.cpu = cpu;
        this.ram = ram;
        this.screen = screen;
    }
 }

 class Comparer {

    compare = function(computer1, computer2) {
        let msg = '';
        if (computer1.cpu > computer2.cpu) {
            msg = `${computer1.name} has better cpu`;
        } else {
            msg = `${computer2.name} has better cpu`;
        }
        console.log(msg);

        if (computer1.ram > computer2.ram) {
            msg = `${computer1.name} has better RAM`;
        } else {
            msg = `${computer2.name} has better RAM`;
        }
        console.log(msg);

        if (computer1.screen > computer2.screen) {
            msg = `${computer1.name} has better screen resolution`;
        } else {
            msg = `${computer2.name} has better screen resolution`;
        }
        console.log(msg);
    }
 }

let c1 = new Computer('Lenovo', 8, 32, 1200);
let c2 = new Computer('Asus', 4, 16, 1900);

 let comp = new Comparer();
 comp.compare(c1, c2);

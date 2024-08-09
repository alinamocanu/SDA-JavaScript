// interschimbarea a 2 variabile
 /*a = 5 b = 6
 a = 6, b = 5 */

 let temp;
 let a = 5, b = 6;
 /*temp = a;
 a = b;
 b = temp;
 console.log(a, b);*/

 /*a = a+b;// 11
 b = a - b;//5
 a = a - b;//6
 console.log(a, b);*/

 [a, b] = [b, a]; // destructuring assignment
 console.log(a, b);

 //-------------------------------------------------------------------------------
 // definim o functie care primeste 
 //ca parametru un numar si returneaza factorialul acestuia.

 /* n! = 1*2*3..*n
 n = 5 5! = 1*2*3*4*5=5*4*3*2*1 */

 let factorial = n => {
    let p = 1;
    while(n > 1) {
        p = p*n;
        n--;
    }
    return p;
 }

 //let n = 5;
 //console.log(factorial(5));
 //console.log(n);

//---------------------------------------------------------------------------
 // Definim o functie care primeste ca param un array de numere si calculeaza
 // factorialul pentru fiecare element. Rezultatul sa fie inserat la dreapta elementului
 // in array
 // arr = [3, 4, 5, 6] => [3, 6, 4, 24, 5, 120, 6, 6!]

 // splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'July');
//console.log(months);

 let factorialArr = arr => {
    for(let i = 0; i < arr.length; i++) {
        let fact = factorial(arr[i]);
        arr.splice(i+1, 0, fact);
        i++;
    }

 }

 //let arr = [3, 4, 5, 6]; // mutabil
 //factorialArr(arr);
 //console.log(arr);

//---------------------------------------------------------------------------------
 // definim o functie care pentru un array primit ca param sa aseze numerele pare
 // la inceputul array ului si numerele impare la sfarsitul lui
 // ex a = [12, 34, 45, 9, 8, 90, 3] => a = [12, 34, 8, 90, 45, 9, 3];

 let seggregate = arr => {
    let odds = [];
    let evens = [];
    arr.forEach(element => {
        if(element%2) {
            odds.push(element);
        } else {
            evens.push(element);
        }
    } );

    return evens.concat(odds); // [...evens, ...odds]
 }

let arr = [12, 34, 45, 9, 8, 90, 3];
let arr2 = seggregate(arr);
console.log(arr2);

//-----------------------------------------------------------------------------------
// n = 13 
// n = 24
// definim o functie care pentru un numar dat n determina daca este prim sau nu. Functia
// returneaza 1 daca e prim, 0 in caz contrar.
// a, b a este divizbil cu b sau b|a a:b = c rest 0
// n= 24 [2, 3, 4, 6, 8 , 12]
// n = 36 [2, 3, 4, 6, 9, 12, 18]

let prim = n => {
    let ok = 1;
    for (let i = 2; i<=n/2;i++) {
        if (n%i == 0) {
            ok = 0;
            break;
        }
    }
    return ok;
}
let n = 18;
if (prim(n))
    console.log(`${n} este prim`)
else
    console.log(`${n} nu este prim`)

//------------------------------------------------------------------
/*Definiti o clasa Divizor care contine doua metode:
-cmmdc care calculeaza cel mai mare divizor comun prin scaderi repetate
-cmmc utilizand metoda cmmdc
 x = 45, y = 27 cmmdc(45, 27) = 9
 45 => [3, 5, 9,15]
 27 => [3, 9]

 x = 5
 y = 12
 cmmmc(5, 12) = 60
*/
class Divizor {

    static instanceNo;
    constructor(a, b) {
        this.a = a;
        this.b = b;
        Divizor.instanceNo++;
    }

    cmmdc = () => {
        let x = this.a;
        let y = this.b;

        while (x!=y) {
            if (x > y)
                x = x - y;
            else
                y = y - x;
        }
        return x;
    }

    cmmmc =  () => this.a*this.b/this.cmmdc();

    displayInstanceNo = function() {
        console.log(`${Divizor.instanceNo} objects created`);
    }
}

Divizor.instanceNo = 0;
let div = new Divizor(5, 12);
div.a = 6;
let div2 = new Divizor(45, 27);

div.displayInstanceNo();
div2.displayInstanceNo();
//console.log(div.cmmdc());
//console.log(div.cmmmc());

//console.log(div>div2); ==> compara doua referinte, nu obiectele in sine

//------------------------------------------------------------------------
/*
definim o functie care determina daca un numar este palindrom.
Un palindrom este un număr egal cu oglinditul său
 n = 28382 numar palindrom
 n = 1234 nu este palindrom
 */


let palindrom = n => {
    let y = 0;
    let n1 = n;
    while(n>0) {
        y = y*10 + n%10;
        n = parseInt(n/10);
    }

    if (n1 === y)
        console.log('palindrom');
    else
        console.log('nu este palindrom');
}

palindrom(28382);
palindrom(1234);

// closure functions
function makeFunc() {
    let hiddenText = 'some plain text';

    function displayText() {
        console.log(hiddenText);
    }

    return displayText;
}

function createCounter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
        console.log(count);
      },
      decrement: function() {
        count--;
        console.log(count);
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment(); // Output: 1
  counter.increment(); // Output: 2
  counter.decrement(); // Output: 1
  console.log(counter.getCount()); // Output: 1

// myFunc is a reference to displayText function. The displayText function keeps a reference to the lexical scope(outer function)
let myfunc = makeFunc(); 
console.log(myfunc);
myfunc();

// interview questions
for (var i = 0 ; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

for (let i = 0 ; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

/*
Define a Book object, containing the information:

* title,
* author,
* published year,
* pages number,
* is it currently reserved.

Create some objects, instances of the Book class.

Define a Library object, containing:

* name,
* address,
* array of books,

The library should have the following methods: 

* adding a book, 
* searching for a book by title (use `Array.find()`), 
* deleting a book (by title or by position in the array of books)
* reserving a book (and un-reserving when returned).
*/
function Book(title, author, publishYear, noOfPages) {
    this.title = title;
    this.author = author;
    this.publishYear = publishYear;
    this.noOfPages = noOfPages;
    let reservationStatus;
    this.setReservationStatus = function(isReserved) {
        reservationStatus = isReserved;
    } 
    this.getReservationStatus = function() {
         return reservationStatus;
    } 
}

function Library(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];

    this.add = function(book) {
        this.books.push(book);
    }

    this.search = function(title) {
        let result = this.books.find(book => book.title === title);
        return result ? result : 'No book found';
    }

    this.delete = function(noOfPages) {
        for (let i in this.books)
            if (this.books[i].noOfPages === noOfPages) {
                this.books.splice(i, 1);
                break;
            }
    }

    this.reserve = function(title) {
        let found = this.search(title);

        if (found === false) {
            console.log("No book with this title has been found!");
            return;
        }

        if (found.getReservationStatus()) {
            console.log("Book is already reserved");
        }
        else {
            found.setReservationStatus(true);
            console.log("Book reserved successfully");
        }
    }

    this.unreserve = function(title) {
        let found = this.search(title);

        if (found === false) {
            console.log("No book with this title has been found!");
            return;
        }

        if (found.getReservationStatus()) {
            found.setReservationStatus(false);
            console.log("Book has been unreserved");
        }
        else {
            console.log("Book is not reserved");
        } 
    }
}

let book1 = new Book('War and Peace', 'Leo Tolstoy', 1867, 999);
let book2 = new Book('Ulysses', 'James Joyce', 1922, 777);
let library = new Library('my library', 'my city');
library.add(book1);
library.add(book2);
console.log(library.search("Some other book"));
console.log(library.search("War and Peace"));

//reserving and unreserving multiple times - for test
library.reserve("War and Peace");
library.reserve("War and Peace");
library.unreserve("War and Peace");
library.unreserve("War and Peace");

library.delete(999);
//just to check the object's state
console.log(library.books);
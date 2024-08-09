
function Movie(name, publishYear, duration, time) {
    this.name = name;
    this.publishYear = publishYear;
    this.duration = duration;
    this.time = time;

    this.isMovieaClassic = function() {
        if( this.publishYear < 1990) {
            console.log('This movie is a classic');
        }
    } 

    this.isMovieAfterCertainHour = function(time) {
        if(this.time > time) {
            console.log('Minors under 14 are not allowed inside movie theater');
        }
    }
}

function MovieTheater(maxCapacity, name) {
    this.maxCapacity = maxCapacity;
    this.name = name;
}

function Ticket(movie, price, date, theater, seatNo) {
    this.movie = movie;
    this.date = date;
    this.theater = theater;
    this.price = price;
    this.seatNo = seatNo;

    this.calculateDiscount = function() {
        if (this.date.getDate() < 15)
            this.price = this.price - this.price*0.05;
    }
}

function Cinema() {
    this.movieTheaters = [
        new MovieTheater(3, '1A'),
        new MovieTheater(16, '1B'),
        new MovieTheater(120, '1B')
    ];

    this.reserveTicket = function(movie, price, date, theater, seatNo) {
        if (theater.maxCapacity) {
            let tick = new Ticket(movie, price, date, theater, seatNo);
            tick.calculateDiscount();
            theater.maxCapacity--;
            console.log('Ticket bought successfuly:');
            console.log(tick);
        } else {
            console.log('There are no tickets left');
        }
 
    }
}

let m = new Movie('Titanic', 1997, 3, 19);
m.isMovieaClassic();
m.isMovieAfterCertainHour(18);
let c = new Cinema();
c.reserveTicket(m, 40, new Date(2024, 7, 11), c.movieTheaters[0], c.movieTheaters[0].maxCapacity);


// continue, break, return

let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
    if(arr[i]%2 == 0) {
        continue; // break;
    }
    console.log(arr[i]);
}
function myFunc() {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]%2 == 0) {
            return;
        }
        console.log(arr[i]);
    }
    // instructiuni
}

// returns the day of the month
let d = new Date(2024, 7, 11);
console.log(d.getDate());
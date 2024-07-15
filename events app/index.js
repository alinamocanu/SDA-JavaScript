/*
Implement an event management app using following objects:
Event - name, date, time, duration
WeddingEvent(extends Event) - couple
ConferenceEvent(extends Event) - topic
EventSalon - address, capacity, bookings
Client - name, contact
IndividualClient - type
CorporateClient - companyName, type
Booking - client, event, bookingDate
 */

class Event {
    #name;
    #date;
    #time;
    #duration;
    constructor(name, date, time, duration) {
        this.#name = name;
        this.#date = date;
        this.#time = time;
        this.#duration = duration;
    }

    getDetails() {
        console.log(`${this.#name} takes place at ${this.#date}  ${this.#time} for ${this.#duration}`);
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get date() {
        return this.#date;
    }

    set date(value) {
        this.#date = value;
    }

    get time() {
        return this.#time;
    }

    set time(value) {
        this.#time = value;
    }

    get duration() {
        return this.#duration;
    }

    set duration(value) {
        this.#duration = value;
    }
}

class WeddingEvent extends Event {
    // couple {bride:value, groom:value}
    constructor(couple, date, time, duration) {
        super('Wedding', date, time, duration);
        this.couple = couple;
    }

    getDetails() {
        console.log(`${this.couple.bride} & ${this.couple.groom} are getting married on ${this.date} for ${this.duration}`);
    }

}

class ConferenceEvent extends Event {

      constructor(topic, date, time, duration) {
        super('Wedding', date, time, duration);
        this.topic = topic;
    }

    getDetails() {
        console.log(` Conference on ${this.topic} has place on ${this.date} for ${this.duration}`);
    }  
}

class EventSalon {
    constructor(address, capacity) {
        this.address = address;
        this.capacity = capacity;
        this.bookings = [];
        this.clients = [];
        this.events = [];
    }

    // return the number of corporate clients that reserved this venue
    // at a point in time
    countCorporateClients() {

    }

    // what events take more than 8 hours?
    checkLongEvents() {

    }


    // check disponibility
    checkAvailability(event) {
        for (let i = 0; i < this.bookings.length; i++) {
            if (event.date.getTime() == this.bookings[i].event.date.getTime()) {
                return 0;
            }
        }
        return 1;
    }

    // make booking(event)
    makeBooking(event, client, date) {
        if (this.checkAvailability(event)) {
            let booking = new Booking(event, client, date);
            this.bookings.push(booking); 
            console.log(booking); 
        } else {
            console.log(`Please reschedule or pick a different venue for ${event.date}`);
        }

    }
}

class Client {
    constructor(name, contact) {
        this.name = name;
        this.contact = contact;
    }
}

class IndividualClient extends Client {
    constructor(name, contact) {
        super(name, contact);
        this.type = 'indvidual';
    }
}

class CorporateClient extends Client {
    constructor(name, contact) {
        super(name, contact);
        this.type = 'corporate';
    }
}

class Booking {
    constructor(event, client, bookingDate) {
        this.event = event;
        this.client = client;
        this.bookingDate = bookingDate;
    }
}

let we = new WeddingEvent({bride: 'Maria', groom: ' Ion'}, new Date(2024, 9, 27), 19, 6);
let ce = new ConferenceEvent('AI for streamlined business proccesses', new Date(2024, 10, 10), 9, 8);
let jobFair = new ConferenceEvent(' IT Job Fair', new Date(2024, 10, 10), 9, 8);

let bride = new IndividualClient('Maria', '074532145');
let corp = new CorporateClient('Accme Inc', 'acme.inc@outlook.com');

let evSalon = new EventSalon('Calea Plevnei', 500);
evSalon.makeBooking(we, bride, new Date(2024, 3, 4));
evSalon.makeBooking(ce, corp, new Date(2024, 3, 4 ));
evSalon.makeBooking(ce, jobFair, new Date(2024, 5, 26));
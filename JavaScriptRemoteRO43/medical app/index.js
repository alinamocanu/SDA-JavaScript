/*
Pacient - firstName, lastName, email, age
Doctor - firstName, lastName, email, age, fieldOfExpertise
Hospital - name, address, doctors
Consultation - pacient, doctor, date, time, hospital, diagnosis, prescription
Prescription - meds, antibiotics
 */

function Pacient(firstName, lastName, email, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;

    this.info = function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

function Doctor(firstName, lastName, email, age, fieldOfExpertise) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.fieldOfExpertise = fieldOfExpertise;
}

function Hospital(name, address) {
    this.name = name;
    this.doctors = [];
    let addr = address;
    this.getAddress = function() {
        return addr;
    }

    // definim o metoda care adauga un medic primit ca parametru
    this.hireDoctor = function(doctor) {
        this.doctors.push(doctor);
    }

    // definim o metoda care returneaza medicii cu o anumita specializare
    this.getDoctorsByFieldOfExpertise = function(expertise) { // filtering
        let result = [];
        for (let i = 0; i < this.doctors.length; i++){
            if(this.doctors[i].fieldOfExpertise === expertise) {
                result.push(this.doctors[i]);
            }
        }
        return result;
    }

    // definim o metoda care afiseaza toate sectiile spitalului in care profeseaza medici
    this.getAllFieldsOfExpertise = function() {
        let result = [];
        for(let i = 0; i < this.doctors.length; i++) {
            if (this.doctors[i].fieldOfExpertise && !result.includes(this.doctors[i].fieldOfExpertise)) {
                result.push(this.doctors[i].fieldOfExpertise);
            }
        }

        console.log(result);
    }

    // definim o metoda care afiseaza toate sectiile spitalului in care profeseaza medici
    this.getAllFieldsOfExpertiseSet = function() {
        let result = new Set();
        for(let i = 0; i < this.doctors.length; i++) {
            if (this.doctors[i].fieldOfExpertise) {
                result.add(this.doctors[i].fieldOfExpertise);
            }
        }

        console.log(result);
    }
}

function Consultation( pacient, doctor, date, time, hospital, diagnosis, prescription) {
    this.pacient = pacient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
    this.hospital = hospital;
    this.diagnosis = diagnosis;
    this.prescription = prescription;

    // definim o metoda pentru reprogramarea consultatiei
    this.rescheduleConsultation = function(date, time) {
        this.date = date;
        this.time = time;
    }
}

function Prescription() {
    this.meds = [];
    this.antibiotics = ['Augmentin', 'Amoxicilina', 'Ampicilina'];

    this.addMed = function(med) {
        this.meds.push(med);

    }


    // definim o functie care afiseaza un warning daca reteta curenta contine antibiotice
    this.printDisclaimer = function() {
        for(let i = 0; i < this.meds.length; i++) {
            if (this.antibiotics.includes(this.meds[i])) {
                console.warn('This prescription contains antibiotics.It is advised to prescribe probiotics as well');
                break;
            }
        }
    }

}

let h = new Hospital('Colentina', 'Soseaua Stefan cel Mare');
//console.log(h.getAddress());

let p = new Pacient('Ion', 'Popescu', 'ion.popescu@outlook.com', 34);
//p.info();

let d1 = new Doctor('Ioan', 'Stan', 'ioan.stan@outlook.com', 56, 'cardiology');
let d2 = new Doctor('Sorin', 'Stanciu', 'sorin.stanciu@outlook.com', 45, 'cardiology');
let d3 = new Doctor('Diana', 'Zavoianu', 'diana.zavoianu@outlook.com', 39, 'rheumatology');
let d4 = new Doctor('Ramona', 'Stan', 'ramona.stan@outlook.com', 60, 'ophtalmology');

h.hireDoctor(d1);
h.hireDoctor(d2);
h.hireDoctor(d3);
h.hireDoctor(d4);

console.log(h);
console.log(h.getDoctorsByFieldOfExpertise('cardiology'));
h.getAllFieldsOfExpertise();
h.getAllFieldsOfExpertiseSet();

// set collection
let s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(3);
console.log(s);

let prescription = new Prescription();
prescription.addMed('Ibuprofen');
prescription.addMed('Vitamina C');
prescription.addMed('Amoxicilina');
prescription.printDisclaimer();

let c = new Consultation(p, d1, new Date(2024, 7, 18), 10, h, 'Flu', prescription);
console.log(c.date, c.time);
c.rescheduleConsultation(new Date(2024, 7, 18), 11);
console.log(c.date, c.time);
//---------------------------------------------------------------------------------------
// what is prototype chain?
// Dreptunghi -> Patrulater -> FormaGeometrica -> Object.protoype -> null
function FormaGeometrica() {

}

function Patrulater() {

}

function Dreptunghi() {

}

Object.setPrototypeOf(Dreptunghi.prototype, Patrulater.prototype);
Object.setPrototypeOf(Patrulater.prototype, FormaGeometrica.prototype);

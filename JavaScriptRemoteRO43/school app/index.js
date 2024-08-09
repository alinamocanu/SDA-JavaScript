/*
Student - firstName, lastName, age
Teacher - firstName, lastName, age,... */

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.info = function() {
        console.log(`${this.firstName} ${this.lastName} has ${this.age} years old`);
    }
}

function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);//super(params...);

    /*[{
        mark
        subject
        date
    }] */
    this.marks = []; 
    this.gradeStudent = function(grade, subject, date) {
        this.marks.push({
            mark: grade,
            subject: subject,
            date: date
        });
    }

    this.info = function() {
        console.log(`${this.firstName} ${this.lastName} is one of the school's students`)
    }

    this.getGradesForSubject = function(subject) {
        let result = this.marks.filter(item => item.subject === subject);
        console.log(`${this.firstName} ${this.lastName} has the following grades`)
        result.forEach(item => {
            console.log(`Mark: ${item.mark} Date: ${item.date}`);
        });
    }

    this.calculateSemesterAverage = function(subject, startDate, endDate) {
        // get grades for subject that are between startDate and endDate
        let result = this.marks.filter(item => item.subject === subject
            && item.date > startDate && item.date < endDate);

        if (!result) {
            console.log('Student has no grades for ${subject}');
            return 0;
        }
        // 10, 7, 9, ...
        let grades = result.map(item => item.mark);
       /* let sum = 0;
        for (let i of grades) {
            sum += i;
        }*/

       let average = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/grades.length;
       return Math.ceil(average);
    }
}

function Teacher(fieldOfExpertise, experience, firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.experience = experience;
    this.fieldOfExpertise = fieldOfExpertise;

    this.info = function() {
        console.log(`${this.firstName} ${this.lastName} has ${this.experience} years in teaching ${this.fieldOfExpertise}`);
    }

}

function Subject(name) {
    this.name = name;
}

function SchoolClass(name, teacher) {
    this.name = name;
    this.teacher = teacher;
    this.students = [];
    this.maxCapacity = 27;

    this.add = function(student) {
        if(this.countStudents()) {
            console.log('Class has already reached max capacity. Please reassign student!');
        } else {
            this.students.push(student);
        }
       
    }

    this.countStudents = function() {
        return this.students.length + 1 > this.maxCapacity;
    }
   // print the students that obtained an average above 5 for a given subject
    this.getStudentsThatPassed = function(subject, startDate, endDate) {
        for (let i in this.students) { // i -> [0, 1, ..., this.students.length-1]
            // calculate average for current student
            let average = this.students[i].calculateSemesterAverage(subject, startDate, endDate);

            if(!average) {
                console.log("Student has no grades"); 
                continue;
            }

            if (average >= 5) {
                console.log(`${this.students[i].firstName} ${this.students[i].lastName} has an average above 5`);
            } else {
                console.log((`${this.students[i].firstName} ${this.students[i].lastName} has an average below 5`));
            }

        }
    }
}

function Timetable(subject, teacher, className, date, time, duration) {
    this.subject = subject;
    this.teacher = teacher;
    this.className = className;
    this.date = date;
    this.time = time;
    this.duration = duration;

    this.findoverlappingCourses = function(course) {
        // getTime() converts to milliseconds
        if (this.date.getTime() === course.date.getTime() && this.time <= course.time &&
        course.time < ( this.time + this.duration)) {
            console.log('Please reschedule one of courses');
        } else {
            console.log('Timetable has no conflicts');
        }
    }

}

Object.setPrototypeOf(Student.prototype, Person.prototype); // extends Person
Object.setPrototypeOf(Teacher.prototype, Person.prototype); // extends Person

let stud1 = new Student('Ion', 'Popescu', 16);
stud1.gradeStudent(10, 'Math', new Date(2024, 3, 4));
stud1.gradeStudent(7, 'Math', new Date(2024, 4, 4));
stud1.gradeStudent(9, 'Math', new Date(2024, 5, 25));
stud1.gradeStudent(10, 'Biology', new Date(2024, 5, 25));
stud1.info();
stud1.getGradesForSubject('Math');

let stud2 = new Student('Mihai', 'Stan', 16);
stud2.gradeStudent(4, "Math", new Date(2024, 5, 17));
stud2.gradeStudent(3, 'Math', new Date(2024, 4, 24));
stud2.gradeStudent(5,'Math', new Date(2024, 3, 4))
let stud3 = new Student('Ramona', 'Simion', 16);

console.log(stud1.calculateSemesterAverage('Math', new Date(2024, 2, 9), new Date(2024, 6, 15)));
//console.log(stud1);

/*let sampleString = 'test';
console.log(typeof(sampleString));
let stringObj = new String('test');
console.log(typeof(stringObj));
console.log(stringObj);
console.log(sampleString == stringObj);
console.log(sampleString === stringObj);*/

let teacher = new Teacher('Math & Physics', 10, 'Andreea', 'Ionescu', 35);
let cls = new SchoolClass('10E', teacher);
cls.add(stud1);
cls.add(stud2);
cls.add(stud3);
console.log(cls);
cls.getStudentsThatPassed('Math',  new Date(2024, 2, 9), new Date(2024, 6, 15));

let tt = new Timetable('Math', teacher, cls, new Date(2024, 7, 9), 10, 2);

let tt1 = new Timetable('Biology', teacher, cls, new Date(2024, 7, 9), 11, 2);

let tt2 = new Timetable('Chemistry', teacher, cls, new Date(2024, 7, 9), 12, 2);

tt.findoverlappingCourses(tt1);
tt.findoverlappingCourses(tt2);
class Person {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    name(){
        return `${this.firstname} ${this.lastname}`;
    }

    whoAreYou(){
        return `Hi I am ${this.name()}`;
    }
}

let adarsh=new Person("Adarsh","Dhital");
console.log(adarsh.whoAreYou());
//Hi I am Adarsh Dhital

console.log('');
console.log('Inheritance');

class Student extends Person{

    course:string;

    constructor(firstname:string,lastname:string,course:string){
        super(firstname,lastname);
        this.course=course;
    }
    override whoAreYou(){
        return `${super.whoAreYou()} and I am studying ${this.course}`
    }
}

let adarshstudent=new Student("Adarsh","Dhital","Angular");
console.log(adarshstudent.whoAreYou());


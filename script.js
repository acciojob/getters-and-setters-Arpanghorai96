//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get name(){
		return this._name;
	}
	set name(value){
		 this._name=value;
	}
	get age(){
		return this._age;
	}
	set age(value){
		 this._age=value;
	}
}

class Student extends Person {
	constructor(name){
		super(name);
	}
	study(){
		console.log(`${name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name){
		super(name);
	}
	teach(){
		console.log(`${name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

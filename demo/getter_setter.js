class People {
	constructor(fullName) {
		this.fullName = fullName
	}

	sayName() {
		console.log(`My name is ${this.firstName} ${this.lastName}`)
	}

	get firstName() {
		return this.fullName.split(/\s/)[0]
	}

	get lastName(){
		return this.fullName.split(/\s/)[1]
	}

	set lastName(str){
		this.fullName = `${this.firstName} ${str}`
	}
}

let colinfan = new People('Coiln Fan');
colinfan.sayName()
colinfan.lastName = 'Chan';
colinfan.sayName()

console.log('===================')

let people = {
	fullName: 'Tim Chan',

	sayName(){
		return `My name is ${this.fullName}`
	},

	get firstName(){
		return this.fullName.split(/\s/)[0]
	},

	get lastName(){
		return this.fullName.split(/\s/)[1]
	},

	set lastName(str){
		this.fullName = `${this.firstName} ${str}`
	}
}
console.log(people.sayName())
people.lastName = 'Chou'
console.log(people.sayName())
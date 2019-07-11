// Dinh nghia object 
let student = {
	code: 113,
	name: 'NVA',
	age: 20,
	email: 'test@gmail.com',
	add: 'Ha Noi',
	single: 0,
	learning: function(subject){
		//return "toi dang hoc " + subject;
		return `Toi dang hoc ${subject}`;
		// teamplate string ES6
		// ES6 phien ban cua JS
	},
	playGame: function(name = 'AOE'){
		return `Toi dang choi game ${name} voi ban toi`;
	}
};

let animals = {
	cats: {
		name: 'Tom',
		age: 2,
		works: {
			name: 'AAAA',
			money: 1000
		}
	},
	dogs: {
		name: 'OOOO',
		age: 3
	}
};
// truy cap vao 1 phan tu nam trong object
// 1 nameObject[nameKey];
let address = student['add'];
console.log(address);
// 2 nameObject.nameKey;
let email = student.email;
console.log(email);
console.log(animals.cats.works.money);
console.log(animals['cats']['works']['money']);
// truy cap vao method trong object
console.log(student.learning('Javascript'));


// truy cap vao tat ca cac phan tu trong object
let cars = {
	name: 'BMW',
	weight: 100,
	color: 'blue',
	money: 100000
}

for(let i in cars) {
	console.log(i, cars[i]);
}











// dinh nghia mang trong js
// 1 - mang 1 chieu
let friuts = new Array('cam','quyt','mit','dua',1,2,3,4);
let numbers = [1,2,3,5,6,7,8,9];

// 2 - mang da chieu
let myFruits = [['cam','quyt','mit'], 1,2,3, [10,20]];
// kiem tra so luong phan tu cua mang

let countElements = myFruits.length;
console.log(countElements);

// truy cap vao 1 gia tri nam trong mang
// cu phap: nameArray[key] : key = vi tri phan tu nam trong mang, vi tri cua phan tu nam trong mang luon luon bat dau tu 0

// in ra man hinh console tu 'mit' cua mang friuts
console.log(friuts[2]);
// in ra man hinh console tu 'mit' cua mang myFruits
console.log(myFruits);
console.log(myFruits[0][2]);

// duyet mang trong js
let myNumbers = [1,2,3,4,5,6,7,8,9,10];
let count = myNumbers.length;
for(let i = 0; i < count; i++){
	//console.log(myNumbers[i]);
}

// a.forEach(function(){

// });

myNumbers.forEach(function(value, key, array){
	// callback function
	// value: gia tri cua mang ban dau
	// key: vi tri cua cac phan tu trong mang
	// array : mang ban dau
	//console.log(value, key);
});

for(let j of myNumbers){
	console.log(myNumbers[j]);
}

// cho mang
let arr = [1,2,3,4,5,6,7,8,9];
// co bao nhieu so le va hien thi tat cac so do ra - viet ham xu ly
function kiemTraSoLe(array){
	let count = 0;
	let res = '';
	// xu ly logic va gan ket qua va kq
	for(let i = 0; i< array.length; i++){
		if(array[i] % 2 != 0){
			count++;
			res += (res == '') ? array[i] : ',' +  array[i];
		}
	}
	return [count, res];
}

let dt = kiemTraSoLe(arr);
console.log(dt);









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
	// xu ly logic va gan ket qua vao kq
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

/******** Cac phuong thuc lam viec voi Array ********/
// 1 - push : them phan tu vao cuoi mang
let arrNumber = [1,2,3,4,5,6,7,8,9];
arrNumber.push(100);
console.log(arrNumber);

// 2 - pop : xoa phan tu cuoi cung cua mang - tra ve chinh phan tu do
let lastElement = arrNumber.pop();
console.log(arrNumber, lastElement);

//3 - unshift : them(chen) phan tu vao vi tri dau tien cua mang
arrNumber.unshift(lastElement);

//4 - shift : xoa phan tu khoi vi tri dau tien - tra ve chinh phan tu do
let fisrtElement = arrNumber.shift();
console.log(arrNumber, fisrtElement);

//5 - tim kiem phan tu trong mang
let pos = arrNumber.indexOf(8);
let pos2 = arrNumber.lastIndexOf(8);

console.log(pos, pos2);
// ket la -1 : khong tim thay phan tu nam trong mang
// ket qua khac -1 thi chinh la vi tri cua phan tu nam trong mang ( luu y vi tri dem ti 0)

//6 - kiem tra 1 bien co phai la mang ko?
if(Array.isArray(arrNumber)){
	console.log('day dung la mang');
} else {
	console.log('day ko phai la mang');
}

// 7 - sap xep mang
let sortArray = [100,4,5,6,1,2,9,200,8,7,3];
// su dung ham co san
/*
sortArray.sort(function(a,b){
	return b-a;
});
console.log(sortArray);
*/
// tu viet ham sap xep mang trong js
let sapXepMang = function(arr){
	let count = arr.length;
	for(let i = 0; i < count - 1; i++){
		for(let j=i+1; j < count; j++){
			if(arr[i] > arr[j]){
				let tg = arr[i];
				arr[i] = arr[j];
				arr[j] = tg;
			}
		}
	}
	return arr;
}
let sapXep = sapXepMang(sortArray);
console.log(sapXep);

let myNumbers1 = [2,5,7,9,11,17,13,6,8];
// viet ham  tra ve mot mang chua toan so nguyen to;
let kiemTraSoNT = function(a){
	if(a <= 0 || a == 1){
		return false;
	}
	if(a == 2){
		return true;
	}

	let flag = true;
	for(let i = 2; i <= Math.sqrt(a); i++){
		if(a % i == 0){
			//return false;
			flag = false;
			break;
		} 
	}
	return flag;
}
function layRaSoNguyenTo(arr){
	let kq = [];
	for(let i= 0; i < arr.length; i++){
		if(kiemTraSoNT(arr[i])){
			kq.push(arr[i]);
		}
	}
	return kq;
}
console.log(layRaSoNguyenTo(myNumbers1));

































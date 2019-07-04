// cu phap comment tren 1 dong cua js
/*
cu phap comment
tren nhieu dong 
cua js
 */
// khi gap nhung ma lenh nay thi trinh thong dich se bo qua va khong thuc thi

//alert('Hello word');
//var name = prompt('Moi nhap ho ten');
//console.log(name);
// su dung debug tool cua trinh duyet de xem du lieu thong qua ham console.log();
// tren windown bam phim f12 va chon tab console o debug tool de xem ket qua va xem thong bao loi

/******** Cac kieu du lieu trong js **************/
// 1 -number
var number = 10;
// bien chi nhan kieu du kieu khi dc gan gia tri - con khong se la undefined
var number2;
// kiem tra kieu du lieu

console.log(typeof(number));
console.log(typeof(number2));
// 2 - string
var string = 'Java1905E';
console.log(typeof(string));
var a = 100;
var b = '100';
var c = a+b;
console.log(c);
console.log(typeof(c));

//3 - boolean
var check = true;
console.log(typeof(check));

var check2 = false;
if(check2 === ''){
	console.log('Yes');
} else {
	console.log('No');
}

var test = null;
console.log(typeof(test));

var myName = 'A';
myName = 'B';
// var MyName;
// var my_name;
// khong bat dau bang so
// khong trung voi cac tu khoa trong lap trinh(if..else)
// trong js phan biet biet chu hoa va chu thuong
//var name;
//var Name;

let n1 = 10;
//let n1 = 20; loi - khong duoc phep dinh nghia lai bang tu khoa let
var n2 = 20;
var n2 = 30; // van dung - override 
// tu khoa var ton tai con tro this tro vao chinh bien do
// tu khoa let ko co
// tu khoa var thi bien co tam hoat dong gan so voi ten ham
// tu khoa let co tam hoat dong gan voi cap ngoac nhon bao lay do

const pi = 3.14;
// hang so trong js - gia tri cua no ko thay doi trong suot qua trinh thuc thi ma lenh js
// pi = 3.15; // bao loi
console.log(pi);

/************* Bieu thuc dieu kien *****************/

let m = 100;
if(m > 200){
	console.log('Y');
} else {
	console.log('N');
}

let k = 100;
if(k == 80){
	console.log('Y1');
} else if(k == 90){
	console.log('Y2');
} else if (k == 100) {
	console.log('Y3');
} else if( k == 200){
	console.log('Y4');
} 
else {
	console.log('N');
}

switch (k) {
	case 80:
		console.log('Y1');
		break;
	case 90:
		console.log('Y2');
		break;
	case 100:
		console.log('Y3');
		break;
	case 200:
		console.log('Y4');
		break;
	default:
		console.log('N');
		break;
}

for(let i = 0; i <= 100; i++){
	console.log(i);
}

let j = 10;
while (j < 100) {
	console.log(j);
	j++;
}

let u = 10;
do {
	console.log(u);
	u++;
} while(u < 5);

let t = 10;
let s = 20;

t =  (s%t > t%s) ? s : (t-s < s/t ? t : s);
console.log(t);
// (DK) ? A : B
if(s%t > t%s){
	t = s;
} else {
	if(t-s < s/t){
		t = t;
	} else {
		t = s;
	}
}

let v = 9;
let z = 10;
let f = (++v) - (z++) + (v--) + (++z) - (--v) + (--z);
//        10  -   10  +  9    +   12  -   7   + 11
console.log(f);
// 25










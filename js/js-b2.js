// Dinh nghia ham trong javascript
// 1: cu phap : function + nameFunction(param1, param2,...) {}
function myFunction(){
	// logic xu ly cua ham
	console.log('This is function');
}
// 2: su dung ham
// cu phap : nameFuntion()
// (): thuc thi ham (run function)
myFunction();

function sumNumber(n, m = 30){
	// tham so truyen vao ham khong can tu khoa var, let, const dung dang truoc
	return n + m;
	// return : tra ket qua ve cho ten ham va dong thoi thoat khoi ham (nhung cau lenh ben duoi return se ko dc thuc thi)
}

let result = sumNumber(10, 20);
console.log(result);
// NaN : not a number
// viet ham kiem tra xem tu 1 toi 100 co bao nhieu so la BSC cua 2 va 3
function timBoiSoChung(k,v,n,m){
	let count = 0;
	let test = n*m;
	for(let i = k; i <= v; i++) {
		if(i % test == 0){
			count++;
		}
	}
	return count;
}

let kq = timBoiSoChung(1,500,4,6);
console.log('Co ' + kq + ' so la BSC cua 4 va 6');

/**************************************************/

let kiemTraChanLe = function(number){
	if(number % 2 == 0){
		return true;
	} 
	return false;
}
console.log(typeof(kiemTraChanLe));
// kieu du lieu function

let kq2 = kiemTraChanLe(10);
if(kq2){
	console.log('la so chan');
} else {
	console.log('la so le');
}
// viet ham kiem tra so nguyen to
// su dung ham so ham
// Math.sqrt();
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

let chkNumber = 11;
let kq3 = kiemTraSoNT(chkNumber);
if(kq3){
	console.log(chkNumber + 'la so NT');
} else {
	console.log(chkNumber + 'ko la so NT');
}

// viet ham liet ke tat ca cac so nguyen to tu 1 - 300;
let timSoNguyenTo = function(){
	let res = '';
	for(let i = 1; i <= 300; i++) {
		if(kiemTraSoNT(i)){
			res += (res == '') ? i : ',' + i;
		}
	}
	return res;	
}
let kq4 = timSoNguyenTo();
console.log(kq4);
// viet ham giai PTBH (tu lam)

/************* Doi tuong NUMBER trong JS *******************/
 let n1 =  prompt('moi nhap so a');
 // chuyen ve kieu so nguyen
 n1 = Number.parseInt(n1);

 let n2 = prompt('moi nhap so b');
 n2 = Number.parseInt(n2);

 console.log(n1+n2);
 //prompt : mac dinh tra ve kieu string
  let PI = '3.14';
  // chuyen ve kieu so thuc
  PI = Number.parseFloat(PI);

  // kiem tra lai xe co phai la so nguyen ko
  if(Number.isInteger(n1)){
  	console.log('Yes')
  } else {
  	console.log('No');
  }

  let m1 = '100';
  m1 = eval(m1); // chuyen chuoi ve so

  if(Number.isNaN(0/0)){
  	console.log('Not a number')
  } else {
  	console.log('number');
  }








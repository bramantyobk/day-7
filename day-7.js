// import { API } from "./url.js";

// function login(username, login) {
// 	console.log(`${API.BASE_URL}${API.AUTH.LOGIN}`);
// }

// login("lala", 123);

// =======================================
// let number = [1, 2, 3];
// let newNumber = [4, 5, 6];

// * Manual menggabungkan array
// for(let i=0; i<newNumber.length; i++){
//   number.push(newNumber [i]);
// }
// console.log(number);

// * spread operator untuk menggabungkan array
// const result = [...number, ...newNumber];
// console.log(result);

//======================================
// * rekursif
function hitung(x, n) {
	if (n === 1) {
		return x;
	} else {
		return x * hitung(x, n - 1);
	}
}

console.log(hitung(3, 4)); //81

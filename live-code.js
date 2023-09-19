const leapYear = (year) => {
	return year % 4 === 0 || year % 100 === 0 || year % 400 === 0
		? `${year} adalah tahun kabisat`
		: `${year} bukan tahun kabisat`;
};
console.log("========= Tugas 1 ===========");
console.log(leapYear(1992));
console.log(leapYear(1996));
console.log(leapYear(2004));
console.log(leapYear(2018));
console.log(leapYear(2023));
console.log("\n");

const hapusSimbol = (str) => {
	let kata = "";
	let buang = "";
	for (let i = 0; i < str.length; i++) {
		if (
			str[i] == "%" ||
			str[i] == "$" ||
			str[i] == "@" ||
			str[i] == " " ||
			str[i] == "!" ||
			str[i] == "~" ||
			str[i] == "#" ||
			str[i] == "+" ||
			str[i] == "-" ||
			str[i] == "*" ||
			str[i] == "="
		) {
			buang += str[i];
		} else {
			kata += str[i];
		}
	}
	return kata;
};

// TEST CASE
console.log("========= Tugas 2 ===========");
console.log(hapusSimbol("test%$4aa")); // test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); // makan
console.log(hapusSimbol("coding")); // coding
console.log(hapusSimbol("1+3-5*2=100")); // 1352100
console.log("\n");

const MajoritySweeper = (arr) => {
	let frequent = {};
	let maxFreq = 0;
	let mostFrequent = 0;

	for (let i = 0; i < arr.length; i++) {
		let indexValue = arr[i];

		// * mendeklarasikan key indexValue pada objek frequent jika belum dideklarasikan
		if (!frequent[indexValue]) frequent[indexValue] = 0;

		// * menghitung frekuensi kemunculan indexValue
		frequent[indexValue] += 1;

		// * menentukan indexValue yang paling banyak muncul
		if (frequent[indexValue] > maxFreq) {
			maxFreq = frequent[indexValue];
			mostFrequent = indexValue;
		}
	}

	// * menghilangkan nilai yang paling banyak muncul
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== mostFrequent) {
			newArr.push(arr[i]);
		}
	}

	return newArr;
};
// TEST CASE
console.log("========= Tugas 3 ===========");
console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])); // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])); // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])); // [ 1, 1, 1, 2, 2 ]
console.log("\n");

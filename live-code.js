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
console.log("========= Tugas 1 ===========");
console.log(hapusSimbol("test%$4aa")); // test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); // makan
console.log(hapusSimbol("coding")); // coding
console.log(hapusSimbol("1+3-5*2=100")); // 1352100
console.log("\n");

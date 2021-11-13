
// let prac = [3, 5, -4, 8, 11, 1, -1, 6];
// let targetSum = 10;

const { inflate } = require("zlib");



// function takeTwo(arr, num) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             let newArr = [];
//             if(arr[i] + arr[j] === num && arr[i] !== arr[j]) {
//                 newArr.push(arr[i]);
//                 newArr.push(arr[j]);
//                 return newArr;
//             }
//         }
//     }
// }

// console.log(takeTwo([3, 5, -4, 8, 11, 1, -1, 6], 10));

// let encoder = [];
// let count = 0;
// function encoding(str) {
//     for(let i = 0; i < str.length; i++) {
//         while(str[i] === str[i + 1]) {
//             encoder.push(str[i]);
//             count += 1;
//             i++;
//         }
//         encoder.push(count);
//         console.log(encoder.join(''));
//     }
// }

// console.log(encoding("AAAAAAAAAAAABBCCCCDD"));


// function stringRunLengthEncoder(str) {
//     let encodedStr = "";
//     let currentCharacter = null;
//     let currentCharacterCount = 0;
//     let index = 0;
//     while (index < str.length) {
//         currentCharacter = str.charAt(index);
//         currentCharacterCount = 0;
//         while (currentCharacter === str.charAt(index) && currentCharacterCount < 10) {
//             currentCharacterCount++;
//             index++;
//         }
//         encodedStr += `${currentCharacterCount}${currentCharacter}`;
//     }
//     return encodedStr;
// }

// console.log(stringRunLengthEncoder("HELLLLLLOOO"));



// function minMax(arr) {
// 	arr.sort((a, b) => {
//         return a - b;
// 	})
//     // console.log(arr);
// 	let numOne = arr[0];
// 	let numTwo = arr[arr.length -1];
// 	return [numOne, numTwo];
// }

// console.log(minMax([14, 35, 6, 1, 34, 54]));
// console.log(minMax([1.346, 1.6532, 1.8734, 1.8723]));


// function timeForMilkAndCookies(date) {
// 	let chrisEve = new Date(2021, 11, 24);
// 	if(date.getMonth() === chrisEve.getMonth() && date.getDate() === chrisEve.getDate()) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))
// console.log(timeForMilkAndCookies(new Date(3000, 11, 24)))
// console.log(timeForMilkAndCookies(new Date(2154, 11, 11)))
// console.log(timeForMilkAndCookies(new Date(2010, 11, 2)))
// console.log(timeForMilkAndCookies(new Date(1980, 9, 24)))



// function check(str) {
//     let i = 0;
//     let newStr = str.split('');
//     let count = 0;
//     let currChar = newStr[i];
//     while(i < newStr.length) {
//         while(currChar === newStr[i]) {
//             i++;
//         }
//         console.log(newStr[i]);
//         return i;
//     }
// }

// console.log(check("abcdcaf"));
// console.log(check("ffffaacddddm"));
// console.log(check("racecar"));

// function cons(arr) {
// 	let newArr = arr.sort((a, b) => a - b);
//     console.log(newArr)
// 	for(let i = 0; i < newArr.length; i++)
// 	if(newArr[i] - newArr[i + 1] > 0 || newArr[i] - newArr[i + 1] < 0 ) {
// 		return true;
// 	} else if(newArr[i] - newArr[i + 1] === 0) {
// 		return false;
// 	}
// }

// function cons(arr) {
// 	let newArr = arr.sort((a, b) => a - b);
// 	let i = 0;
// 	while(newArr[i] - newArr[i + 1] === 0) {
// 		i++;
// 	}
// }


// console.log(cons([5, 1, 4, 3, 2]));
// console.log(cons([55, 59, 58, 56, 57]));
// console.log(cons([-3, -2, -1, 1, 0]));
// console.log(cons([5, 1, 4, 3, 2, 8]));
// console.log(cons([5, 6, 7, 8, 9, 9]));
// console.log(cons([5, 1, 4, 3, 2]));

// let logNum = Math.log10(-222);
// console.log(logNum);

// console.log(Math.floor(Math.log10(-222 * -1) + 1))


function num_of_digits(num) {
	if(num === 0) {
		return 1;	
	} else if(num < 0) {
		return Math.floor(Math.log10(num * -1) + 1);
	} else if(num > 1) {
		return Math.floor(Math.log10(num) + 1);
	}
}

console.log(num_of_digits(-222));
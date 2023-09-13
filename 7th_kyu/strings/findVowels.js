/* 
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)


https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
*/

// 7/5/23
function vowelIndices(word) {
	// will need counter
	// will need a nested for loop
	// will need an empty array
	const vowArr = ["a", "e", "i", "o", "u", "y"];
	const loWord = word.toLowerCase().split("");
	const empArr = [];
	for (let i = 0; i < loWord.length; i++) {
		for (let j = 0; j < vowArr.length; j++) {
			if (loWord[i] === vowArr[j]) {
				empArr.push(1 + i);
			}
		}
	}
	console.log(empArr);
	return empArr;
}

vowelIndices("Super");

// 5/9/23

// function vowelIndices(word){
//     //your code here
//     const vowArr = ['a', 'e', 'i', 'o', 'u', 'y'];
//     let empArr = [];
//     const loWord = word.toLowerCase().split('');
//     console.log(loWord);
//     for (let i = 0; i < loWord.length; i++) {
//         for (let j = 0; j < vowArr.length; j++) {
//             if (loWord[i] === vowArr[j]) {
//                 console.log('Match');
//                  // I need i (iterator) of word array, not vowel array
//                 empArr.push(1 + i);
//             }
//         }
//     }
//     console.log(empArr);
//     return empArr;
//   }

// vowelIndices('Super');

// 4/23/23
// function vowelIndices(word){
//   //your code here
//   const vowArr = ['a', 'e', 'i', 'o', 'u', 'y'];
//   const loWord = word.toLowerCase().split('');
//   let empArr = [];
//   for (let i = 0; i < loWord.length; i++) {
//     for (let j = 0; j < vowArr.length; j++) {
//       if (loWord[i] === vowArr[j]) {
//         // I need i (iterator) of word array, not vowel array
//         empArr.push(i + 1);
//       }
//     }
//   }
//   console.log(empArr);
//   return empArr

// }

// vowelIndices('Super');

// 4/10/23
// function vowelIndices(word){
//     //your code here
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
//     let empArr = [];
//     const loWord = word.toLowerCase().split('');

//     for (let i = 0; i < loWord.length; i++) {
//       for (let j = 0; j < vowels.length; j++) {
//         if (vowels[j] === loWord[i]) {
//           empArr.push(i + 1)
//         }
//       }
//     }
//     return empArr
//   }

// vowelIndices('Super');

// function vowelIndices(word){
//     const vowArr = ['a', 'e', 'i', 'o', 'u', 'y'];
//     let empArr = [];
//     const loWord = word.toLowerCase().split('');

//     //   // I need to make the outer for loop of the parameter Word first. Reason...I am using the Word param from jump.
//     for (let i = 0; i < loWord.length; i++) {
//         for (let j = o; j < vowArr.length; j++) {
//             if (vowArr[j] === loWord[i]) {
//                 empArr.push(i + 1);
//             }
//         }
//     }
//     console.log(empArr);

//   }

// vowelIndices

// 3/29/2023

// 10/27/2022

// function vowelIndices(word) {
//   const vowArr = ['a', 'e', 'i', 'o', 'u', 'y'];
//   let empArr = [];
//   const loWord = word.toLowerCase().split('');

//   // I need to make the outer for loop of the parameter Word first. Reason...I am using the Word param from jump.
//   for (let i = 0; i < loWord.length; i++) {
//     for (let j = 0; j < vowArr.length; j++) {
//       if (vowArr[j] === loWord[i]) {
//         empArr.push(i + 1);
//       }
//     }
//   }
//   console.log(empArr);

// }

// vowelIndices('Super');

// 10/19/2022
// function vowelIndices(word){
//   //your code here
//   const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
//   const lowerCase = word.toLowerCase().split('');
//   // for loop through vowels and word and push vowels into empty array
//   let empArr = [];
//   for (let i = 0; i < lowerCase.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (lowerCase[i] === vowels[j]) {
//         empArr.push(i + 1);
//       }

//     }console.log(word);
//   }

//   return empArr;
// }

// vowelIndices('Super');

// 5/24/22
// function vowelIndices(word){
//     // two if statements
//     // array with vowels
//     // for loop
//     const vowArr = ['a', 'e', 'i', 'o', 'u', 'y'];
//     const lowWord = word.toLowerCase().split('');
//     let empArr = [];
//     for (let i = 0; i < word.length; i++) {
//         for (let j = 0; j < vowArr.length; j++) {
//             if (lowWord[i] === vowArr[j]) {
//                 empArr.push(i + 1);
//                 console.log(empArr)
//             }
//         }
//     }
//     console.log(empArr)
//     return empArr;
//   }

// vowelIndices('super');

// 5/2/22
// function vowelIndices(word){
//     // two for loops
//     // if statement
//     // array with vowels
//     // empty array
//     let empArr = [];
//     let vowArr = ['a', 'e', 'i', 'o', 'u', 'y'];
//     const lowWord = word.toLowerCase().split('');

//     for (let i = 0; i < lowWord.length; i++) {
//         for (let j = 0; j < vowArr.length; j++) {
//             if (lowWord[i] === vowArr[j]) {
//                 // I want the index of the original word ex. 'Super'
//                 empArr.push(i + 1);
//             }
//         }
//     }
//     console.log(empArr)
//     return empArr;
// }

// vowelIndices('Super');

// 4/25/22
// function vowelIndices(word){
//     //your code here
//     // for loop
//     // if statement
//     // empty
//     let newVow = [];
//     let vowArr = ['a', 'e', 'i', 'o', 'u', 'y'];
//     let wordArr = word.toLowerCase().split('');

//     for (let i = 0; i < wordArr.length; i++) {
//         // console.log(wordArr[i])
//         for (let j = 0; j < vowArr.length; j++) {
//             if (wordArr[i] === vowArr[j]) {
//                 // console.log(wordArr[i])
//                 newVow.push(i + 1);
//             }
//         }
//     }

//     return newVow;

// }

// console.log(vowelIndices('Apple'));

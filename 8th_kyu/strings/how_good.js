/* 

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

*/
























// 7/3/2022
// function betterThanAverage(classPoints, yourPoints) {
//   // Maybe I can use reduce method to get average score
//   // if statement or tenary operator maybe
//   const classAvg = classPoints.reduce((preVal, currVal) => preVal + currVal, 0) / classPoints.length;
//   console.log(classAvg);
//   const myCompAvg = (yourPoints > classAvg) ? true : false;
//   return myCompAvg;
// }

// console.log(betterThanAverage([56, 93, 85, 97, 82]))
// console.log(betterThanAverage([56, 93, 85, 97, 82], 93));

// 4/15/2022
// function betterThanAverage(classPoints, yourPoints) {
//     // I needed to create placeholder value of 0 first to add.
//     let classAvg = 0;
//     // Calculate Average by using for loop and adding up all values then dividing by total amount of points/grades. n = num.
//     // Then divde sum of numbers by array.length
//     // Or I could the use the reduce array method. I'll try that next time.
//     for (let i = 0; i < classPoints.length; i++) {
//         classAvg = classAvg + classPoints[i];
//         // console.log(i)
//     }

//     classAvg = classAvg / classPoints.length;
//     // console.log(classAvg);
//     console.log(yourPoints)
//     console.log(classAvg)
//     if (yourPoints > classAvg) {
//         return true;
//     } else {
//         return false;
//     }
    
// }
  
// betterThanAverage([56, 93, 85, 97, 82], 93);



// Optimized solution 
/* 
function betterThanAverage(classPoints, yourPoints) {
    // I am guessing that yourPoints > classPoints is implicitly implied of return true/false
  return yourPoints > classPoints.reduce(function(sum, x){return sum + x},yourPoints)/(classPoints.length+1)
}
*/
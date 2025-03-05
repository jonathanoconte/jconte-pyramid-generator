// Complete the getAverage function which takes in an array of test scores and returns the average score.

// The average is calculated by adding up all the scores and dividing by the total number of scores.

// Example Code
// average = sum of all scores / total number of scores
// A couple of function calls have been provided for you so you can test out your code.

// Tips

// You can use a loop to iterate over the scores array and add up all the scores.
// You can use the length property to get the total number of scores.

// function getAverage(scores) {

// }

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));




function getAverage(scores) {
let sum = 0
//loop through the scores array and add up all scores
for(let i = 0; i < scores.length; i++){
    sum = sum + scores[i];
}

//Calculate average by dividing sum by the number of scores
//sum value here is sum of all scores
let average = sum / scores.length;

return average;

}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));




function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  function getGrade(score) {
  
  if(score === 100){
    return "A++";
  }
  else if(score >= 90 ){
    return "A";
  }
  else if(score >= 80){
    return "B";
  }
  else if(score >= 70){
    return "C";
  }
  else if(score >= 60){
    return "D";
  }
  else{
      return "F";
  }
  
  }
  
  console.log(getGrade(99));
  console.log(getGrade(82));
  console.log(getGrade(56));
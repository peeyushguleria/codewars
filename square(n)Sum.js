/* Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because  1^2 + 2^2 + 2^2 = 9 */
// Answer //
function squareSum(numbers){
  return numbers.map(a => Math.pow(a,2)).reduce((acc,c)=>acc+c,0);
}

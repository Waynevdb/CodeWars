//Complete the solution so that it reverses the string passed into it.
//The split() method splits a String object into an array of string by separating the string into sub strings.
//The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
//The join() method joins all elements of an array into a string.

function solution(str){
  return str.split("").reverse().join("")
}

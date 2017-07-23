function repeatStringNumTimes(str, num) {
  //Declare an empty array variable to hold the new string.
  var array = [];

  /*Use a for loop to iterate through the string the given
    number of times.*/
  for(i = 0; i < num;) { 

  /*Set the str variable to the array. The array will
    contain the given string n amount of times (n) being
    the number given to the num parameter in the function.*/
    array[i++] = str;
    
    //Return the array with the new string and join it together with no spaces.
  } return array.join("");
}

repeatStringNumTimes("abc", 3);
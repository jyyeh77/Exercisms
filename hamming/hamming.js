//function that takes two strings as inputs, calculates Hamming distance
// between them and checks if they are equal length

var Hamming=function(){};

// defines function compute in Hamming constructor
Hamming.prototype.compute=function(strA, strB){
  var strA_length = strA.length;
  var strB_length = strB.length;

  // sets counter for Hamming distance
  var distance = 0;

  // checks if length of input strings are equal
  if (strA_length==strB_length){
    for (var i=0; i<strA_length; i++){

      // checks that characters at index i are the same in both strings
      if (strA.charAt(i)==strB.charAt(i)){

        console.log("Hamming distance remains the same!");
      }
      else {
        distance+=1;
        console.log("Hamming distance is now "+ distance)
        }

    }
  }
  else {
    throw "DNA strands must be of equal length.";
  }
  return distance;

}

//compute("ABA","AAA");
module.exports=Hamming;

// counts occurrences of each word in string

var words = function (){

}

words.prototype.count = function (text){

  var count = 0;

  //splits input text into array format
  var testText = text.toLowerCase().replace(/\s+/, " ")

  // trim removes leading and trailing whitespace
  var arrayText = testText.trim().split(' ');



  var countmap = {};

  for (var i = 0; i < arrayText.length; i++) {

    // initiates each unique word as a property in countmap
    if (!countmap.hasOwnProperty(arrayText[i])) {

        countmap[arrayText[i]] = 1;

      }

    else {

      // if word already exists as property in countmap, adds 1
        countmap[arrayText[i]]++;
      }

    }

  return countmap;
}


module.exports = words;

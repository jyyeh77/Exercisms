//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {
  this.response = {
    silent: 'Fine. Be that way!',

    random: 'Whatever.',

    shout: 'Whoa, chill out!',

    question: 'Sure.'

  }

};

Bob.prototype.hey = function(input) {

  var ifSilent, ifQuestion, ifShouting;

  ifSilent = /^\s*$/.test(input);

  ifQuestion = /[?]$/.test(input);

  ifShouting = input.toUpperCase() === input;

  ifAllNumbers = /([0-9]\?*)$/.test(input);

  // returns 'Fine, be that way!' if no input is given
  // regex matches either zero instances of spacea, or infinite number of spaces
  // ^ and $ indicate that whole string must match this condition
  if (ifSilent){

    return this.response.silent;

  }

  // returns 'Whoa, chill out!' if input matches regex with only uppercase char
  // sentence can end with any punctuation
  else if (ifShouting && !ifAllNumbers) {

    return this.response.shout;
  }

  // returns 'Sure' when asked a questions
  // regex should only match sentences where there is a ? at the end AND if
  // there are no caps
  else if (ifQuestion) {

    return this.response.question;
  }

  else {

    return this.response.random;
  }
};

//var bobtest = new Bob();
//bobtest.hey();

module.exports = Bob;

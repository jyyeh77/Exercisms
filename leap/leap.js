// function that takes input year and tests if it is a leap year
/* a year is a leap year if it is evenly divisble by 4, not evenly divisible
by 100 unless evenly divisible by 400*/

var Leap=function(year){
  this.year=year;
};

Leap.prototype.isLeap = function() {

  // sets the condition for a leap year
  if (this.year % 4 == 0 && this.year%100!=0 || this.year%400==0){
    return true;
  }
  else {
    return false;
  }
};

var test = new Leap(2016);
console.log("Is this year a leap year or not? " + test.isLeap());
//module.exports = Leap;

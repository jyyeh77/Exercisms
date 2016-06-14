//function to determine when someone's 1 gigasecond anniversary is

var gigasecond = function (time){

  // binds a certain date in UTC form to instances of
  // this constructor
  this.time = time;

  // gigasecond is 10**9 seconds
  this.giga = 1000000000;

}

gigasecond.prototype.date = function (){

  // returns milliseconds after Jan. 1st, 1970
  var birthSec = Date.parse(this.time);

  // adds gigasecond to input date
  var newTime = birthSec + this.giga*1000;

  // creates new Date object reflecting gigasecond anniversary
  var newDate = new Date(newTime);

  return newDate;
}


module.exports = gigasecond;

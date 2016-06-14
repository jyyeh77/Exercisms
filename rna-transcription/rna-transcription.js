//function that transcribes an input DNA strand to RNA

var Transcriber = function(){
  // allows for transcribe to be accessed by objects instantiated by Transcriber
  // constructor
  var transcription = {

    // key:value for RNA strand complementary to input DNA
    G:'C', C:'G', A:'U', T:'A'
  }

  this.transcribe = function(DNA){

    return transcription[DNA];
  }
}



Transcriber.prototype.toRna = function(DNA_seq){
  var DNA = DNA_seq.toUpperCase();

  var RNA_seq='';

  // loops through  input DNA
  for (var i = 0; i < DNA.length; i++){

    // converts input DNA nucleotide to RNA and adds RNA in one sequence
    RNA_seq = RNA_seq + this.transcribe(DNA.charAt(i));
  }

  return RNA_seq;
}



module.exports = Transcriber;

// Test to verify haiku only has three lines
// Test to verify first line of haiku only has 5 syllables

export default function Haiku(poem) {
  this.poem = poem;
}

Haiku.prototype.lineVerify = function (){
  const numOfLines = this.poem.split(/\r\n|\r|\n/).length;
  
  if (numOfLines === 3) {
  return true;
  } else {
  return false;
  }
};

Haiku.prototype.checkVowels = function (){
  const poemArray = this.poem.split(/\r\n|\r|\n/);
  let lineOneArray = [];
  lineOneArray.push(poemArray[0]);
  
  let lineOne = lineOneArray.toString();
  let lineOneWordsArray = lineOne.split(" ");

  const vowelArray = ['a', 'e', 'i', 'o', 'u', 'y'];
   
  let vowelCount = 0;
  vowelArray.forEach(function (vowel) {
    lineOneWordsArray.forEach(function (word) {
      if (word.includes(vowel)) {
        vowelCount ++;
      }
   });
  });
  return vowelCount
};
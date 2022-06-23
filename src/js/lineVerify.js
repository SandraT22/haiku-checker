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

Haiku.prototype.checkSyllables = function (){
  const poemArray = this.poem.split(/\r\n|\r|\n/);
  let lineOneArray = [];
  lineOneArray.push(poemArray[0]);
  let lineOne = lineOneArray.toString().toLowerCase;

  function new_count(lineOne) {
   
    if(word.length <= 3) { return 1; }
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
      word = word.replace(/^y/, '');
      return word.match(/[aeiouy]{1,2}/g).length;
  }
};

// Haiku.prototype.checkVowels = function (){
//   const poemArray = this.poem.split(/\r\n|\r|\n/);
//   let lineOneArray = [];
//   lineOneArray.push(poemArray[0]);
  
//   let lineOne = lineOneArray.toString();
//   let lineOneWordsArray = lineOne.split(" ");

//   const vowelArray = ['a', 'e', 'i', 'o', 'u', 'y'];
   
//   let vowelCount = 0;
//   vowelArray.forEach(function (vowel) {
//     lineOneWordsArray.forEach(function (word) {
//       if (word.includes(vowel)) {
//         vowelCount ++;
//       }
//    });
//   });
//   return vowelCount
// };

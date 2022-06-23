// Test to verify haiku only has three lines

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
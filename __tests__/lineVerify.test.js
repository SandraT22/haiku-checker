import Haiku from './../src/js/lineVerify.js';

describe("Haiku", () => {
  let poem1;

  beforeEach (() => {
    poem1 = new Haiku(`Friday comes in bright
    Fills my heart with such delight
    Soon my feet take flight`);
    
  })

  test("should check to verify that poem has 3 lines", () => {
    expect(poem1.lineVerify()).toEqual(true);    
  });

  test("should check to verify how many vowels are in first line", () => {
    expect(poem1.checkVowels()).toEqual(7);    
  });
});
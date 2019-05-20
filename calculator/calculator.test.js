const { add } = require('./calculator.js');
 // step4 make sure to {add} require .js file^

// test away!
// // can be written with the word 'it' or 'test' it('runs test', () => {})
// test('runs the tests', () => {
//  //this is called make an assertion
//   expect(true).toBe(true);// to be is a matcher
// })
// after step 4 commented out the example code and used "describes"


describe('calculator.js', () => {

  describe('add()', () => {
    it('should return the sume of the numbers passed', () => {
      expect(add(2, 2)).toBe(4);
      expect(add(2, 3)).toBe(5);
    })

    // step 5
    // it.todo('should return 0 when called with no arguments');// can use todo to save test that you want to write but are currently in the middle of a different project. the Todo will be listed in the tests code. You can comment out a test by using an 'x' in front of it. But it does no work on todo's
    
    it('should return 0 when called with no arguments', () => {
      // AAA thinking
      // 1. Arrange
      // 2. Act
      // 3. Assert

      // arrange
      const expected = 0;

      // act

      const actual = add();

      // assert
      // expect(actual).toBe(expected); 
      // also you can do it this way 
      expect(add()).toBe(0);
    });

    // another test
    it('it should return the passed in the value when only one argument is provided', () => {
      expect(add(2)).toBe(2)
      expect(add(-1)).toBe(-1)
    })

    it('should handle any nmber of arguments separated by a comma', () => {
      expect(add(1, 2, 3)).toBe(6);
      expect(add(1, 2, 3, 5)).toBe(11);
    })

    it('should be able to handle an array of numbers', () => {
      expect(add([1, 2, 3])).toBe(6);
      expect(add([1, 2, 3, 5])).toBe(11);
    })
  })
})
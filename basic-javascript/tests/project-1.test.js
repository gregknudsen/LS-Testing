const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    it('Should return 20 when passed 2', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const result = multiplyByTen(2);
      assert.strictEqual(result, 20);
    });
    it('Should not equal to 10 when passed 2', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const result = multiplyByTen(2);
      expect(result).to.not.equal(10);
    });
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const result = multiplyByTen(3);
      assert.typeOf(result, 'number');
    });
    // begin here
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return 5 when passed 10', () => {
      const subtractFive = funcs.subtractFive;
      const result = subtractFive(10);
      expect(result).to.equal(5);
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      const result = subtractFive(10);
      assert.typeOf(result, 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true when passed bat and cat', () => {
      const areSameLength = funcs.areSameLength;
      const res = areSameLength('bat', 'cat');
      assert.isTrue(res);
    });
    it('should return false when passed bat and caaat', () => {
      const areSameLength = funcs.areSameLength;
      const res = areSameLength('bat', 'caaat');
      assert.isNotTrue(res);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should be equal when passed same value', () => {
      const areEqual = funcs.areEqual;
      const res = areEqual(5, 5);
      assert.isTrue(res);
    });
    it('should return boolean', () => {
      const areEqual = funcs.areEqual;
      const res = areEqual(5, 5);
      assert.typeOf(res, 'boolean');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if less than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const res = lessThanNinety(80);
      assert.isTrue(res);
    });
    it('should return a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const res = lessThanNinety(98);
      assert.typeOf(res, 'boolean');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be return true if greater than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const res = greaterThanFifty(55);
      assert.isTrue(res);
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const res = greaterThanFifty(40);
      assert.isBoolean(res);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return 5 if passed 2 and 3', () => {
      const add = funcs.add;
      const res = add(2, 3);
      assert.strictEqual(res, 5);
    });
    it('should return a number', () => {
      const add = funcs.add;
      const res = add(2, 3);
      assert.typeOf(res, 'number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return 5 if passed 10 and 5', () => {
      const subtract = funcs.subtract;
      const res = subtract(10, 5);
      assert.strictEqual(res, 5);
    });
    it('should return 5 if passed 10 and 5', () => {
      const subtract = funcs.subtract;
      const res = subtract(10, 5);
      assert.typeOf(res, 'number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return the quotient', () => {
      const divide = funcs.divide;
      const res = divide(10, 5);
      assert.strictEqual(res, 2);
    });
    it('should return zero if the first argument is zero', () => {
      const divide = funcs.divide;
      const res = divide(0, 5);
      assert.strictEqual(res, 0);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should mutiply both the arguments', () => {
      const multiply = funcs.multiply;
      const res = multiply(5, 5);
      assert.strictEqual(res, 25);
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      const res = multiply(5, 5);
      assert.typeOf(res, 'number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the reminder', () => {
      const getRemainder = funcs.getRemainder;
      const res = getRemainder(10, 5);
      assert.strictEqual(res, 0);
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      const res = getRemainder(10, 5);
      assert.typeOf(res, 'number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
});

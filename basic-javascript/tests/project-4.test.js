const chai = require('chai');
const funcs = require('../src/project-4.js');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const assert = chai.assert;
const expect = chai.expect;


chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-4', () => {
  describe('`multiplyArguments`', () => {
    it('should return the prodcut of all the arguments', () => {
      const multiplyArguments = funcs.multiplyArguments;
      const res = multiplyArguments();
      assert.strictEqual(res, 0);
    });
  });
  describe('`invokeCallback`', () => {
    it('should call callback function', () => {
      const invokeCallback = funcs.invokeCallback;
      const callBack = sinon.spy();
      invokeCallback(callBack);
      expect(callBack).to.have.been.calledWith();
    });
  });
  describe('`sumArray`', () => {
    it('should add elements of array together', () => {
      const sumArray = funcs.sumArray;
      const callBack = sinon.spy();
      const numbers = [2, 3];
      let sum = 0;
      numbers.forEach((number) => {
        return sum += number;
      });
      sumArray(numbers, callBack);
      expect(callBack).to.have.been.calledWith(sum);
    });
  });
  describe('`forEach`', () => {
    it('should call callback with each element of array', () => {
      const forEach = funcs.forEach;
      const callBack = sinon.spy();
      const array = [2, 2, 4, 5, 7];
      const arrayLength = array.length;
      forEach(array, callBack);
      console.log(callBack);
      expect(callBack).to.have.callCount(arrayLength);
    });
  });
});

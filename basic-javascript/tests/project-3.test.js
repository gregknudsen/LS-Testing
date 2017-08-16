const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
// const newUser = (name, email, password) => {
//     const object = {
//       name,
//       email,
//       password
//     };
//     return object;
//   };
//   const hasEmail = (user) => {
//     if (user.email) {
//       return true;
//     }
//     return false;
//   };
//   const hasProperty = (object, property) => {
//     if (object[property]) {
//       return true;
//     }
//     return false;
//   };

describe('Project-3', () => {
  describe('`newUser`', () => {
    it('should return an object with the properties name, email, password', () => {
      const newUser = funcs.newUser;
      const result = newUser('Greg', 'greg@greg.com', 'password');
      // console.log(result);
      expect(result).to.eql({ name: 'Greg', email: 'greg@greg.com', password: 'password' });
      // assert.propertyVal({ name: 'Greg', email: 'greg@greg.com', password: 'password' }, { result });
    });
  });
  describe('`hasEmail`', () => {
    it('should return true if the user has an email prop', () => {
      const hasEmail = funcs.hasEmail;
      const user = { name: 'Greg', email: 'greg@greg.com', password: 'password' };
      // console.log(result);
      expect(user).to.have.property('email');
    });
  });
  describe('`hasProperty`', () => {
    it('should return true if the user has an email prop', () => {
      const hasProperty = funcs.hasProperty;
      const user = { name: 'Greg', email: 'greg@greg.com', password: 'password' };
      // console.log(result);
      expect(user).to.have.property('password');
    });
  });
});

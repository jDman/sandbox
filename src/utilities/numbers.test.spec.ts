import * as Utilities from './numbers';
import { expect } from 'chai';
import 'mocha';

describe('Numbers Utilities', () => {
  describe('restrictRange', () => {
    it('restrict a number higher than max to max', () => {
      const min = 3;
      const max = 9;
      const numberToRestrict = 10;

      const restricted = Utilities.restrictRange(numberToRestrict, min, max);

      expect(restricted).to.equal(max);
    });

    it('restrict a number higher than min and lower than max to number', () => {
      const min = 3;
      const max = 9;
      const numberToRestrict = 7;

      const restricted = Utilities.restrictRange(numberToRestrict, min, max);

      expect(restricted).to.equal(numberToRestrict);
    });

    it('restrict a number lower than min and to min', () => {
      const min = 3;
      const max = 9;
      const numberToRestrict = 2;

      const restricted = Utilities.restrictRange(numberToRestrict, min, max);

      expect(restricted).to.equal(min);
    });
  });

  describe('modulus', () => {
    it('should take two positive numbers and return remainder after division', () => {
      const dividend = 20;
      const divisor = 3;
      const expectedRemainder = 2;

      const remainder = Utilities.modulus(dividend, divisor);

      expect(remainder).to.equal(expectedRemainder);
    });

    it('should take a negative and a positive number and return positive remainder after division', () => {
      const dividend = -20;
      const divisor = 3;
      const expectedRemainder = 1;

      const remainder = Utilities.modulus(dividend, divisor);

      expect(remainder).to.equal(expectedRemainder);
    });
  });
});


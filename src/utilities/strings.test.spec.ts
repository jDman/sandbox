import * as Utilities from './strings';
import { expect } from 'chai';
import 'mocha';
import * as deepFreeze from 'deep-freezer';

describe('String Utilities', () => {
  describe('areAnagrams', () => {
    it('should return true if compared strings are anagrams', () => {
      const stringA = 'civic';
      const stringB = 'vicic';

      var isAnagram = Utilities.areAnagrams(stringA, stringB);

      expect(isAnagram).to.be.true;
    });

    it('should return true if compared strings are anagrams', () => {
      const stringA = 'civic';
      const stringB = 'vific';

      var isAnagram = Utilities.areAnagrams(stringA, stringB);

      expect(isAnagram).to.not.be.true;
    });
  });

  describe('isPalindrome', () => {
    it('should return true if string reads same forwards and backwards', () => {
      const stringA = 'civic';

      var isPalindrome = Utilities.isPalindrome(stringA);

      expect(isPalindrome).to.be.true;
    });

    it('should return false if string does not reads same forwards and backwards', () => {
      const stringA = 'cycle';
      
      var isPalindrome = Utilities.isPalindrome(stringA);

      expect(isPalindrome).to.not.be.true;
    });
  });

  describe('isAnyPermutationPalindrome', () => {
    it('should return true if all characters but one match another character, else returns false', () => {
      const stringA = 'civic';
      const stringB = 'toto';
      const stringC = 'civil';

      var isAnyPermutationPalindromeA = Utilities.isAnyPermutationPalindrome(stringA);
      var isAnyPermutationPalindromeB = Utilities.isAnyPermutationPalindrome(stringB);
      var isAnyPermutationPalindromeC = Utilities.isAnyPermutationPalindrome(stringC);
      
      expect(isAnyPermutationPalindromeA).to.be.true;
      expect(isAnyPermutationPalindromeB).to.be.true;
      expect(isAnyPermutationPalindromeC).to.not.be.true;
    });
  });
});
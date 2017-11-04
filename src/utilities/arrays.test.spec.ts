import * as Utilities from './arrays';
import { expect } from 'chai';
import 'mocha';
import * as deepFreeze from 'deep-freezer';

describe('Arrays Utilities', () => {
  describe('readonlySort', () => {
    it('should return a sorted array with a passed in sorting function without mutating the original array', () => {
      const two = 2, three = 3, four = 4, five = 5, six = 6;
      const numberArray = [1, four, six, two, five, three];
      const sortFunction = (a: number, b: number) => b - a;

      var sortedArray = Utilities.readonlySort(numberArray, sortFunction);      

      expect(sortedArray).to.be.an('array').and.to.have.ordered.members([six, five, four, three, two, 1 ]);
      expect(numberArray).to.have.ordered.members([1, four, six, two, five, three]);
    });
  });

  describe('insertionSort', () => {
    it('should sorted the array passed to it', () => {
      const two = 2, three = 3, four = 4, five = 5, six = 6;
      const numberArray = [1, four, six, two, five, three];

      Utilities.insertionSort(numberArray);

      expect(numberArray).to.be.an('array').and.to.have.ordered.members([ 1, two, three, four, five, six ]);
    });
  });

  describe('quickSort', () => {
    it('should sort an array passed to it without mutating original array', () => {
      const two = 2, three = 3, four = 4, five = 5, six = 6;
      const numberArray = [1, four, six, two, five, three];

      const sortedArray = Utilities.quickSort(numberArray);

      expect(sortedArray).to.be.an('array').and.to.have.ordered.members([ 1, two, three, four, five, six ]);
      expect(numberArray).to.have.ordered.members([1, four, six, two, five, three]);
    });
  });

  describe('mergeSort', () => {
    it('should sorted the array passed to it without mutating original array', () => {
      const two = 2, three = 3, four = 4, five = 5, six = 6;
      const numberArray = [1, four, six, two, five, three];

      var sortedArray = Utilities.mergeSort(numberArray);

      expect(sortedArray).to.be.an('array').and.to.have.ordered.members([ 1, two, three, four, five, six ]);
      expect(numberArray).to.have.ordered.members([1, four, six, two, five, three]);
    });
  });
});
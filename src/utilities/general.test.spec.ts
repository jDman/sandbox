import * as Utilities from './general';
import { expect } from 'chai';
import 'mocha';
import * as deepFreeze from 'deep-freezer';

describe('General Utilities', () => {
  describe('switchCase method', () => {
    it('should return defaultCase if actionType not in cases', () => {
      const state = 5;
      const cases = {
        'INCREMENT': () => state + 1,
        'DECREMENT': () => state - 1
      };
      const actionType = 'NOT_PRESENT';

      deepFreeze(state);

      const newState = Utilities.switchCase(cases)(state)(actionType);

      expect(newState).to.equal(state);
    });

    it('should return case method value if actionType equals case key when wrapped in executeIfFunction', () => {
      const state = 5;
      const actionType1 = 'INCREMENT';
      const actionType2 = 'DECREMENT';
      const cases = {
        'INCREMENT': () => state + 1,
        'DECREMENT': () => state - 1
      };

      deepFreeze(state);

      const newState1 = Utilities.executeIfFunction(Utilities.switchCase(cases)(state)(actionType1));

      expect(newState1).to.equal(state + 1);

      const newState2 = Utilities.executeIfFunction(Utilities.switchCase(cases)(newState1)(actionType2));

      expect(newState2).to.equal(state - 1);
    });

    it('should return case value if actionType equals case key', () => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const state = 'I don\'t know what day it is.';
      const actionType = 'Monday';

      deepFreeze(state);

      const day = Utilities.switchCase(
        days.reduce((acc, value) =>
          (acc[value] = value, acc), {})
      )(state)(actionType);

      expect(day).to.equal(actionType);
    });
  });

  describe('executeIfFunction method', () => {
    it('should return a value from the method passed to it', () => {
      const testMethod = () => 'hi there';
      const result = <() => string>Utilities.executeIfFunction(testMethod);
      expect(result).to.equal('hi there');
    });

    it('should return a value passed to it', () => {
      const test = 'hi there';
      const result = <string>Utilities.executeIfFunction(test);
      expect(result).to.equal('hi there');
    });
  });

  describe('switchCaseFunction method', () => {
    it('should return defaultCase if actionType not in cases', () => {
      const state = 5;
      const actionType = 'NOT_PRESENT';
      const cases = {
        'INCREMENT': () => state + 1,
        'DECREMENT': () => state - 1
      };

      deepFreeze(state);

      const newState = Utilities.switchCaseFunction(cases)(state)(actionType);

      expect(newState).to.equal(state);
    });

    it('should return case method value if actionType equals case key', () => {
      const state = 5;
      const stateIncremented = 6;
      const stateDecremented = 4;
      const actionType1 = 'INCREMENT';
      const actionType2 = 'DECREMENT';
      const cases = {
        'INCREMENT': () => state + 1,
        'DECREMENT': () => state - 1
      };

      deepFreeze(state);
      
      const newState1 = Utilities.switchCaseFunction(cases)(state)(actionType1);

      expect(newState1).to.equal(stateIncremented);
      
      const newState2 = Utilities.switchCaseFunction(cases)(state)(actionType2);

      expect(newState2).to.equal(stateDecremented);
    });
  });
});
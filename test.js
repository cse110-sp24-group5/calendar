/* global test, expect */

/** Import the function that we want to test*/
import {
    factorial
} from './dummyScript.js';

/** This tests if the factorial function outputs 1 if it is passed param 0*/
test('factorial 0', () => {
    expect(factorial(0)).toBe(1);
});

/** This tests if the factorial function outputs 1 if it is passed param 1*/
test('factorial 1', () => {
    expect(factorial(1)).toBe(1);
});

/** This tests if the factorial function outputs 120 if it is passed param 5*/
test('factorial 5', () => {
    expect(factorial(5)).toBe(120);
});

/** This tests if the factorial function outputs 720 if it is passed param 6*/
test('factorial 6', () => {
    expect(factorial(6)).toBe(720);
});


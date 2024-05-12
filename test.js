import {
    factorial
} from './dummyScript.js';


test('factorial 0', () => {
    expect(factorial(0)).toBe(1);
});

test('factorial 1', () => {
    expect(factorial(1)).toBe(1);
});

test('factorial 5', () => {
    expect(factorial(5)).toBe(120);
});

test('factorial 9', () => {
    expect(factorial(6)).toBe(720);
});

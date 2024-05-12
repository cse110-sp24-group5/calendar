/**
 * Dummy code that finds the factorial of some passed value
 * @param {number} value - is the value whose factorial you want to find
*/
export function factorial (value) {
    //base cases
    if(value === 0 || value == 1)
        return 1;
    //recursive case
    return value * factorial(value - 1);
}

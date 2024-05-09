export function factorial (value) {
    if(value === 0)
        return 1;
    else if(value == 1)
        return 1;
    return factorial(value - 1) * value;
}

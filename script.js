const generateAdditionTask = (level) => {
    if (level < 2 || level > 6) {
        return "Invalid level. Please enter a level between 2 and 6.";
    }

    const maxCarryLevel = Math.ceil(level/2.0 - 1);
    const carryLevel = Math.floor(Math.random() * (maxCarryLevel + 1));
    level -= carryLevel;

    while (true) {
        const num1 = Math.floor(Math.random() * (10 ** 
Math.ceil(level/2.0) - 10 ** (Math.ceil(level/2.0)-1)) + 10 ** 
(Math.ceil(level/2.0)-1));
        const num2 = Math.floor(Math.random() * (10 ** 
Math.floor(level/2.0) - 10 ** (Math.floor(level/2.0)-1)) + 10 ** 
(Math.floor(level/2.0)-1));
        const carry = countCarry(num1, num2);

        if (carry === carryLevel) {
            if (carry === 0) {
                return `${num1} + ${num2}`;
            } else {
                return `${num1} + ${num2} with carry`;
            }
        }
    }
};

const countCarry = (a, b) => {
    let carry = 0;
    let count = 0;
    let lenA = a.toString().length;
    let lenB = b.toString().length;

    while (lenA !== 0 || lenB !== 0) {
        let x = 0;
        let y = 0;
        if (lenA > 0) {
            x = parseInt(a.toString()[lenA - 1]);
            lenA--;
        }
        if (lenB > 0) {
            y = parseInt(b.toString()[lenB - 1]);
            lenB--;
        }
        const sum = x + y + carry;
        if (sum >= 10) {
            carry = 1;
            count++;
        } else {
            carry = 0;
        }
    }

    return count;
};

const generateBtn = document.getElementById("generate-btn");
const level


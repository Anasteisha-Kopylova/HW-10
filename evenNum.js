const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNum = numbers.filter(number => number % 2 === 0);

alert('Even numbers: ' + evenNum.join(', '));
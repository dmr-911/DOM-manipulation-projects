const numbers = [54, 31, 67, 98, 44, 22, 15, 7, 3, 86, 20, 123, 321, 84];

const sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
})
console.log(sortedNumbers);
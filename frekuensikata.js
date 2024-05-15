function countQueryInInput(input, query) {
    return query.map(q => input.filter(i => i === q).length);
}

// Test case
let inputArray = ['xc', 'dz', 'bbb', 'dz'];
let queryArray = ['bbb', 'ac', 'dz'];
console.log(countQueryInInput(inputArray, queryArray));  // Output: [1, 0, 2]
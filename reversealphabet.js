function reverseString(s) {
    // Memisahkan karakter alfabet dan angka
    let alphabets = s.split('').filter(char => isNaN(char));
    let numbers = s.split('').filter(char => !isNaN(char));

    // Membalikkan urutan alfabet
    alphabets.reverse();

    // Menggabungkan kembali alfabet dan angka
    return alphabets.join('') + numbers.join('');
}

// Test case
let inputStr = "NEGIE1";
console.log(reverseString(inputStr));  // Output: EIGEN1

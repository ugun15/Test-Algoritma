function longestWord(sentence) {
    let words = sentence.split(' ');
    let longest = words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
    return `${longest}: ${longest.length} character`;
}

// Test case
let sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longestWord(sentence));  // Output: mengerjakan: 11 character
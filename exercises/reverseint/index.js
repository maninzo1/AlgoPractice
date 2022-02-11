// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //turn into string
    //reverse it
    //join
    //turn back to number
  const reverseStr = n.toString().split('').reverse().join('')
  return parseInt(reverseStr) * Math.sign(n);
}

reverseInt(30);

module.exports = reverseInt;

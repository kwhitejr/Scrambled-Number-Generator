module.exports = function generator (amount) {

  var numArr = [];
  amount = parseInt(amount, 10);
  if (isNaN(amount) || amount <= 0) {
    console.log('You must enter a postive integer, lazybones.');
    return numArr;
  }
  for (var i = 0; i < amount; i++) {
    numArr[i] = i;
  }
  console.log(numArr);
/* The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
See https://github.com/coolaj86/knuth-shuffle */
  var currentIndex = numArr.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = numArr[currentIndex];
    numArr[currentIndex] = numArr[randomIndex];
    numArr[randomIndex] = temporaryValue;
  }
  console.log(numArr);
  return numArr;
};
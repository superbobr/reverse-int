module.exports = function reverse (n) {
  let revNumber = '' + n;
  if (revNumber[0] === '-') {
      revNumber = revNumber.slice(1);
  }
  return +(revNumber.split('').reverse().join(''));
};

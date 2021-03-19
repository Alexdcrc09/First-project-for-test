function convertNumbers(convert) {

  if (convert === 1) {
    return 'I';
  } if (convert === 'I') {
    return 1;
  }
  if (convert === 2) {
    return 'II';
  }
  if (convert === 'II') {
    return 2;
  }
  if (convert === 3) {
    return 'III';
  }
  if (convert === 'III') {
    return 3;
  }

}


module.exports = convertNumbers;
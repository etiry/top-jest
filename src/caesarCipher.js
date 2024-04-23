const getShiftedCharCode = (char, shiftFactor) => {
  const shiftFactorRemainder = shiftFactor % 26;

  if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
    return ((char.charCodeAt() - 97 + shiftFactorRemainder) % 26) + 97;
  } else if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
    return ((char.charCodeAt() - 65 + shiftFactorRemainder) % 26) + 65;
  }
  return char.charCodeAt();
};

const caesarCipher = (string, shiftFactor) => {
  stringArray = [...string];
  encryptedString = stringArray.reduce((acc, char) => {
    const shiftedCharCode = getShiftedCharCode(char, shiftFactor);
    return (acc += String.fromCharCode(shiftedCharCode));
  }, "");

  return encryptedString;
};

module.exports = caesarCipher;

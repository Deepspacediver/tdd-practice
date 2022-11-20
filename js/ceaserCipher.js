const shiftUTF16 = (character, shift) => {
  let shiftedChar = String.fromCharCode(character.charCodeAt(0) + shift);
  let shiftedCode = shiftedChar.charCodeAt(0);

  // Checks for lower cased characters wrapping over "z"
  if (shiftedCode > 122)
    shiftedChar = String.fromCharCode(96 + (shiftedCode - 122));

  return shiftedChar;
};

const ceaserCipher = (string, shift) => {
  const shiftedArr = [];
  let stringToArray = string.split("");
  stringToArray.forEach((el) => {
    if (el === " " || el === "," || el === ".") shiftedArr.push(el);
    else {
      let newChar = shiftUTF16(el, shift);
      shiftedArr.push(newChar);
    }
  });
  return shiftedArr.join("");
};

export default ceaserCipher;

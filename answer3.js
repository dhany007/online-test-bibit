const bracketFound = (str, bracket) => {
  return str.indexOf(bracket)
}

const findFirstStringInBracket = (str) => {
  let words = '';
  
  let indexFirstBracketFound = bracketFound(str, '(')
  let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
  let indexClosingBracketFound = bracketFound(wordsAfterFirstBracket, ')')

  if (indexClosingBracketFound >= 0) {
    words = wordsAfterFirstBracket.substr(1, indexClosingBracketFound-1)
  }
  
  return words;
}

console.log(findFirstStringInBracket('aabx)aac'))

export function checkForRestrictedWords(inputStr)  {
  if (inputStr.indexOf('wtf') >= 0) {
    return true;
  }
  return false;
}